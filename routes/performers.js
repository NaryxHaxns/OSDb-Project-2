var express = require('express');
var router = express.Router();
const performersCtrl = require('../controllers/performers');

router.get('/', performersCtrl.index);

router.get('/add', performersCtrl.add);

router.get('/:id', performersCtrl.show);

router.get('/:id/addRole', performersCtrl.addRole)

router.post('/', performersCtrl.create);

module.exports = router;