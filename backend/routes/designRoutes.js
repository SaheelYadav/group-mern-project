const express = require('express');
const { getDesigns, getDesignById } = require('../controllers/designController');
const router = express.Router();

router.get('/', getDesigns);
router.get('/:id', getDesignById);

module.exports = router;
