const Performer = require('../models/performer');

module.exports = {
    index,
}

function index(req,res){
    let sortKey = req.query.sort || 'name';
    Performer.find({}, function(err,performers){
        res.render('performers', { title: 'OSDb: Online Stage Database', performers });
    }).sort(sortKey);
};

