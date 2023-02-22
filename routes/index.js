const router = require('express').Router();
const tweet = require("./tweet.routes");
const { tweetList } = require('../controllers/tweet.controler');

router.use('/tweet', tweet);

router.get('/', tweetList);

module.exports = router;