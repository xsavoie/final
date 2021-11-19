
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

