var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('users/index', function(req, res, next) {
  res.render('users', { title: 'OSDb: Online Stage Database' });
});

router.get('users/:id', usersCtrl.show)

module.exports = router;
