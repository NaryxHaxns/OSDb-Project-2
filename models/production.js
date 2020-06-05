const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const castSchema = new Schema({
    role: {
        type: String,
    },
    performer: {
        type: Schema.Types.ObjectId,
        ref: 'Performer'
    }
})

const productionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    showimg: {
        type: String
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
    cast: [castSchema],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Production', productionSchema);
