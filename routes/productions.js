var express = require('express');
var router = express.Router();
const productionsCtrl = require('../controllers/productions');

router.get('/add', isLoggedIn, productionsCtrl.add);

router.get('/:id', productionsCtrl.show);

router.get('/:id/edit', isLoggedIn, productionsCtrl.edit);

router.get('/:id/addPerformer', isLoggedIn, productionsCtrl.addPerformer);

router.get('/:id/remove', isLoggedIn, productionsCtrl.remove);

router.post('/', isLoggedIn, productionsCtrl.create);

router.delete('/:id', isLoggedIn, productionsCtrl.deleteProd);

router.put('/:id', isLoggedIn, productionsCtrl.update);

router.put('/:id/updateCast', isLoggedIn, productionsCtrl.updateCast)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;