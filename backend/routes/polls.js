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
  
  let confessionsArray = [];
  let array = [];
    let id = 11;
    getOnePoll(id)
      .then((polls) => {
        // res.json(polls);
        array.push(polls)
        return getOptionsForPoll(id);
      })
      .then((options) => {
        // res.json(polls);
        array.push(options)
        return array;
      })
      .then(array => {
        
        confessionsArray.push(pollsParser(array));
        // res.json(confessionsArray);
        // res.json(array);
        return getResultsForPoll(id)
      })
      .then(results => {
        confessionsArray.push(results);
         res.json(confessionsArray);
      })
   
      
      .catch((err) => {
        console.log(err.message);
      });
  

});


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

// post new option
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