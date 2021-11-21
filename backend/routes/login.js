const express = require('express');
const login = express.Router();
const db = require('../db');

const users = require('../helpers/users_queries')
const { getOneUser } = users(db)

login.get('/', function (req, res, next) {
  res.send('register');
});


login.post("/", (req, res) => {
  const { email, password } = req.body
  
  getOneUser(email)
    .then(user => {
      console.log(user);
      
    })
    .catch(err => {
      console.log(err.message);
    })
});


module.exports = login;


// var express = require('express');
// var router = express.Router();

// let users = [
//   {
//     email: 'abc@gmail.com',
//     password: 'password'
//   }
// ];

// router.get('/', function(req, res, next) {
//   res.send('login');
// });

// router.post('/login', function(req, res){
//   const email = req.body.email;
//   const password = req.body.password

//   let result = users.find(user => user.email == req.body.email);

//   if(result){
//     if(result.password == req.body.password){
//       res.status(200).send({
//         message: "Successful Login"
//       })
//     }
//     else{
//       res.status(200).send({
//         message: "Password Incorrect"
//       })
//     }
//   }
//   else {
//     res.send(200).send({
//       message: "User does not exist"
//     })
//   }
// });

// module.exports = router;