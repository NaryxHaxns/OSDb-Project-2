var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/:id', isLoggedIn, usersCtrl.show);

router.get('/:id/edit', isLoggedIn, usersCtrl.edit);

router.put('/:id', isLoggedIn, usersCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;