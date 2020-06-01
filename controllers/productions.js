const Production = require('../models/production');

module.exports = {
    index,
    add,
    create,
    show
}

function index(req,res){
    let user = null;
    if(req.user){
        user = req.user
    }
    Production.find({}, function(err,productions){
        res.render('index', { title: 'OSDb: Online Stage Database', productions, user:req.user })
    })
}

function add(req,res){
    res.render('productions/add', { title: 'OSDb: Online Stage Database - Add a Production' })
}

function create(req,res){
    req.body.playwright = req.body.playwright.replace(/\s*,\s*/g);
    req.body.debut = parseInt(req.body.debut);
    req.body.genre = req.body.genre.replace(/\s*,\s*/g);
    const production = new Production(req.body);
    production.save(function(err) {
        if (err) return res.redirect('/productions/add')
        res.redirect('/')
    })
};

function show(req,res){
    Production.findById(req.params.id, function(err,productions){
        res.render('productions/show', { title: 'OSDb: Online Stage Database - Production', productions })
    })
};
