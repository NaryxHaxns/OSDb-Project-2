var express = require('express');
var router = express.Router();
const passport = require('passport');
const productionsCtrl = require('../controllers/productions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OSDb: Online Stage Database' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile','email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
});

router.get('/productions/add', productionsCtrl.index);

router.post('/',productionsCtrl.create)

module.exports = router;
