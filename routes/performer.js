var express = require('express');
var router = express.Router();
const performerCtrl = require('../controllers/performer');

router.get('/add', performerCtrl.add);

router.get('/:id', performerCtrl.show);

router.get('/:id/addRole', performerCtrl.addRole)

router.get('/:id/edit', performerCtrl.edit);

router.get('/:id/remove', performerCtrl.remove);

router.post('/', performerCtrl.create);

router.post('/:id', performerCtrl.deletePerf);

router.put('/:id', performerCtrl.update);

module.exports = router;