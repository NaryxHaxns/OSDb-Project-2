const Production = require('../models/production');

module.exports = {
    index,
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

