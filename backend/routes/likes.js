const express = require('express');
const likes = express.Router();


likes.get('/', function(req, res, next) {
  res.json({});
});

module.exports = likes;
