-- INSERT INTO confessions (user_id, category_id, title, content, created_at)
-- VALUES 
-- (5, 1, 'Sidewalk in a city', "I needed to get this off my chest because it's annoying. Having traveled quite a bit, I've noticed this city has some of the worst sidewalk etiquettes of most cities I've visited. People are walking in the middle of the sidewalk; on the left, people in groups are taking over the sidewalk. Couples who somehow have to latch onto each other as if it's the end of the world if they give you space to walk on the right. The thing that frustrates me the most is how they never think to get out of the way. You can be walking on the right and they won't bother moving out of the way or anything. I see this way too often.
-- Does anyone feel the same or is it just me?", '2021-08-09 13:57:40' ),
-- (5, 1, 'I love Pokemon', 'I love Pokemon', '2021-08-09 13:47:40' ),
-- (6, 1, 'Customer service.', 'Hi all. I am posting this because I work Customer Service at company, and I hate how much we have to lie to our customers. You should ALL KNOW what you are spending your money on. I work here because I desperately need to pay my bills, like everyone else here. I am one of the new Canadian workers for this company--they started hiring Canadians because our dollar is worth a lot less right now and we are a ridiculously cheap labor market for them.', '2021-08-03 13:57:40' ),
-- (6, 1, 'Bad boss', 'My boss suggested I might not be able to take forty minutes to see my daughters first ever school play, so I told him try not to be a cartoon villain and he hung up on me.', '2021-08-05 13:57:40' ),
-- (7, 1, 'I hate Monday', 'I hate Monday!!!!', '2021-08-09 13:53:40' ),
-- (7, 2, 'New home', "I just bought my first home, a 500k condo. Just in the process of getting my mortgage, my broker says I shouldn't put down 20% which was my original intention, that I'd be better served putting down 10% and investing the remaining 50k.", '2021-08-19 13:57:40' ),
-- (8, 2, 'Country 1 vs country 2', "It happens quite frequently that I'm looking for something online and could not find a reasonable price in country 1 stores or it's just unavailable and when I find something in a country 2 shop, even with the currency exchange rate its still quite cheaper. Why do I feel like we are getting *** here?", '2021-11-09 13:57:40' ),
-- (9, 2, "Early 30’s family with 2 kids under 3", "Early 30’s family with 2 kids under 3. I was wondering if any parents could help lend some insight on expenses regarding the kids.
-- We both work middle class jobs (70k/yr) have a mortgage and one car payment. After all expense( utilities,gas, groceries, mortgage, insurance) we are just scraping by going pay check to pay check. There is very little extra spending outside of what is needed for kids.", '2021-02-09 13:57:40' ),
-- (9, 2, 'How much do you spend?', "I'm probably speding at least $500 a year on various subscriptions like Netflix, spotify, etc. How much is too much?", '2021-08-03 13:47:40' ),
-- (10, 2, 'I need advice!', "I make 53k a year, but after taxes, EI, CPP, union dues, defined benefit pension plan and long term disability insurance, I make 36k. Is this normal?", '2021-03-09 13:57:40' ),


-- INSERT INTO comments (user_id, confession_id, content, created_at)
-- VALUES 
-- (6, 11, 'That sounds crazy', '2021-11-18T08:00:00.000Z' ),
-- (7, 13, 'I started reading your comment and was confused for a moment but as I kept reading the voice in my head changed to a familiar one...', '2021-11-12T08:00:00.000Z' ),
-- (7, 15, 'I totally agree with you', '2021-11-12T08:00:00.000Z' ),
-- (7, 16, 'I totally agree!!!', '2021-11-12T08:00:00.000Z'),
-- (8, 18, 'I hope you feel better', '2021-11-12T08:00:00.000Z'),
-- (8, 19, 'How can you asked that?!', '2020-02-12T08:00:00.000Z'),
-- (9, 19, 'You are awesome', '2021-11-18T08:00:00.000Z'),
-- (9, 20, 'Thank you for sharing', '2020-02-12T08:00:00.000Z'),
-- (10, 12, "I’ll take your silence as a yes.", '2020-02-12T08:00:00.000Z'),
-- (10, 14, 'That is so stupid.', '2020-02-12T08:00:00.000Z'),


-- INSERT INTO polls (user_id, content, created_at)
-- VALUES 
-- (5,'Have you ever fallen asleep and forgotten where you were?', '2021-11-18T08:00:00.000Z' ),
-- (6, 'Have you ever said yes when you meant no?', '2021-11-12T08:00:00.000Z' ),
-- (9, 'Are you a cat or a dog person? ', '2021-11-12T08:00:00.000Z' ),
-- (11, 'Which do you like more Marvel or DC?', '2021-11-09T08:00:00.000Z');

-- INSERT INTO options (poll_id, content)
-- VALUES 
-- (5, 'once'),
-- (5, 'never'),
-- (5, 'several times'),

-- (6, 'yes'),
-- (6, 'no'),

-- (7, 'dog'),
-- (7, 'cat'),
-- (7, 'both'),

-- (8, 'Marvel'),
-- (8, 'DC'),


-- INSERT INTO results (option_id, user_id)
-- VALUES 
-- (5, 1),
-- (5, 2),
-- (5, 3),
-- (6, 5),
-- (7, 4),
-- (7, 6),
-- (8, 1),
-- (8, 2),
-- (8, 3),
-- (8, 5),
-- (9, 4),
-- (9, 6),
-- (10, 15),
-- (10, 1),
-- (10, 2),
-- (10, 3),
-- (11, 5),
-- (11, 4),
-- (11, 6),
-- (11, 10),
-- (12, 8),
-- (12, 9),
-- (13, 15),
-- (13, 1),
-- (13, 2),
-- (13, 3),
-- (13, 5),
-- (13, 4),
-- (13, 6),
-- (13, 10),
-- (14, 8),
-- (14, 9),
-- (14, 15);