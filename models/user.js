const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    googleId: String,
    email: String,
    avatar: String,
    bio: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
