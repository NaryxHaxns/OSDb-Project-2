const User = require('../models/user');

module.exports = {
    index,
    show
};

function index(req,res,next){
    res.render('users/index',{
        users,
        user: req.user,
        name: req.query.name,
        sortKey
    });
};

function show(req,res,next){
    User.findById(req.params.id), function(err,user){
        console.log(user);
        res.render(`users/${user._id}`, { user });
    };
};
