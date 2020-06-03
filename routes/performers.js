var express = require('express');
var router = express.Router();
const performersCtrl = require('../controllers/performers');

router.get('/', performersCtrl.index);

module.exports = router;