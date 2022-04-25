const crypto = require("crypto");
const User = require('../models/UserModel');
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

// @desc    Register user
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// @desc    Login user
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    // Check that user exists by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check that password match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

exports.forgotPassword = async (req, res, next) => {
  const {email} = req.body;

  try {
    const user = await User.findOne({email})

if(!user) {
  // Dont let possible hacker if email doesnt exist / eg. Email does not exist
  return next(new ErrorResponse("Email could not be sent", 404))

}

const resetToken = user.getResetPasswordToken();
await user.save()

// clicktracking / when using email service avoid adding weird looking link
const resetUrl = `http://localhost:3000/api/passwordreset/${resetToken}`


// Use pug???????
const message = `
<h1>YOu have requested a password reset</h1>

<p>Please follow this link to reset your password</p>
<a href=${resetUrl} clicktracking=off>${resetUrl}</a>

`

try {
  await sendEmail({
    to: user.email,
    subject: "Password reset request", 
    text: message
  })

  res.status(200).json({success: true, data: "Email sent" })
} catch (error) {
  console.log(err)
  
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  return next(new ErrorResponse("Email could not be sent", 500))
}

  } catch (error) {
    next(error)
  }
};

// @desc    Reset User Password
exports.resetPassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      // $gt = greater than
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }
};


const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ success: true, token });
};
