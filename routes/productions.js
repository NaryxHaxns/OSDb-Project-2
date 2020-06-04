var express = require('express');
var router = express.Router();
const productionsCtrl = require('../controllers/productions');

router.get('/add', productionsCtrl.add);

router.get('/:id', productionsCtrl.show);

router.get('/:id/edit', productionsCtrl.edit);

router.get('/:id/addPerformer', productionsCtrl.addPerformer);

router.get('/:id/remove', productionsCtrl.remove);

router.post('/', isLoggedIn, productionsCtrl.create);

router.delete('/:id', productionsCtrl.deleteProd);

router.put('/:id', productionsCtrl.update);

router.put('/:id/updateCast', productionsCtrl.updateCast)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }  

module.exports = router;