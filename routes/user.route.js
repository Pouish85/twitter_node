const router = require('express').Router();
const {signup, signupForm} = require('../controllers/user.controller.js');

router.get('/signup/form', signupForm);
router.post('/signup', signup);

// router.get('/signin/form', signinForm);
// router.post('/signin', signin);


module.exports = router;