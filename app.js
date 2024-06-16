const express = require('express');
const app = express();
const bankRoutes = require('./routes/bankRoute');
const db = require('./models');

db.sequelize.sync();

app.use(express.json());
app.use('/api', bankRoutes);



module.exports = app;