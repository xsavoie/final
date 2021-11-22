const express = require('express');
const confessions = express.Router();
const db = require('../db');


const { getOneConfession, getAllConfessions, getAllConfessionsForCategory, mostRecentConfession, addConfession } = require('../helpers/confessions_queries');
const comments = require('../helpers/comments_queries')
const likes = require('../helpers/likes_queries')
const helpers = require('../helpers/dataHelpers')

const { confessionParser } = helpers()
const { getComments, createComment, editComment, deleteComment } = comments(db)
const { getLikes, createLike, deleteLike } = likes(db)


confessions.get('/', function (req, res) {
  let confessionsArray = [];

  for (let i = 1; i < 6; i++) {
    let array = [];
    let id = i;
    getOneConfession(id)
      .then((confessions) => {
        array.push(confessions);
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


// To render default confession feed
confessions.get('/front_page/:recent', function (req, res) {
  console.log(req.params.recent)
  let confessionsArray = [];
  start = req.params.recent;
  end = start - 10;

  for (let i = start; i > end; i--) {
    let array = [];
    let id = i;
    getOneConfession(id)
      .then((confessions) => {
        array.push(confessions);
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
        if (confessionsArray.length >= 10) {
          res.json(confessionsArray);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
})


confessions.get('/category/:category_id', function (req, res) {
  let array = [];
  let confessionId = 0;
  const category = req.params.category_id;
  
  getAllConfessionsForCategory(category, 1)
    .then((confessions) => {
      console.log(confessions);
      confessionId = Number(confessions[0].id);
      array.push(confessions);
      return getLikes(confessionId);
    })
    .then(likes => {
      array.push(likes[0].count);
      return getComments(confessionId);
    })
    .then(comments => {
      console.log(comments);
      array.push(comments);
      return array;
    })
    .then(array => {
      res.json(confessionParser(array));
    })
    .catch((err) => {
      console.log(err.message);
    });

});

// get most recent confession
confessions.get('/most_recent', function (req, res) {
  mostRecentConfession()
    .then(confession => {
      res.json(parseInt(confession[0].count))
    })
})


confessions.get('/:confession_id', function (req, res) {
  console.log(req.params)
  confessionId = req.params.confession_id
  getOneConfession(confessionId)
    .then(confession => {
      res.json(confession);
    })
})

// post new like
confessions.post('/likes', function (req, res) {
  const { userId, confessionId } = req.body.newLike;
  
  createLike(userId, confessionId)
    .then(like => {
      res.json(like)
      console.log(like)
      console.log("entered in db");
    })
    .catch(err =>{
      console.log(err.message)
    })
})

// post new comment
confessions.post('/new_comment', function (req, res) {
  const { userId, confessionId, content } = req.body.newComment;

  createComment(userId, confessionId, content)
    .then(comment =>{
      // returns array of object. Can make it return only object if needed
      res.json(comment) 
      console.log(comment);
      console.log("entered in db");
    })
    .catch(err => {
      console.log(err.message);
    })
})

confessions.post('/new', function (req, res) {
  const { userId, categoryId, content } = req.body;

  addConfession(userId, categoryId, content)
    .then(confession => {
      res.json(confession.id)
      console.log(confession);
      console.log("entered in db");
    })
    .catch(err => {
      console.log(err.message);
    })
})


module.exports = confessions;