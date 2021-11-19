const express = require('express');
const confessions = express.Router();


confessions.get('/', function(req, res, next) {
  res.json({});
});

module.exports = confessions;
