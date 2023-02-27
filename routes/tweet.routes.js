const { createTweet, deleteTweet } = require('../controllers/tweet.controler');
const router = require('express').Router();

router.post('/new', createTweet);
router.get('/delete/:tweetId', deleteTweet);
// router.get('/edit/:tweetId', editTweet);

module.exports = router