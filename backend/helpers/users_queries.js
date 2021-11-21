
// CREATE TABLE "users" (
//   "id" SERIAL PRIMARY KEY,
//   "email" VARCHAR(255) NOT NULL,
//   "username" VARCHAR(255) NOT NULL,
//   "password" VARCHAR(255) NOT NULL
// );

module.exports = db => {

  // Get all users from the users table
  const getAllUsers = (userId) => {
    const queryString = `
    SELECT email, username, password
    FROM users;
    `;

    const queryParams = [confessionId];

    return db.query(queryString, queryParams)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

    // Get one specific user from the users table
    const getOneUser = (userId) => {
      const queryString = `
      SELECT email, username, password
      FROM users
      WHERE id = $1;
      `;
  
      const queryParams = [userId];
  
      return db.query(queryString, queryParams)
        .then((result) => {
          return result.rows;
        })
        .catch((err) => {
          console.log(err.message);
        });
    };


  // Create a new user to the users table
  const createUser = (name, password) => {
    const username = (Math.random() + 1).toString(36).substring(7);
    const queryString = `
    INSERT INTO users (name, username, password)
    VALUES ($1, $2, $3);
    `;

    const queryParams = [ name, username, password ];

    return db.query(queryString, queryParams)
      .then((result) => {
      return result.rows;
      })
      .catch((err) => console.log(err.message));
  };

  return { getAllUsers, getOneUser, createUser }
};