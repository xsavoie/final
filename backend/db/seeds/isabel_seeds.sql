-- seeds for users
INSERT INTO users (email, username, password) VALUES ('alice@gmail.com', 'asdbri1', 'password');
INSERT INTO users (email, username, password) VALUES ('bob@gmail.com', 'bsggb343', 'password');
INSERT INTO users (email, username, password) VALUES ('lydia@gmail.com', 'c34rfsd', 'password');
INSERT INTO users (email, username, password) VALUES ('evan@gmail.com', 'd345sdf', 'password');
INSERT INTO users (email, username, password) VALUES ('david@gmail.com', 'ehtsd34', 'password');

-- seeds for categories

INSERT INTO categories (name) VALUES ('Secret');
INSERT INTO categories (name) VALUES ('Story');
INSERT INTO categories (name) VALUES ('Question');

-- seeds for confessions

INSERT INTO confessions (user_id, category_id, content, created_at) VALUES (1, 1, 'I must confess content', '2018-02-12T08:00:00.000Z');
INSERT INTO confessions (user_id, category_id, content, created_at) VALUES (2, 2, 'Nothing meaningful content', '2018-02-12T08:00:00.000Z');
INSERT INTO confessions (user_id, category_id, content, created_at) VALUES (3, 3, 'Potatoes content', '2018-02-12T08:00:00.000Z');
INSERT INTO confessions (user_id, category_id, content, created_at) VALUES (4, 1, 'Apple something content', '2018-02-12T08:00:00.000Z');
INSERT INTO confessions (user_id, category_id, content, created_at) VALUES (5, 2, 'Whatever something content', '2018-02-12T08:00:00.000Z');

-- seeds for likes table 

INSERT INTO likes (user_id, confession_id) VALUES (1, 2);
INSERT INTO likes (user_id, confession_id) VALUES (1, 1);
INSERT INTO likes (user_id, confession_id) VALUES (2, 2);
INSERT INTO likes (user_id, confession_id) VALUES (3, 1);
INSERT INTO likes (user_id, confession_id) VALUES (4, 1);

-- seeds for comments table 

INSERT INTO comments (user_id, confession_id, content, created_at) VALUES (1, 2, 'I totally agree', '2018-02-12T08:00:00.000Z');
INSERT INTO comments (user_id, confession_id, content, created_at) VALUES (1, 3, 'I hope you feel better', '2018-02-12T08:00:00.000Z');
INSERT INTO comments (user_id, confession_id, content, created_at) VALUES (2, 4, 'Well done, for coming clean', '2018-02-12T08:00:00.000Z');
INSERT INTO comments (user_id, confession_id, content, created_at) VALUES (2, 1, 'You are awesome', '2018-02-12T08:00:00.000Z');
INSERT INTO comments (user_id, confession_id, content, created_at) VALUES (3, 2, 'Thank you for sharing', '2018-02-12T08:00:00.000Z');