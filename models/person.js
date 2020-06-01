const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    born: {
        type: Date,
        required: true
    },
    bio: {
        type: String
    },
    roles: [{
        type: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Person', personSchema);
