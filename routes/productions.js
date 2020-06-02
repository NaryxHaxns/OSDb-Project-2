var express = require('express');
var router = express.Router();
const productionsCtrl = require('../controllers/productions');

router.get('/add', productionsCtrl.add);

router.get('/:id', productionsCtrl.show);

router.get('/:id/edit', productionsCtrl.edit);

router.post('/',productionsCtrl.create);

router.post('/:id', productionsCtrl.addPerformer);



module.exports = router;
