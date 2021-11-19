const express = require('express');
const comments = express.Router();


comments.get('/', function(req, res, next) {
  res.json({});
});

module.exports = comments;
