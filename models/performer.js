const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    showimg: {
        type: String
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

module.exports = mongoose.model('Performer', performerSchema);
