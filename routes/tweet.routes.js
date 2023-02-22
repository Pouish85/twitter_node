const { createTweet } = require('../controllers/tweet.controler');
const router = require('express').Router();

router.post('/new', createTweet)

module.exports = router