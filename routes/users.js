var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/:id', { title: 'OSDb: Online Stage Database' });
});

router.get('users/:id', usersCtrl.show)

module.exports = router;
