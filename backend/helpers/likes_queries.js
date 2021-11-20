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
  const createLike = (body) => {
    const queryString = `
    INSERT INTO likes (user_id, confession_id)
    VALUES ($1, $2);
    `;

    const queryParams = [
      body.user_id,
      body.confession_id
    ];

    return db.query(queryString, queryParams)
      .catch((err) => console.log(err.message));

  };

  // Delete like for specific confession and user
  const deleteLike = (body) => {
    const queryString = `
    DELETE FROM likes
    WHERE user_id = $1
    AND confession_id = $2;
  `;

    const queryParams = [
      body.user_id,
      body.confession_id
    ];

    return db.query(queryString, queryParams)
      .catch((err) => console.log(err.message));


  };

  return { getLikes, createLike, deleteLike }
};


