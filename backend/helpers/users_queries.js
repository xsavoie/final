

const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

// CREATE TABLE "users" (
//   "id" SERIAL PRIMARY KEY,
//   "email" VARCHAR(255) NOT NULL,
//   "username" VARCHAR(255) NOT NULL,
//   "password" VARCHAR(255) NOT NULL,
//   "avatar" TEXT,
//   "about" TEXT
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
    const getOneUser = (email) => {
      const queryString = `
      SELECT *
      FROM users
      WHERE email = $1;
      `;
  
      const queryParams = [email];
  
      return db.query(queryString, queryParams)
        .then((result) => {
          return result.rows;
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    const getUserById = (id) => {
      const queryString = `
      SELECT *
      FROM users
      WHERE id = $1;
      `;
  
      const queryParams = [id];
  
      return db.query(queryString, queryParams)
        .then((result) => {
          return result.rows;
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
 

  // Create a new user to the users table
  const createUser = (email, password) => {
    // const username = (Math.random() + 1).toString(36).substring(7);
    const username = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey
    const avatar = "https://i.imgur.com/5KfNDSg.jpeg"
    let about = "";
    const queryString = `
    INSERT INTO users (email, username, password, avatar, about)
    VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;

    const queryParams = [ email, username, password, avatar, about ];

    return db.query(queryString, queryParams)
      .then((result) => {
      return result.rows;
      })
      .catch((err) => console.log(err.message));
  };


    // Edit/Update an emoji for a specific user
    const editAvatar = (avatar, id) => {
      const queryString = `
      UPDATE users SET avatar = $1 WHERE id = $2 RETURNING *
      `;
  
      const queryParams = [
        avatar,
        id,
      ];

      return db.query(queryString, queryParams)
      .then((result) => {
        return result.rows[0].avatar;
        })
      .catch((err) => console.log(err.message));
    };

    // Edit/Update About me for a specific user
    const editAbout = (about, id) => {
      console.log("incoming about: ", about);
      const queryString = `
      UPDATE users SET about = $1 WHERE id = $2 RETURNING *
      `;
      const queryParams = [
        about,
        id,
      ];
  
      return db.query(queryString, queryParams)
      .then((result) => {
        return result.rows;
        })
      .catch((err) => console.log(err.message));
    };

    const getMyConfessions = (id) => {
      console.log("id: ", id);
      const queryString = `
      SELECT * from confessions id WHERE user_id = $1
      `;

      const queryParams = [id];
      console.log("queryParams from getMyConfessions: ", queryParams);
      return db.query(queryString, queryParams)
      .then((result) => {
        console.log("result.rows from getMyConfessions",result.rows)
        return result.rows;
        })
      .catch((err) => console.log(err.message));
    }




  return { getAllUsers, getOneUser, createUser, editAvatar, editAbout, getUserById, getMyConfessions }
};

