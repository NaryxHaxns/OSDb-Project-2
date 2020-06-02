var express = require('express');
var router = express.Router();
const performersCtrl = require('../controllers/performers');

router.get('/', performersCtrl.index);

router.get('/add', performersCtrl.add);

router.get('/:id', performersCtrl.show);

router.get('/:id/addRole', performersCtrl.addRole)

router.get('/:id/edit', performersCtrl.edit);

router.post('/', performersCtrl.create);

router.put('/:id', performersCtrl.update);

module.exports = router;