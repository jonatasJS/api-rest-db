const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection

module.exports = {
  database,
  mongoose
};