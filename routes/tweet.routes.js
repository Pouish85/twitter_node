const { createTweet, deleteTweet, updateTweet, editTweet, showTweet, tweetLike } = require('../controllers/tweet.controler');
const router = require('express').Router();

router.post('/new', createTweet);
router.get('/like/:tweetId', tweetLike)
router.get('/delete/:tweetId', deleteTweet);
router.get('/edit/:tweetId', editTweet);
router.post('/edit/:tweetId', updateTweet);
router.get('/:tweetId', showTweet);


module.exports = router