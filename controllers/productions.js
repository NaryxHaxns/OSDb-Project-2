const Production = require('../models/production');

module.exports = {
    index,
}

function index(req,res){
    let user = null;
    if(req.user){
        user = req.user
    }
    let sortKey;
    if(req.query === 'title'){
        sortKey = req.query.sort || 'title';
        return sortKey;
    } else if (req.query === 'genre'){
        sortKey = req.query.sort || 'genre';   
        return sortKey;
    }
    Production.find({}, function(err,productions){
        res.render('index', { title: 'OSDb: Online Stage Database', productions, user:req.user })
    }).sort(sortKey);
};
