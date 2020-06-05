const Performer = require('../models/performer');
const Production = require('../models/production');

module.exports = {
    index,
    add,
    create,
    show,
    addRole,
    edit,
    update,
    remove,
    deletePerf
}

function index(req,res){
    let sortKey = req.query.sort || 'name';
    Performer.find({}, function(err,performers){
        res.render('performers', { title: 'OSDb: Online Stage Database', performers });
    }).sort(sortKey);
};

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
    Performer.findById(req.params.id, function(err,performer){
        res.render('performers/show', { title: 'OSDb: Online Stage Database - Performer', performer });
    })
}

function addRole(req,res){
    Performer.findById(req.params.id).populate('title').exec(function(err, performer){
        Production.find({_id: {$nin: performer.roles}}, function(err,productions){
        })
        res.render('performers/addRole', { title: 'OSDb: Online Stage Database - Add a Role', performer, productions })
    })
}

function edit(req,res){
    Performer.findById(req.params.id, function(err, performer){
        res.render('performers/edit', { title: 'OSDb: Online Stage Database - Edit Performer', performer })
    })
}

function update(req,res){
    Performer.findByIdAndUpdate(req.params.id, req.body, function(err){
        res.redirect(`/performers/${req.params.id}`);
    });
}

function remove(req,res){
    Performer.findById(req.params.id, function(err,performer){
        res.render('performers/remove', { title: 'OSDb: Online Stage Database - Remove Performer?', performer })
    })
}

function deletePerf(req,res){
    Performer.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/performers');
    })
}
