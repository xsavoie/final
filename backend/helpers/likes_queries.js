module.exports = db => {

  // Get all likes for a specific confession
  const getLikes = (confessionId) => {
    const queryString = `
    SELECT count(*)
    FROM likes
    WHERE confession_id = $1;
    `;

    // const queryParams = [body.confession_id];
    const queryParams = [confessionId]
  
    return db.query(queryString, queryParams)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      });

  };

  // Create a like for a specific confession and user
  const createLike = (userId, confessionId) => {
    const queryString = `
    INSERT INTO likes (user_id, confession_id)
    VALUES ($1, $2)
    RETURNING *;
    `;

    const queryParams = [ userId, confessionId ];

    return db.query(queryString, queryParams)
      .then((result) => {
      return result.rows;
      })
      .catch((err) => console.log(err.message));

  };

  // Delete like for specific confession and user
  const deleteLike = (userId, confessionId ) => {
    const queryString = `
    DELETE FROM likes
    WHERE user_id = $1
    AND confession_id = $2;
  `;

    const queryParams = [ userId, confessionId ];

    return db.query(queryString, queryParams)
      .then((result) => {
      return result.rows;
      })
      .catch((err) => console.log(err.message));


  };

  return { getLikes, createLike, deleteLike }
};


