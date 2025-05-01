const express = require('express');
const cors = require('cors');

const furiaRoutes = require('./routes/furiaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/furia', furiaRoutes);

module.exports = app;
