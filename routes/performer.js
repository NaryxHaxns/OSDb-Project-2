var express = require('express');
var router = express.Router();
const performerCtrl = require('../controllers/performer');

router.get('/add', performerCtrl.add);

router.get('/:id', performerCtrl.show);

router.get('/:id/addRole', performerCtrl.addRole)

router.get('/:id/edit', performerCtrl.edit);

router.post('/', performerCtrl.create);

router.put('/:id', performerCtrl.update);

module.exports = router;