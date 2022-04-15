const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(422).json({
      errors: [
        {
          msg: 'No token found',
        },
      ],
    });
  }

  try {
    let user = await JWT.verify(token, 'nfb32iur32ibfqfvi3vf932bg932g932');
    req.user = user.email;
    next();
  } catch (error) {
    return res.status(422).json({
      errors: [
        {
          msg: 'Invalid token',
        },
      ],
    });
  }
};
