const { createTweet, deleteTweet, updateTweet, displayTweet } = require('../controllers/tweet.controler');
const router = require('express').Router();

router.post('/new', createTweet);
router.get('/delete/:tweetId', deleteTweet);
router.get('/edit/:tweetId', displayTweet);
router.post('/edit/:tweetId', updateTweet);

module.exports = router