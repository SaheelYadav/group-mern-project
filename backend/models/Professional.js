const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema({
    name: String,
    role: String,
    contactInfo: String,
});

module.exports = mongoose.model('Professional', professionalSchema);
