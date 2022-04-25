const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/UserModel');

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    //   Split makes a spacer eg. Bearer 343434sdskkl353ljl //  [1] - takes the second part
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    //   jwt.verify decripts token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse('No user found with this id', 404));
    }

    req.user = user;

    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorized to access this router', 401));
  }
};
