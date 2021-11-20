var express = require('express');
var router = express.Router();
const db = require('../db');

// const comments = require('../helpers/comments_queries')
// const { getComments, createComment, editComment, deleteComment } = comments(db)


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

module.exports = router;