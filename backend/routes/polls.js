// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const fs = require("fs");

const express = require('express');
const polls = express.Router();
const db = require('../db');

const moment = require('moment'); // require
moment().format(); 

const { getAllPolls, getOnePoll, addPoll, addOptions, deleteOnePoll } = require('../helpers/confessions_queries');

const {getAllPolls, getOnePoll, addPoll, deleteOnePoll} = polls(db)

const {addOptions} = options(db)

// post new confession
polls.post('/polls/new', function (req, res) {
  const { userId, content, } = req.body.newConfession;

  const time = new Date();
  const created_at = moment(time).fromNow();
  console.log(req.body)
  addConfession(userId, categoryId, content, created_at)
    .then(confession => {
      res.json(confession);
      console.log(confession);
      console.log("entered in db");
    })
    .catch(err => {
      console.log(err.message);
    })
});


module.exports = confessions;