const router = require('express').Router();
const tweetRoute = require("./tweet.routes");
const { tweetList } = require('../controllers/tweet.controler');
const userRoute = require('./user.routes');
const authRoute = require("./auth.routes")

router.use('/tweet', tweetRoute);
router.use('/user', userRoute);
router.use('/auth', authRoute);

router.get('/', tweetList);

module.exports = router;