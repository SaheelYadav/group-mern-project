const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const designRoutes = require('./routes/designRoutes');
const professionalRoutes = require('./routes/professionalRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/designs', designRoutes);
app.use('/api/professionals', professionalRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Database connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
