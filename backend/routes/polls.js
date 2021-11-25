// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const fs = require("fs");

const express = require('express');
const { options } = require('.');
const polls = express.Router();
const db = require('../db');

// const moment = require('moment'); // require
// moment().format(); 
const helpers = require('../helpers/dataHelpers')

const { confessionParser, idParser, pollsParser } = helpers()

const {getAllPolls, getOnePoll, getOptionsForPoll, getResultsForPoll, addPoll, addOptions, addResults } = require('../helpers/polls_queries');


polls.get('/polls', function (req, res) {
  
    let pollArray = []
    let array = [];
    let id = 1;
    getOnePoll(id)
      .then((polls) => {
        array.push(polls)
        return getOptionsForPoll(id);
      })
      .then((options) => {
        array.push(options)
        return array
      })
      .then(array => {
        pollArray.push(pollsParser(array))
        res.json(pollArray);
      })
      .catch((err) => {
        console.log(err.message);
      });
  

});

[
  [
    {
      "id": 1,
      "user_id": 3,
      "content": "something new",
      "created_at": "2018-02-12T13:00:00.000Z"
    }
  ],
  [
    {
      "id": 1,
      "poll_id": 1,
      "content": "yes"

    },
    {
      "id": 2,
      "poll_id": 1,
      "content": "maybe"
    },
    {
      "id": 3,
      "poll_id": 1,
      "content": "no"
    }
  ],
  [
    {
      "votes": 3,
      "option_id": 1
    },
    {
      "votes": 5,
      "option_id": 2
    },
    {
      "votes": 1,
      "option_id": 3
    }
  ]
]


// post new poll
polls.post('/new', function (req, res) {
  const { userId, content, created_at } = req.body

  console.log("req.body", req.body)
  addPoll(userId, content, created_at)
    .then(poll => {
      console.log("*********", poll);
      res.json(poll);
      // console.log("*********", poll);
      console.log("entered in db");
    })
    .catch(err => {
      console.log(err.message);
    })
});

// post new option
polls.post('/new_options', function (req, res) {
  const { poll_id, content } = req.body

  console.log("req.body", req.body)
  addOptions(poll_id, content)
    .then(option => {
      console.log("*********", option);
      res.json(option);
      console.log("entered in db");
    })
    .catch(err => {
      console.log(err.message);
    })
});

// post new results
polls.post('/new_options_results', function (req, res) {
  const { option_id, votes } = req.body

  console.log("req.body", req.body)
  addResults(option_id, votes)
    .then(result => {
      console.log("*********", result);
      res.json(result);
      console.log("entered in db");
    })
    .catch(err => {
      console.log(err.message);
    })
});




module.exports = polls;