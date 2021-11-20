module.exports = db => {

  // Get all comments for a specific confession
  const getComments = (confessionId) => {
    const queryString = `
    SELECT content, user_id
    FROM comments
    WHERE confession_id = $1;
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

  // Create a new comment for a specific confession and user
  const createComment = (userId, confessionId, content) => {
    const queryString = `
    INSERT INTO comments (user_id, confession_id, content, created_at)
    VALUES ($1, $2, $3, '2018-02-12T08:00:00.000Z');
    `;

    const queryParams = [ userId, confessionId, content ];

    return db.query(queryString, queryParams)
      .then((result) => {
      return result.rows;
      })
      .catch((err) => console.log(err.message));

  };

  // Edit/Update an existing comment for a specific confession and user
  const editComment = (body) => {
    const queryString = `
    UPDATE comments SET content = $1 WHERE user_id = $2 AND confession_id = $3
    `;

    const queryParams = [
      body.content,
      body.user_id,
      body.confession_id,
    ];

    return db.query(queryString, queryParams)
      .catch((err) => console.log(err.message));

  };

  // Delete a comment for specific confession and user
  const deleteComment = (userId, confessionId) => {
    const queryString = `
    DELETE FROM comments
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

  return { getComments, createComment, editComment, deleteComment }
};