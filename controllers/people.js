const Person = require('../models/person');

module.exports = {
    index
}

function index(req,res){
    Person.find({}, function(err,people){
        res.render('people', { title: 'OSDb: Online Stage Database - People', people });
    })
}