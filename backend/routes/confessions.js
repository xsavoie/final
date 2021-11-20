const express = require('express');
const confessions = express.Router();
const db = require('../db');


const { getAllConfessions, getAllConfessionsForCategory, addConfession } = require('../helpers/confessions_queries');
const comments = require('../helpers/comments_queries')
const likes = require('../helpers/likes_queries')

const { getComments, createComment, editComment, deleteComment } = comments(db)
const { getLikes, createLike, deleteLike } = likes(db)

// Add user_id to comments query
const commentHelper = (array) => {
  let commentArray = []
  for (const comment of array) {
    commentArray.push(comment.content)
  }
  return commentArray
}

// currentUser == user_id && <edit/>
// /api/confession/:confessionId
// 1 - loop through getAllConfessions
// 2 - use req to create new confession

confessions.get('/', function (req, res) {
  // function that loops x times, every time it pushed promise to an array
  // Promise.all(array)

  let array = []
  let confessionId = 0;
  getAllConfessions(1)
    .then((confessions) => {
      confessionId = Number(confessions[0].id)
      array.push(confessions)
      return getLikes(confessionId)
    })
    .then(likes => {
      array.push(likes[0].count)
      return getComments(confessionId)
    })
    .then(comments => {
      // console.log(comments)
      array.push(comments)
      return array
    })
    .then(array => {
      res.json(array)
    })
    .catch((err) => {
      console.log(err.message)
    });

});

confessions.get('/:category_id', function (req, res) {
  let array = []
  let confessionId = 0;
  const category = req.params.category_id
  console.log(category)
  getAllConfessionsForCategory(category, 1)
    .then((confessions) => {
      console.log(confessions)
      confessionId = Number(confessions[0].id)
      array.push(confessions)
      return getLikes(confessionId)
    })
    .then(likes => {
      array.push(likes[0].count)
      return getComments(confessionId)
    })
    .then(comments => {
      console.log(comments)
      array.push(comments)
      return array
    })
    .then(array => {
      res.json(array)
    })
    .catch((err) => {
      console.log(err.message)
    });

});

confessions.get('/:confession_id', function (req, res) {

})

confessions.get('/:confession_id/likes', function (req, res) {

})

confessions.post('/new', function (req, res) {
  let userId = 10;
  let categoryId = 2;
  let content = "Created form POST route";
  addConfession(userId, categoryId, content)
    .then(res => {
      console.log(res)
      console.log("entered in db")
    })
    .catch(err => {
      console.log(err.message)
    })
})


module.exports = confessions;

// pull 1 confession
// pass that confession id to getLikes and getComments