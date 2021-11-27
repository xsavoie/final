const express = require('express');
const route = express.Router();
const db = require('../db');
const users = require('../helpers/users_queries')
const { editAbout, editAvatar, getUserById, getMyConfessions } = users(db)


/* GET users listing. */
route.get('/', function (req, res, next) {
  db.query(`SELECT * FROM users;`)
    .then(data => {
      const users = data.rows;
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

route.get('/validate/:user', (req, res) => {
  const id = req.params.user;
  console.log(req.params.user)

  getUserById(id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err.message);
    })
});

// edit avatar
route.put("/avatar", (req, res) => {
  const { avatar, id } = req.body
  editAvatar(avatar, id)
    .then(data => {
      res.json({ data });
    })
    .catch(err => {
      console.log(err.message);
    })
});


// edit about me section
route.put("/about_me", (req, res) => {
  const { about, id } = req.body

  editAbout(about, id)
    .then(user => {
      res.json(user)
      res.send("added to database");

    })
    .catch(err => {
      console.log(err.message);
    })
});

//to get all the confessions made by a specific user
route.get('/my_confessions', (req, res) => {
  const id = req.query.request
  console.log("req.body from route.get: ", req.query.request)
  // const { id } = req.body
  // console.log("id from route.get my confessions: ", id);

  // console.log(typeof id)
  getMyConfessions(id)
    .then(user => {
      console.log("user: ", user)
      res.json(user);
      
    })
    .catch(err => {
      console.log(err.message);
    })
});

module.exports = route;