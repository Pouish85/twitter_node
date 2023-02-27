const router = require('express').Router();
const tweetRoute = require("./tweet.routes");
const { tweetList } = require('../controllers/tweet.controler');
const userRoute = require('/user.routes');

router.use('/tweet', tweetRoute);
router.use('/user', userRoute);

router.get('/', tweetList);

module.exports = router;