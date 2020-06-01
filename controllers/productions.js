const Production = require('../models/production');

module.exports = {
    index,
    create
}

function index(req,res){
    res.render('production/add', { title: 'Add a Production' })
}

function create(req,res){
    const production = new Production(req.body);
    production.save(function(err){
        if(err) return res.redirect('/production/add')
        res.redirect('/')
    })
}