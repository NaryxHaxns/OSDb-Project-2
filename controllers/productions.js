const Production = require('../models/production');
const Performer = require('../models/performer');

module.exports = {
    index,
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

function index(req,res){
    let sortKey = req.query.sortBy || 'title';
    Production.find({}).sort(sortKey).exec(function(err,productions){
        res.render('index', { title: 'OSDb: Online Stage Database', productions, user:req.user })
    });
};

function add(req,res){
    res.render('productions/add', { title: 'OSDb: Online Stage Database - Add a Production' })
}

function create(req,res){
    req.body.playwright = req.body.playwright.replace(/\s*,\s*/g, ', ');
    req.body.genre = req.body.genre.replace(/\s*,\s*/g, ', ');
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    req.body.createdBy = req.user._id;
    const production = new Production(req.body);
    production.save(function(err) {
        if (err) return res.redirect('/productions/add')
        res.redirect('/')
    })
};

function show(req,res){
    Production.findById(req.params.id).populate('cast.performer').exec(function(err,production){
            res.render('productions/show', { title: 'OSDb: Online Stage Database - Production', production })
    })
};

function addPerformer(req,res){
    Production.findById(req.params.id).populate('cast').exec(function(err, production){
        const castIds = production.cast.map(c => c._id);
        Performer.find({_id: {$nin: castIds}}, function(err, performers){
            res.render('productions/addPerformer', { title: 'OSDb: Online Stage Database - Add Performer', production, performers })
        })
    })
};

function updateCast(req,res){
    Production.findById(req.params.id, function(err,production){
        Performer.findOne({_id: req.body.performer}, function(err,performer){
            const newCast = {
                role: req.body.role,
                performer: performer._id
            }
            production.cast.push(newCast);
            production.save(function(err){
                res.redirect(`/productions/${production._id}`);
            });
        });
    });
}

function edit(req,res){
    Production.findById(req.params.id).populate('cast.performer').exec(function(err, production){
        res.render('productions/edit', { title: 'OSDb: Online Stage Database - Edit Production', production })
    })
}

function update(req,res){
    Production.findByIdAndUpdate(req.params.id, req.body, function(err,production){
        res.redirect(`/productions/${req.params.id}`);
    });
}

function remove(req,res){
    Production.findById(req.params.id, function(err, production){
        res.render('productions/remove', { title: 'OSDb: Online Stage Database - Remove Production?', production });
    })
}

function deleteProd(req,res){
    Production.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/');
    })
}
