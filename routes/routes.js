const express = require('express');

const { database, mongoose } = require('../src/db');

const Model = require('../models/model');

const router = express.Router();

//Post Method
router.post('/post', (req, res) => {
  database.db.collection('model').insertOne(req.body, (err, result) => {})
  res.send('Post API')
})

//Get all Method
router.get('/getAll', (req, res) => {
  res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
  res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
  res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
  res.send('Delete by ID API')
})

//Get by ID Method
// router.get('/getOne/:id', (req, res) => {
// res.send(req.params.id)
// })

module.exports = router;