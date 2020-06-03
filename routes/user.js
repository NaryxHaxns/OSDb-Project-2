var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/user');

router.get('/:id', userCtrl.show)

module.exports = router;