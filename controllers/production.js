const Production = require('../models/production');

module.exports = {
    add,
    create,
    show,
    addPerformer,
    updateCast,
    edit,
    update,
    remove,
    deleteProd
}

function add(req,res){
    res.render('production/add', { title: 'OSDb: Online Stage Database - Add a Production' })
}

function create(req,res){
    req.body.playwright = req.body.playwright.replace(/\s*,\s*/g, ', ');
    req.body.genre = req.body.genre.replace(/\s*,\s*/g, ', ');
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    const production = new Production(req.body);
    production.save(function(err) {
        if (err) return res.redirect('/production/add')
        res.redirect('/')
    })
};

function show(req,res){
    Production.findById(req.params.id, function(err,production){
        res.render('production/show', { title: 'OSDb: Online Stage Database - Production', production })
    })
};

function addPerformer(req,res){
    Production.findById(req.params.id, function(err, production){
        res.render('production/addPerformer', { title: 'OSDb: Online Stage Database - Add Performer', production })
    })
};

function updateCast(req,res){
    Production.findById(req.params.id, function(err,production){
        production.cast.push(req.body.performerId);
        production.save(function(err){
            res.redirect(`/production/${production._id}`);
        });
    });
}

function edit(req,res){
    Production.findById(req.params.id, function(err, production){
        res.render('production/edit', { title: 'OSDb: Online Stage Database - Edit Production', production })
    })
}

function update(req,res){
    Production.findByIdAndUpdate(req.params.id, req.body, function(err,production){
        res.redirect(`/production/${req.params.id}`);
    });
}

function remove(req,res){
    Production.findById(req.params.id, function(err, production){
        res.render('production/remove', { title: 'OSDb: Online Stage Database - Remove Production?', production });
    })
}

function deleteProd(req,res){
    Production.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/');
    })
}
