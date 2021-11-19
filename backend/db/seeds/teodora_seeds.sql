INSERT INTO users (email, username, password)
VALUES ('sebastianguerra@ymail.com', 'Bob', 'password'),
('jacksonrose@hotmail.com', 'Cat', 'password'),
('charlielevy@yahoo.com', 'Funfun', 'password'),
('makaylaweiss@icloud.com', 'Peanuts', 'password'),
('jaycereynolds@inbox.com', 'Steam', 'password');

INSERT INTO categories (name)
VALUES ('Secret'),
('Story'),
('Question');


INSERT INTO confessions (user_id, category_id, content, created_at)
VALUES 
(1, 1, 'Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych', '2018-02-12T08:00:00.000Z' ),
(2, 1, 'komputerach osobistych, jak Aldus PageMaker', '2018-02-12T08:00:00.000Z' ),
(3, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu', '2018-02-12T08:00:00.000Z' ),
(3, 1, 'antium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt ', '2018-02-12T08:00:00.000Z' ),
(4, 1, 'oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labor', '2018-02-12T08:00:00.000Z' ),
(1, 2, 'ptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur', '2018-02-12T08:00:00.000Z' ),
(1, 2, 'Tunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum', '2018-02-12T08:00:00.000Z' ),
(2, 2, 'i ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit am', '2018-02-12T08:00:00.000Z' ),
(3, 2, 'laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate', '2018-02-12T08:00:00.000Z' ),
(3, 2, ' totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto', '2018-02-12T08:00:00.000Z' ),
(2, 3, 'Have you ever cheated or did something improper at work (or school), or having lied to get a job (or into a school?)', '2018-02-12T08:00:00.000Z' ),
(3, 3, 'Have you ever hid a hobby or possession.', '2018-02-12T08:00:00.000Z' ),
(3, 3, 'ciunt. Neque porro quisquam est, qui dol', '2018-02-12T08:00:00.000Z' ),
(4, 3, ' aperiam, eaque ipsa quae ab i', '2018-02-12T08:00:00.000Z' ),
(4, 3, 'sequi nesciunt. Neque porro quisquam est', '2018-02-12T08:00:00.000Z' );


INSERT INTO likes (user_id, confession_id)
VALUES (1, 2),
(3, 3),
(4, 5);


INSERT INTO comments (user_id, confession_id, content, created_at)
VALUES (3, 4, 'That sounds crazy', '2018-02-12T08:00:00.000Z' ),
(4, 12, 'That sounds crazy', '2018-02-12T08:00:00.000Z' ),
(3, 15, 'That sounds crazy', '2018-02-12T08:00:00.000Z' );


