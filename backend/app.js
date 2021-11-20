const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db = require('./db');

// const { getAllConfessions, getAllConfessionsForCategory, addConfession } = require('./helpers/confessions_queries');
// const comments = require('./helpers/comments_queries')
// const likes = require('./helpers/likes_queries')

// const { getComments, createComment, editComment, deleteComment } = comments(db)
// const { getLikes, createLike, deleteLike } = likes(db)

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const confessionsRouter = require('./routes/confessions');
const commentsRouter = require('./routes/comments');


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/confessions', confessionsRouter);
app.use('/api/comments', commentsRouter);

module.exports = app;
