const express = require('express');
const confessions = express.Router();
const db = require('../db');


const { getOneConfession, getAllConfessions, getAllConfessionsForCategory, addConfession } = require('../helpers/confessions_queries');
const comments = require('../helpers/comments_queries')
const likes = require('../helpers/likes_queries')
const helpers = require('../helpers/dataHelpers')

const { confessionParser } = helpers()
const { getComments, createComment, editComment, deleteComment } = comments(db)
const { getLikes, createLike, deleteLike } = likes(db)


// currentUser == user_id && <edit/>
// /api/confession/:confessionId
// 1 - loop through getAllConfessions
// 2 - use req to create new confession
// function that loops x times, every time it pushed promise to an array
// Promise.all(array)

confessions.get('/', function (req, res) {
  let promiseArray = []

  for (let i = 1; i < 6; i++) {
    let array = []
    let id = i
    getOneConfession(id)
      .then((confessions) => {
        array.push(confessions)
        return getLikes(id)
      })
      .then(likes => {
        array.push(likes[0].count)
        return getComments(id)
      })
      .then(comments => {
        array.push(comments)
        return array
      })
      .then(array => {
        promiseArray.push(confessionParser(array))
      })
      .then(test => {
        if (promiseArray.length >= 5) {
          console.log("HERE")
          res.json(promiseArray)
        }
      })
      .catch((err) => {
        console.log(err.message)
      });
  }

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
      res.json(confessionParser(array))
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