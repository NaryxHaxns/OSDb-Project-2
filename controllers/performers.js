const Performer = require('../models/performer');

module.exports = {
    index
}

function index(req,res){
    Performer.find({}, function(err,performers){
        res.render('performers', { title: 'OSDb: Online Stage Database - People', performers });
    })
}