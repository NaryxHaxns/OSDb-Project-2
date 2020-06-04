var express = require('express');
var router = express.Router();
const productionsCtrl = require('../controllers/productions');

router.get('/add', productionsCtrl.add);

router.get('/:id', productionsCtrl.show);

router.get('/:id/edit', productionsCtrl.edit);

router.get('/:id/addPerformer', productionsCtrl.addPerformer);

router.get('/:id/remove', productionsCtrl.remove);

router.post('/',productionsCtrl.create);

router.delete('/:id', productionsCtrl.deleteProd);

router.put('/:id', productionsCtrl.update);

router.put('/:id/updateCast', productionsCtrl.updateCast)

module.exports = router;