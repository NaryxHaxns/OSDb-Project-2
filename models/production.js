const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String
    },
    synopsis: {
        type: String
    },
    cast: [{
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Production', productionSchema);
