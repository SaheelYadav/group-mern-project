const Design = require('../models/Design');

exports.getDesigns = async (req, res) => {
    try {
        const { area, budget, shape } = req.query;
        const designs = await Design.find({});
        res.status(200).json(designs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDesignById = async (req, res) => {
    try {
        const design = await Design.findById(req.params.id);
        res.status(200).json(design);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
