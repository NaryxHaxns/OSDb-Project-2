const User = require('../models/user');

module.exports = {
    show
};

function show(req,res){
    User.findById(req.params.id, function(err,user,productions){
        res.render('users/show', { title: 'OSDb: Online Stage Database - User', user: req.user });
    });
};
