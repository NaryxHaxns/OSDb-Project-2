var express = require('express');
var router = express.Router();
const productionsCtrl = require('../controllers/productions');

router.get('/add', productionsCtrl.add);

router.get('/:id', productionsCtrl.show);

router.post('/',productionsCtrl.create);

module.exports = router;
