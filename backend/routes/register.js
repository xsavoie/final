var express = require('express');
var router = express.Router();


// router.get('/', function(req, res, next) {
//   res.send('register');
// });

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.render('http://localhost:3001/register');
  });

  router.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const values = [email, password];
    if (email === '' || password === '') {
      res.send("Please enter your email and password!");
    } else {
      db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, values)
        .then(data => {
          console.log(data.rows);
          res.redirect('/');
        })
        .catch(err => {
          console.log(err.message);
          res.send("Invalid email or password");
        });
    }
  });

  return router;
};