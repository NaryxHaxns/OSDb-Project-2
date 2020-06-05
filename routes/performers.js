var express = require('express');
var router = express.Router();
const performersCtrl = require('../controllers/performers');

router.get('/', performersCtrl.index);

router.get('/add', isLoggedIn, performersCtrl.add);

router.get('/:id', performersCtrl.show);

router.get('/:id/addRole', isLoggedIn, performersCtrl.addRole)

router.get('/:id/edit', isLoggedIn, performersCtrl.edit);

router.get('/:id/remove', isLoggedIn, performersCtrl.remove);

router.post('/', isLoggedIn, performersCtrl.create);

router.delete('/:id', isLoggedIn, performersCtrl.deletePerf);

router.put('/:id', isLoggedIn, performersCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;