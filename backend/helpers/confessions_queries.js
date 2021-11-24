const db = require('../db');

//  query all confessions

const getAllConfessions = function (limit) {
  const queryString = `SELECT confessions.*
  FROM confessions
  ORDER BY confessions.created_at
  LIMIT $1;
  `
  const queryParams = [limit];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("get all confessions err");
      console.log(err.message);
    });
}
exports.getAllConfessions = getAllConfessions;

//  query one confession

const getOneConfession = function (id) {
  const queryString = `SELECT confessions.*
  FROM confessions
  WHERE confessions.id = $1;
  `
  const queryParams = [id];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("get one confession err");
      console.log(err.message);
    });
}
exports.getOneConfession = getOneConfession;


//  query all confessions for :category_id

const getAllConfessionsForCategory = function (category, limit) {
  const queryString = `SELECT confessions.*
  FROM confessions
  JOIN categories ON categories.id = category_id
  WHERE categories.id = $1
  ORDER BY confessions.created_at
  LIMIT $2;
  `

  const queryParams = [category, limit];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("get all confessions for category err");
      console.log(err.message);
    });
}
exports.getAllConfessionsForCategory = getAllConfessionsForCategory;

//  create new confession

const addConfession = function (userId, categoryId,content, created_at) {

  const queryString = `INSERT INTO confessions (user_id, category_id, content, created_at)
    VALUES ($1, $2, $3, $4) RETURNING *;`

  const queryParams = [userId, categoryId, content, created_at];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      console.log("Success")
      return result.rows[0];
    })
    .catch((err) => {
      console.log("add confession err");
      console.log(err.message);
    });
}
exports.addConfession = addConfession;


//  delete specific confession

const deleteOneConfession = function (confessionId, userId) {
  const queryString = `DELETE FROM confessions
  WHERE confessions.id = $1
  AND users_id = $2
  RETURNING *;
  `
  const queryParams = [confessionId, userId];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("get one confession err");
      console.log(err.message);
    });
}
exports.deleteOneConfession = deleteOneConfession;



const mostRecentConfession = function () {
  
  const queryString = `
    SELECT count(id)
    FROM confessions;
  `;

  // returns most recent confession
  // currently doesnt work because all confessions have same created at
  // const queryString = `
  //   SELECT id
  //   FROM confessions
  //   ORDER BY created_at
  //   LIMIT 1;
  // `;

  return db
    .query(queryString)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("get one confession err");
      console.log(err.message);
    });
}
exports.mostRecentConfession = mostRecentConfession;


const confessionsForCategory = function (category_id) {
  
  const queryString = `SELECT confessions.id
  FROM confessions
  JOIN categories ON categories.id = category_id
  WHERE categories.id = $1
  ORDER BY confessions.id DESC
  LIMIT 10;
  `;
  const queryParams = [category_id];


  return db
    .query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("get one confession err");
      console.log(err.message);
    });
}
exports.confessionsForCategory = confessionsForCategory;

const confessionsPopular = function () {
  
  const queryString = `SELECT confessions.id, count(likes)
  FROM confessions
  JOIN likes ON confession_id = confessions.id
  GROUP BY confessions.id
  ORDER BY count DESC
  LIMIT 10;
  `;

  return db
    .query(queryString)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("get one confession err");
      console.log(err.message);
    });
}
exports.confessionsPopular = confessionsPopular;


//  update specific confession (updating one row)

// UPDATE confessions
// SET category = $1 
// SET 
// WHERE confessions.id = $2
//RETURNING *;

// user_id, category_id, content, created_at

