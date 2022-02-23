require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => res.send('teste'))

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`)
})

// 