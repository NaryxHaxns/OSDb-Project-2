const User = require('../models/user');

module.exports = {
    show
};

function show(req,res){
    User.findById(req.params.id, function(err,user, productions){
        console.log(user);
        res.render('user/show', { title: 'OSDb: Online Stage Database - User', user, productions });
    });
};
