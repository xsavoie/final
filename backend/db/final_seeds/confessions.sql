-- 1 : Secret
-- 2: Story

INSERT INTO confessions (user_id, category_id, title, content, created_at)
VALUES 
(1, 2, 'You know...', 'You know you’re an adult when you miss trash day and it ruins your entire week.', '2021-08-09 13:57:40' ),
(2, 2, 'Why doesn’t Rockefeller Center just plant a Christmas tree?', 'I really don’t understand this. Every year, Rockefeller Center takes a tree that took decades to grow, cuts it down, and flies it in over 100 miles. They’ve been doing this every year for almost 90 years. I haven’t followed it every year, so maybe I’m wrong about the details. But I don’t get it. It has to be easier to just plant a tree.', '2021-08-09 13:57:40' ),
(3, 2, 'A wireless mouse should be named a hamster', 'Like I’ve never seen a hamster with a long tail, they barely have one. Whilst the wire from normal mice can be considered a tail, wireless mice don’t have one therefore can’t really be seen as a tail so wireless mice should just be called hamsters.', '2021-08-09 13:57:40' ),
(4, 2, 'One of the biggest failings of modern education is managing to convince a whole generation that Wikipedia is an unreliable source.', 'Wikipedia is a practically unlimited source of free knowledge which is constantly being monitored by an army of nerds. The fact that we do not have to pay for access is a miracle. (Near enough) every article has a full and reliable list of references at the bottom. I understand that students should be encouraged use the references at the bottom for true research but this is not taught. Students are simply told ‘Stay away from Wikipedia, anyone can change it, it’s completely unreliable’.', '2021-08-09 13:57:40' ),
(5, 2, 'Buying my first home, broker doesn’t want me to put down 20%', 'I just bought my first home, a 500k condo. Just in the process of getting my mortgage, my broker says I shouldn’t put down 20% which was my original intention, that I’d be better served putting down 10% and investing the remaining 50k. I wanted to put down 20% to avoid the mortgage insurance, and pay less interest, but he said that rates are so low I stand to gain much more for my money by splitting it and investing in the stock market. Any advice appreciated', '2021-08-09 13:57:40' ),

(6, 1, 'I always eat dessert before dinner at a restaurant', 'When at a restaurant, waiting staff always find it weird when I order the dessert before the appetizer and the main course. They ask “oh, is that all that you’re having?”. I’m like “no… I just want my cheesecake first, please”. I have to convince them that I’m just a dessert first kinda guy. I feel like the main course is much more enjoyable when your dopamine levels are boosted.', '2021-08-09 13:57:40' ),
(7, 1, 'My husband believes running pizza under water to cool it down is acceptable', 'Pretty much what the title says. Not my opinion, but my husband’s. In college my husband and I would make oven pizzas and he would run his slices under the water fountain to cool it down faster. He says it didn’t change the taste and was still good.', '2021-08-09 13:57:40' ),
(8, 1, 'Automakers should stop replacing buttons with massive touchscreens.', 'Yeah sure, it’s futuristic and all, but a lot of them are just becoming a hassle and a hazard. I shouldn’t have to spam tap a screen to change the climate controls, whereas a dial would be so much simpler and easy to use. The screens are basically impossible to use with gloves on if you live in a colder place. ', '2021-08-09 13:57:40' ),
(9, 1, 'AM and PM is annoying. Everyone should use 24 hr / military time', 'There are 24 hours in a day, not 12. Adding am and pm is an extra step and makes signage unnecessarily confusing when they are omitted. Even if you are used to using the 12 hr format, the math is really easy to make the conversion.', '2021-08-09 13:57:40' ),
(10, 1, 'Salt and Vinegar chips are better than both sour cream & onion and barbecue chips.', 'That’s right. Salt and vinegar are the superior chip. Sour cream & onion chips just have an overly sweet yet salty taste that is just overwhelmingly disgusting. Barbecue chips leave your mouth feeling dry and bitter because of the awful taste. Salt and vinegar are just a perfect combination of flavors that is just overall better than other chips.', '2021-08-09 13:57:40' );

INSERT INTO comments (user_id, confession_id, content, created_at)
VALUES 
(2, 1, 'That’s funny', '2021-02-12T08:00:00.000Z' ),
(3, 1, 'I feel the same way', '2021-02-12T08:00:00.000Z' ),
(4, 1, 'lol', '2021-02-12T08:00:00.000Z' ),

(7, 2, 'Bad idea', '2021-02-12T08:00:00.000Z' ),
(5, 2, 'no thank you', '2021-02-12T08:00:00.000Z' ),

(1, 3, 'Are you okay?', '2021-02-12T08:00:00.000Z' ),

(6, 4, '100% agree', '2021-02-12T08:00:00.000Z' ),
(8, 4, 'I wrote my thesis thanks to wikipedia', '2021-02-12T08:00:00.000Z' ),
(4, 4, 'true!', '2021-02-12T08:00:00.000Z' ),

(2, 5, 'I have no idea', '2021-02-12T08:00:00.000Z' ),

(10, 6, 'I do the same!', '2021-02-12T08:00:00.000Z' ),
(11, 6, 'That’s ridiculous...', '2021-02-12T08:00:00.000Z' ),

(3, 7, 'lol', '2021-02-12T08:00:00.000Z' ),
(2, 7, 'what’s wrong with him.', '2021-02-12T08:00:00.000Z' ),
(1, 7, 'that’s just weird.', '2021-02-12T08:00:00.000Z' ),
(8, 7, 'what if there’s no water available?', '2021-02-12T08:00:00.000Z' ),
(6, 7, 'lmao', '2021-02-12T08:00:00.000Z' ),

(2, 8, 'lol', '2021-02-12T08:00:00.000Z' ),
(5, 8, 'I like them.', '2021-02-12T08:00:00.000Z' ),

(4, 9, 'agreed', '2021-02-12T08:00:00.000Z' ),

(9, 10, 'no chance.', '2021-02-12T08:00:00.000Z' ),
(7, 10, 'That’s a hot take.', '2021-02-12T08:00:00.000Z' );



INSERT INTO polls (user_id, content, created_at)
VALUES 
(1, 'How often do you travel?', '2021-09-12T08:00:00.000Z' ),
(6, 'How often do you eat pizza?', '2021-09-12T08:00:00.000Z' ),
(8, 'Nonstop christmas music? Yay or Nay?', '2021-09-12T08:00:00.000Z' );

INSERT INTO options (poll_id, content)
VALUES 
(1, 'Once a year'),
(1, 'Every few months'),
(1, 'As much as possible'),
(1, 'Not anymore...'),

(2, 'Rarely'),
(2, 'once a while'),
(2, 'every single day'),

(1, 'yes'),
(1, 'no');
