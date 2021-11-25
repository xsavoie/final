var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
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


router.post("/:id", (req, res) => {
  const { avatar, id } = req.body
  
  editAvatar(avatar, id)
    .then(user => {

      // console.log(user);
    if (!user) {
       res.send({error: "error no user"});
       return;
    }
    res.send(avatar);
     
    })
    .catch(err => {
      console.log(err.message);
    })
});

module.exports = router;