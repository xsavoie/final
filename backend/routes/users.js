const express = require('express');
const route = express.Router();
const db = require('../db');
const users = require('../helpers/users_queries')
const { editAbout, editAvatar, getUserById } = users(db)


/* GET users listing. */
route.get('/', function (req, res, next) {
  // res.send('respond with a resource');
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
  // const avatar = "🤬"
  // const id = 1

  editAvatar(avatar, id)
    .then(data => {

      console.log("data from users.js edit avatar put route", data);
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
      console.log("user from users.js backend: ", user);
      // if (!user) {
      //    res.send({error: "error no user"});
      //    return;
      // }
      res.send("added to database");

    })
    .catch(err => {
      console.log(err.message);
    })
});

module.exports = route;