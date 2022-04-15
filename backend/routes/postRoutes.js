const router = require('express').Router();
const { publicPosts, privatePosts } = require('../dbase');
const checkAuthMiddleware = require("../middleware/checkAuthMiddleware")


router.get('/public', (req, res) => {
  res.json(publicPosts);
});

router.get(
  '/private', checkAuthMiddleware,
  (req, res) => {
    //     console.log(req.user)
    res.json(privatePosts);
  }
);

module.exports = router;
