var express = require('express');
var router = express.Router();
const peopleCtrl = require('../controllers/people');

router.get('/', peopleCtrl.index);

module.exports = router;