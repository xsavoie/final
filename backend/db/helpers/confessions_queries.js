
//  query all confession

const getAllConfessions = function(limit = 10) {
  const queryString = `SELECT confessions.*
  FROM confessions
  ORDER BY confessions.created_at
  LIMIT $1;
  `
  const queryParams = [limit];

  return pool
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


//  query all confession for :category_id

const getAllConfessionsForCategory = function(category, limit = 10) {
  const queryString = `SELECT confessions.*
  FROM confessions
  JOIN categories ON categories.id = category_id
  WHERE categories.name = $1
  ORDER BY confessions.created_at
  LIMIT $2;
  `

  const queryParams = [category, limit];

  return pool
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

const addConfession = function(confession) {

  const queryString = `INSERT INTO confession (user_id, category_id, content, created_at)
    VALUES ($1, $2, $3, $4) RETURNING *;`

  const queryParams = [confession];

  return pool
  .query(queryString, queryParams)
  .then((result) => {
    return result.rows[0];
  })
  .catch((err) => {
    console.log("add confession err");
    console.log(err.message);
  });
}
exports.addConfession = addConfession;


//  delete specific confession
//DELETE FROM confessions
//WHERE confessions.id = $1;


//  update specific confession (updating one row)

// UPDATE confessions
// SET category = $1 
// WHERE confessions.id = $2
//RETURNING *;

//can we use if statement?
// if(category){
  //UPDATE confessions
  // SET category = $1 
  // WHERE confessions.id = $2
  //RETURNING *;
//}