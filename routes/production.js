var express = require('express');
var router = express.Router();
const productionCtrl = require('../controllers/production');

router.get('/add', productionCtrl.add);

router.get('/:id', productionCtrl.show);

router.get('/:id/edit', productionCtrl.edit);

router.get('/:id/addPerformer', productionCtrl.addPerformer);

router.post('/',productionCtrl.create);

router.put('/:id', productionCtrl.update);

module.exports = router;