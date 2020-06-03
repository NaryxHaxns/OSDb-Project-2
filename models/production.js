const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    playwright: {
        type: String,
        required: true
    },
    debut: {
        type: Date,
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
        ref: 'Performer'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Production', productionSchema);
