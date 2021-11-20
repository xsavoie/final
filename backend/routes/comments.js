const express = require('express');
const router = express.Router();
const db = require('../db');


const comments = require('../helpers/comments_queries')

const { getComments, createComment, editComment, deleteComment } = comments(db)



router.get('/', function(req, res, next) {

    let confessionsQuery = `SELECT * FROM confessions`;
    const commentsQuery = `SELECT * FROM comments`;

    const myConfession = db.query(confessionsQuery)
    const myComments = db.query(commentsQuery)
    const promises = [myConfession, myComments]
    Promise.all(promises)

      .then(data => {
        const confessions = data[0].rows;
        const comments = data[1].rows
        res.json({ confessions, comments });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

});


router.post('/:confession_id/comments', (req, res) => {
  // const userId = req.session.userId;
  createComment({...req.body})
    .then(comment => {
      res.send(comment);
    })
    .catch(err => {
      console.error(err);
      // res.send(err)
    });
});


router.delete('/:confession_id/comments', function (req, res) {
  deleteComment({...req.body})
  .then(comment => {
    res.send(comment);
    res.send('Got a DELETE request')
  })
  .catch(err => {
    console.error(err);
    // res.send(err)
  });

})

module.exports = router;