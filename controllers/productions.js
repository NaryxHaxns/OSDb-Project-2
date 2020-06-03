const Production = require('../models/production');

module.exports = {
    index,
}

function index(req,res){
    let user = null;
    if(req.user){
        user = req.user
    }
    let sortKey = req.query.sort || 'title';
    Production.find({}).sort(sortKey).exec(function(err,productions){
        res.render('index', { title: 'OSDb: Online Stage Database', productions, user:req.user })
    });
};
