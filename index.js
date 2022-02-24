require('dotenv').config();
const express = require('express');
const { database, mongoose } = require('./src/db');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use('/api', routes);

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

// 