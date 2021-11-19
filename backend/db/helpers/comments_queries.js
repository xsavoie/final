module.exports = db => {

  // Get all comments for a specific confession
  const getComments = (body) => {
    const queryString = `
    SELECT content
    FROM comments
    WHERE confession_id = $1;
    `;

    const queryParams = [body.confession_id];

    return db.query(queryString, queryParams)
      .catch((err) => console.log(err.message));

  };

  // Create a new comment for a specific confession and user
  const createComment = (body) => {
    const queryString = `
    INSERT INTO comments (user_id, confession_id, content, created_at)
    VALUES ($1, $2, $3, '2018-02-12T08:00:00.000Z');
    `;

    const queryParams = [
      body.user_id,
      body.confession_id,
      body.content
    ];

    return db.query(queryString, queryParams)
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
  const deleteComment = (body) => {
    const queryString = `
    DELETE FROM comments
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

  return { getComments, createComment, editComment, deleteComment }
};