const Performer = require('../models/performer');

module.exports = {
    index,
    add,
    create,
    show,
    addRole,
    edit,
    update
}

function index(req,res){
    Performer.find({}, function(err,performers){
        res.render('performers', { title: 'OSDb: Online Stage Database - Performers', performers });
    })
}

function add(req,res){
    res.render('performers/add', { title: 'OSDb: Online Stage Database - Add a Performer' })
}

function create(req,res){
    const s = req.body.born;
    req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
    const performer = new Performer(req.body);
    performer.save(function(err){
        if (err) return res.redirect('/performers/add');
        res.redirect('/performers');
    })
}

function show(req,res){
    Performer.findById(req.params.id, function(err,performers){
        res.render('performers/show', { title: 'OSDb: Online Stage Database - Performer', performers });
    })
}

function addRole(req,res){
    Performer.findById(req.params.id, function(err, performers){
        res.render('performers/addRole', { title: 'OSDb: Online Stage Database - Add a Role', performers })
    })
}

function edit(req,res){
    Performer.findById(req.params.id, function(err, performers){
        res.render('performers/edit', { title: 'OSDb: Online Stage Database - Edit Performer', performers })
    })
}

function update(req,res){
    Performer.findByIdAndUpdate(req.params.id, req.body, function(err){
        res.redirect(`/performers/${req.params.id}`);
    });
}

