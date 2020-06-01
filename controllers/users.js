const User = require('../models/user');

module.exports = {
    index,
    show
};

function index(req,res,next){
    res.render('users/index',{
        user,
        user: req.user,
        name: req.query.name,
        sortKey
    });
};

function show(req,res,next){
    User.findById(req.params.id), function(err,user){
        res.render(`users/${user._id}`, { title: 'OSDb:Online Stage Database - User', user });
    };
};
