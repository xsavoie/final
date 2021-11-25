
const express = require('express');
const { options } = require('.');
const polls = express.Router();
const db = require('../db');

// const moment = require('moment'); // require
// moment().format(); 
const helpers = require('../helpers/dataHelpers')

const { pollsParser } = helpers()

const {getAllPolls, getOnePoll, getOptionsForPoll, getResultsForPoll, addPoll, addOptions, addResults } = require('../helpers/polls_queries');


polls.get('/polls', function (req, res) {
  
  let pollArray = [];
  for (let i=1; i<5; i++) {
    let array = [];
    let id = i;
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
     
    })
    .then(test => {
      if (pollArray.length >= 4) {
        res.json(pollArray);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

});


// post new poll
polls.post('/new', function (req, res) {
  const { userId, content, created_at } = req.body

  console.log("req.body", req.body)
  addPoll(userId, content, created_at)
    .then(poll => {
      console.log("*********", poll);
      res.json(poll);
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
  const { option_id, user_id } = req.body

  console.log("req.body", req.body)
  addResults(option_id, user_id)
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