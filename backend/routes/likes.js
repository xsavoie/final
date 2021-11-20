const express = require('express');
const router = express.Router();
const db = require('../db');


const likes = require('../helpers/likes_queries')

const { getLikes, createLike, deleteLike } = likes(db)

router.post('/:confession_id/likes', (req, res) => {
  // const userId = req.session.userId;
  createLike({...req.body})
    .then(like => {
      res.send(like);
    })
    .catch(err => {
      console.error(err);
      // res.send(err)
    });
});


router.delete('/:confession_id/likes', function (req, res) {
  deleteLike({...req.body})
  .then(like => {
    res.send(like);
    res.send('Got a DELETE request')
  })
  .catch(err => {
    console.error(err);
    // res.send(err)
  });

})

module.exports = router;