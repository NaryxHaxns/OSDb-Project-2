var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/users/index', function(req, res, next) {
  res.render('index', { title: 'OSDb: Online Stage Database' });
});

module.exports = router;
