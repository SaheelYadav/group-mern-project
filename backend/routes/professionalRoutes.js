const express = require('express');
const { getProfessionals } = require('../controllers/professionalController');
const router = express.Router();

router.get('/', getProfessionals);

module.exports = router;
