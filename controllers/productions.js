const Production = require('../models/production');

module.exports = {
    index,
    add,
    create,
    show,
    addPerformer,
    updateCast,
    edit,
    update
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
    req.body.playwright = req.body.playwright.replace(/\s*,\s*/g, ', ');
    req.body.debut = parseInt(req.body.debut);
    req.body.genre = req.body.genre.replace(/\s*,\s*/g, ', ');
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
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

function addPerformer(req,res){
    Production.findById(req.params.id, function(err, productions){
        res.render('productions/addPerformer', { title: 'OSDb: Online Stage Database - Add Performer', productions })
    })
};

function updateCast(req,res){
    Production.findById(req.params.id, function(err,productions){
        productions.cast.push(req.body.performerId);
        productions.save(function(err){
            res.redirect(`/productions/${productions._id}`);
        });
    });
}

function edit(req,res){
    Production.findById(req.params.id, function(err, productions){
        res.render('productions/edit', { title: 'OSDb: Online Stage Database - Edit Production', productions })
    })
}

function update(req,res){
    Production.findByIdAndUpdate(req.params.id, req.body, function(err, productions){
        res.redirect(`/productions/${productions._id}`);
    });
}
