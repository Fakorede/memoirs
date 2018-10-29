const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    // Successful authentication
    res.redirect('/dashboard');
});

module.exports = router;