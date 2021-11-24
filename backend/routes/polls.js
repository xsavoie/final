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


polls.get('/', function (req, res) {
  let pollsArray = [];

  for (let i = 1; i < 6; i++) {
    let array = [];
    let id = i;
    getOnePoll(id)
      .then((poll) => {
        array.push(poll);
        return getLikes(id);
      })
      .then(likes => {
        array.push(parseInt(likes[0].count));
        return getComments(id);
      })
      .then(comments => {
        array.push(comments);
        return array;
      })
      .then(array => {
        confessionsArray.push(confessionParser(array));
      })
      .then(test => {
        if (confessionsArray.length >= 5) {
          res.json(confessionsArray);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

});


// // post new confession
// polls.post('/new', function (req, res) {
//   const { userId, categoryId, content } = req.body.newConfession;

//   const time = new Date();
//   const created_at = moment(time).fromNow();
//   console.log(req.body)
//   addConfession(userId, categoryId, content, created_at)
//     .then(confession => {
//       res.json(confession);
//       console.log(confession);
//       console.log("entered in db");
//     })
//     .catch(err => {
//       console.log(err.message);
//     })
// });


module.exports = polls;