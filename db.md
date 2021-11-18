

# Users
```js
user = {
  id: 1,
  email: "test@test.com",
  username: "testUsername",
  password: "password" // ideally encrypted
}
```

# Confessions
```js
confession = {
  id: 1, 
  user_id: 1,
  like_id: 1,
  comment_id: 1,
  category_id: 1,
  content: "This is a test confession",
  created_at: "2018-02-12T08:00:00.000Z"
}
```

# Likes
```js 
like = {
  id: 1,
  user_id: 3,
  confession_id: 1
}
like = {
  id: 2,
  user_id: 2,
  confession_id: 1
}
like = {
  id: 3,
  user_id: 4,
  confession_id: 1
}
```

# Comments
```js
comment = {
  id: 1,
  confession_id: 1,
  user_id: 1,
  content: "test comment",
  created_at: "2018-02-12T08:00:00.000Z"
}
comment = {
  id: 2,
  confession_id: 1,
  user_id: 3,
  content: "test comment 2",
  created_at: "2018-02-12T08:00:00.000Z"
}
comment = {
  id: 3,
  confession_id: 1,
  user_id: 4,
  content: "test comment 3",
  created_at: "2018-02-12T08:00:00.000Z"
}
```


# Categories
```js
category = {
  id: 1,
  name: "Secret"
}
category = {
  id: 2,
  name: "Story"
}
category = {
  id: 3,
  name: "Question"
}
```