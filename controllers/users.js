const User = require('../models/user');

module.exports = {
    show,
    edit,
    update
};

function show(req,res){
    let user = null;
    if(req.user){
        user = req.user;
    }
    User.findById(req.params.id, function(err,user, production){
        res.render('users/show', { title: 'OSDb: Online Stage Database - User', user, production });
    });
};

function edit(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('users/edit', { title: 'OSDB: Online Stage Database - User - Edit Bio', user })
    })
}

function update(req,res){
    User.findByIdAndUpdate(req.params.id, req.body, function(err){
        res.redirect(`/users/${req.params.id}`)
    })
}
