const moment = require('moment');


const logger = (req, res, next) => {
    // console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    console.log('Request successful');
    next();
  };

  module.exports = logger