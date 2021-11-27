
const express = require('express');
const { options } = require('.');
const polls = express.Router();
const db = require('../db');

// const moment = require('moment'); // require
// moment().format(); 
const helpers = require('../helpers/dataHelpers')

const { pollsParser, idParser } = helpers()


const { getAllPolls, getOnePoll, getOptionsForPoll, getResultsForPoll, addPoll, addOptions, addResults, mostRecentPoll, getTotalResultsForPoll, checkIfVoted } = require('../helpers/polls_queries');



polls.get('/polls', function (req, res) {
  const idArray = req.query.idToDisplay
  // const idArray = [5]
  let pollArray = [];
  // console.log("HERE", idArray)

  for (const id of idArray) {
    let array = [];
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
        if (pollArray.length >= idArray.length) {
          res.json(pollArray);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
});

polls.get('/most_recent', function (req, res) {
  mostRecentPoll()
    .then(id => {
      const idArray = idParser(id);
      console.log(idArray.length)
      res.json(idArray)
    })
});

polls.get('/results', function (req, res) {

  let resultArray = []

  for (let i=1; i<5; i++) {
    let id = i
    getTotalResultsForPoll(id)
    .then((results) => {
      console.log("results", results)
      resultArray.push(results)
      return resultArray
    })
    .then(resultArray => {
      if (resultArray.length >= 4) {
        res.json(resultArray);
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

  // console.log("req.body", req.body)
  addPoll(userId, content, created_at)
    .then(poll => {
      // console.log("*********NEWPOLL", poll);
      res.json(poll);
      // console.log("entered in db");
    })
    .catch(err => {
      console.log("error from the backend", err);
    })
});


// post new option
polls.post('/new_options', function (req, res) {

  const arr = req.body

  for (let option of arr) {

    const { poll_id, content } = option
    // console.log("req.body", option)
    addOptions(poll_id, content)
      .then(option => {
        // console.log("*********", option);
        res.json(option);
        console.log("entered in db");
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  // console.log("req.body", req.body)
  // console.log("req.body second option", req.body[1])

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

polls.get('/verify', function (req, res) {
  const { poll_id, user_id } = JSON.parse(req.query.pollInfo)

  console.log("!req.body!", JSON.parse(req.query.pollInfo))
  // console.log("%$%$%$%$", req)
  checkIfVoted(poll_id, user_id)
    .then(result => {
      console.log("*********VOTED???", result);
      res.json(result);
      // console.log("entered in db");
    })
    .catch(err => {
      console.log(err.message);
    })
});

polls.get(`/:id`, function (req, res) {

  let pollArray = []
  let array = []
  let id = Number(req.params.id)
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



module.exports = polls;