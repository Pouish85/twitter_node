const router = require('express').Router();
const {signinForm, signin, signout} = require('../controllers/auth.controller.js')
const { ensureAuthenticated } = require('../config/security.config');


router.get('/signin/form', signinForm);
router.post('/signin', signin);
router.get('/signout', ensureAuthenticated, signout);

module.exports = router;