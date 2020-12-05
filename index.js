const express = require('express');
const app = express();
require('./models/dbConfig.js');
const personController = require('./controllers/personController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
app.use(bodyParser.json());
app.use('/app', personController);
app.listen(5500, ()=>console.log('serveur démarré avec succès'));