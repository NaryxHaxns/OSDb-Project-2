const Performer = require('../models/performer');

module.exports = {
    add,
    create,
    show,
    addRole,
    edit,
    update
}

function add(req,res){
    res.render('performer/add', { title: 'OSDb: Online Stage Database - Add a Performer' })
}

function create(req,res){
    const s = req.body.born;
    req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
    const performer = new Performer(req.body);
    performer.save(function(err){
        if (err) return res.redirect('/performer/add');
        res.redirect('/performer');
    })
}

function show(req,res){
    Performer.findById(req.params.id, function(err,performer){
        res.render('performer/show', { title: 'OSDb: Online Stage Database - Performer', performer });
    })
}

function addRole(req,res){
    Performer.findById(req.params.id, function(err, performer){
        res.render('performer/addRole', { title: 'OSDb: Online Stage Database - Add a Role', performer })
    })
}

function edit(req,res){
    Performer.findById(req.params.id, function(err, performer){
        res.render('performer/edit', { title: 'OSDb: Online Stage Database - Edit Performer', performer })
    })
}

function update(req,res){
    Performer.findByIdAndUpdate(req.params.id, req.body, function(err){
        res.redirect(`/performer/${req.params.id}`);
    });
}

