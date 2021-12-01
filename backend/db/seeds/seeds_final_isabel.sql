
-- seeds for confessions

INSERT INTO confessions (user_id, category_id, title, content, created_at)
VALUES 
(1, 1, 'Puzzling', 'I feel euphoric when I place the last piece of my jigsaw puzzle', '2021-08-09 13:57:40' ),
(2, 2, 'Chef', 'Everyday when I cook, I pretend that I am on a TV Show. Maybe I could start my own channel, but I am too shy.', '2021-08-09 13:47:40' ),
(3, 2, 'Scaree', 'I make a dash for it to my bedroom after I turn off my lights at night.', '2021-08-03 13:57:40' ),
(4, 1, 'Too sensitive', 'Hallmark Christmas movies make me cry. Sometimes, I feel like i am too sensitive.', '2021-08-05 13:57:40' ),
(5, 1, 'Getting too comfy', 'I like to curl up in my blanket and binge watch Netflix.', '2021-08-09 13:53:40' ),
(6, 2, 'Sleepy', 'I hear the baby cry but I pretend to sleep through the sound at night', '2021-08-19 13:57:40' ),
(7, 1, 'Decorating', 'I love to put up my Christmas decoration right after halloween', '2021-11-09 13:57:40' ),
(8, 2, 'Good vibes', 'I could never get tired of watching Disney movies.', '2021-02-09 13:57:40' ),
(9, 1, 'artistic', 'I drew the funny face on my sisters picture. I swear she would kill me if she ever found out.', '2021-08-03 13:47:40' ),
(10, 2, 'broken vase', 'I was going to tell my mom that I broke the antique vase that belonged to my grandmother but I imagined her throwing a fit of range and backed out. It has been an unsolved mystery in our family ever since', '2021-03-09 13:57:40' );

-- seeds for likes

INSERT INTO likes (user_id, confession_id)
VALUES 
(1, 6),
(2, 3),
(3, 5),
(4, 2),
(5, 9),
(6, 2),
(7, 1),
(8, 1),
(9, 1),
(10, 1);

-- seeds for comments table 

INSERT INTO comments (user_id, confession_id, content, created_at)
VALUES 
(1, 10, 'I hope you come clean. If time has passed maybe she would not throw a fit. At least you could give her closure', '2018-02-12T08:00:00.000Z' ),
(2, 9, 'That sounds crazy', '2018-02-12T08:00:00.000Z' ),
(3, 8, 'That sounds crazy', '2018-02-12T08:00:00.000Z' ),
(4, 7, 'I totally agree', '2018-02-12T08:00:00.000Z'),
(5, 6, 'I hope you feel better', '2018-02-12T08:00:00.000Z'),
(6, 5, 'Well done, for coming clean', '2018-02-12T08:00:00.000Z'),
(7, 4, 'You are awesome', '2018-02-12T08:00:00.000Z'),
(8, 3, 'Thank you for sharing', '2018-02-12T08:00:00.000Z'),
(9, 2, 'Awesome. You should go for it', '2018-02-12T08:00:00.000Z'),
(10, 1, 'That is amazing', '2018-02-12T08:00:00.000Z');

-- seeds for polls

INSERT INTO polls (user_id, content, created_at)
VALUES 
(1,'Do you like your ex more than your spouse?', '2021-09-12T08:00:00.000Z' ),
(2, 'Who is your favourite celebrity crush', '2021-08-12T08:00:00.000Z' ),
(3, 'What is a good outdoor activity on a bright sunny day?', '2021-11-12T08:00:00.000Z' ),
(4, 'Coffe, tea or wine person?', '2021-11-09T08:00:00.000Z'),
(5,'Do you like to cook or eat out?', '2021-09-12T08:00:00.000Z' ),
(7, 'Vacation or staycation?', '2021-11-12T08:00:00.000Z' ),
(8, 'Virtual or in-person class?', '2021-11-09T08:00:00.000Z'),
(9,'Vaccinate or no?', '2021-09-12T08:00:00.000Z' ),
(10, 'Is the illuminati a real thing?', '2021-08-12T08:00:00.000Z' ),
(14, 'Have you seen a UFO?', '2021-11-12T08:00:00.000Z' ),
(7, 'What is your favourite ride?', '2021-11-09T08:00:00.000Z');

-- seeds for options

INSERT INTO options (poll_id, content)
VALUES 
(1, 'yes'),
(1, 'maybe'),
(1, 'no'),
(2, 'Tom Holland'),
(2, 'Chris Hemsworth'),
(2, 'Ryan Reynolds'),
(3, 'Beach'),
(3, 'Trekking'),
(3, 'Biking'),
(3, 'Go for a walk'),
(4, 'Coffee'),
(3, 'Tea'),
(4, 'Wine'),
(4, 'tea'),
(4, 'something else'),
(5, 'Cook'),
(5, 'take-out'),
(5, 'eat-out'),
(5, 'eat-frozen'),
(7, 'vacation'),
(7, 'staycation'),
(8, 'virtual'),
(8, 'in-person'),
(9, 'yes'),
(9, 'no'),
(10, 'yes'),
(10, 'no'),