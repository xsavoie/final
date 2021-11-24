const db = require('../db');

//  query all polls

const getAllPolls = function (limit) {
  const queryString = `SELECT polls.*, options.*
  FROM polls
  JOIN options ON polls.id = poll_id
  ORDER BY polls.created_at
  LIMIT $1;
  `
  const queryParams = [limit];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("get all polls err");
      console.log(err.message);
    });
}
exports.getAllPolls = getAllPolls;

//  query one poll

const getOnePoll = function (id) {
  const queryString = `SELECT polls.*, options.*
  FROM polls
  JOIN options ON polls.id = poll_id
  WHERE polls.id = $1;
  `
  const queryParams = [id];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("get one poll err");
      console.log(err.message);
    });
}
exports.getOnePoll = getOnePoll;


//  create new poll

const addPoll = function (userId, content, created_at) {

  const queryString = `INSERT INTO polls (user_id, content, created_at)
    VALUES ($1, $2, $3) RETURNING *;`

  const queryParams = [userId, content, created_at];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      console.log("Success")
      return result.rows[0];
    })
    .catch((err) => {
      console.log("add poll err");
      console.log(err.message);
    });
}
exports.addPoll = addPoll;


//  create new poll

const addOptions = function (poll_id, content, votes) {

  const queryString = `INSERT INTO options (poll_id, content, votes)
    VALUES ($1, $2, $3) RETURNING *;`

  const queryParams = [poll_id, content, votes];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      console.log("Success")
      return result.rows[0];
    })
    .catch((err) => {
      console.log("add option err");
      console.log(err.message);
    });
}
exports.addOptions = addOptions;




//  delete specific poll

const deleteOnePoll = function (pollId, userId) {
  const queryString = `DELETE FROM poll
  WHERE polls.id = $1
  AND users_id = $2
  RETURNING *;
  `
  const queryParams = [pollId, userId];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("delete one poll err");
      console.log(err.message);
    });
}
exports.deleteOnePoll = deleteOnePoll;

