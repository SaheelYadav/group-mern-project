const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
    name: String,
    image: String,
    designer: String,
    rating: Number,
    details: String,
});

module.exports = mongoose.model('Design', designSchema);
