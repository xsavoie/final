const express = require('express');
const register = express.Router();
const db = require('../db');

const users = require('../helpers/users_queries')
const { createUser } = users(db)

register.get('/', function (req, res, next) {
  res.send('register');
});


register.post("/", (req, res) => {
  const { email, password } = req.body
  
  createUser(email, password)
    .then(user => {
      console.log(user);
      console.log("entered in db");
    })
    .catch(err => {
      console.log(err.message);
    })
});


module.exports = register;



// var express = require('express');
// var router = express.Router();


// router.get('/', function(req, res, next) {
//   res.send('register');
// });

// module.exports = (db) => {
//   router.get('/', (req, res) => {
//     res.render('http://localhost:3001/register');
//   });

//   router.post("/", (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     const values = [email, password];
//     if (email === '' || password === '') {
//       res.send("Please enter your email and password!");
//     } else {
//       db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, values)
//         .then(data => {
//           console.log(data.rows);
//           res.redirect('/');
//         })
//         .catch(err => {
//           console.log(err.message);
//           res.send("Invalid email or password");
//         });
//     }
//   });

//   return router;
// };



