const Professional = require('../models/Professional');

exports.getProfessionals = async (req, res) => {
    try {
        const professionals = await Professional.find();
        res.status(200).json(professionals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
