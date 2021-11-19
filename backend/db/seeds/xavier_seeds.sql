INSERT INTO users (email, username, password)
VALUES ('tristanjacobs@gmail.com', 'test.user34', 'password'),
('michaelgray@mail.com', 'test.user33', 'password'),
('ariaatkinson@outlook.com', 'test.user52', 'password'),
('juliansantos@aol.com', 'test.user23', 'password'),
('elistanton@yahoo.com', 'test.user67', 'password');


INSERT INTO categories (name)
VALUES ('Secret'),
('Story'),
('Question');


INSERT INTO confessions (user_id, category_id, content, created_at)
VALUES (1, 1, 'Test Secret. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus.', '2018-02-12T08:00:00.000Z'),
(2, 1, 'Test Secret. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus.', '2018-02-12T08:00:00.000Z'),
(2, 1, 'Test Secret. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus. Sed tincidunt dictum arcu at semper.', '2018-02-12T08:00:00.000Z'),
(3, 1, 'Test Secret. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus.', '2018-02-12T08:00:00.000Z'),
(4, 1, 'Test Secret. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2018-02-12T08:00:00.000Z'),

(1, 2, 'Test Story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus.', '2018-02-12T08:00:00.000Z'),
(2, 2, 'Test Story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus.', '2018-02-12T08:00:00.000Z'),
(2, 2, 'Test Story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus. Sed tincidunt dictum arcu at semper.', '2018-02-12T08:00:00.000Z'),
(3, 2, 'Test Story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus.', '2018-02-12T08:00:00.000Z'),
(4, 2, 'Test Story. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2018-02-12T08:00:00.000Z'),

(1, 3, 'Test Question. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus.', '2018-02-12T08:00:00.000Z'),
(2, 3, 'Test Question. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus.', '2018-02-12T08:00:00.000Z'),
(2, 3, 'Test Question. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus. Sed tincidunt dictum arcu at semper.', '2018-02-12T08:00:00.000Z'),
(3, 3, 'Test Question. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus semper neque id rhoncus.', '2018-02-12T08:00:00.000Z'),
(4, 3, 'Test Question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2018-02-12T08:00:00.000Z');


INSERT INTO likes (user_id, confession_id)
VALUES (1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(2, 2),
(3, 2),
(1, 6),
(2, 6),
(3, 6),
(4, 6),
(5, 6),
(2, 8),
(3, 8);


INSERT INTO comments (user_id, confession_id, content, created_at)
VALUES (1, 1, 'test comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2018-02-12T08:00:00.000Z'),
(2, 1, 'test comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2018-02-12T08:00:00.000Z'),
(3, 1, 'test comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2018-02-12T08:00:00.000Z'),
(5, 6, 'test comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2018-02-12T08:00:00.000Z'),
(4, 7, 'test comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2018-02-12T08:00:00.000Z'),
(2, 3, 'test comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2018-02-12T08:00:00.000Z'),
(3, 3, 'test comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2018-02-12T08:00:00.000Z');
