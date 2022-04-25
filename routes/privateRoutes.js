const express = require('express');
const router = express.Router();
const { getPrivateRoute } = require('../controllers/privateController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getPrivateRoute);

module.exports = router;
