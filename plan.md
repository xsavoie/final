To do planning:
- Git repo setup
- Wireframes --> start planning components ~
- ERD ~
- Data structure ~
- Seeds file
- Define MVP
- API routes ~


# Plan

## Overall

## User Stories

- User story 
  - Purpose of the app
    - App to anonymously share confessions, stories or ask questions

  - Why
    - fun to share embarassing thing anonymously
    - expressing secrets is liberating / lift weight off shoulders
    - find support

  - Who is a target
    - 18+ 
    - people that like to share things

As a user,
I want to be able to post my story/confession/secret
so that I can share it on the main page.

As a user reader,
I want to be able to visit main page with all stories,
so that I can read interesting content.

As a user reader,
I want to be able to interact with stories
so I can comment and like interesting content

As a user, 
I want to be able to log in or register
so I can interact with the app

As a user,
I want to be able to edit or delete my own stories

As a user, 
I want to search for types of stories
so I can get a specific type of content

(strech / mentor)
As a user, 
I want to be able to get/refresh more confessions
so I can browse the app longer

(strech)
As a user, 
I want to report posts that I find offensive
to avoid negative content/interactions


## feature list
- Feed of confessions to browse
  - not required to be logged in to view confessions
  - queries the db for confessions and displays them
    - randomize the results
    - limit 10 confessions
    - button at the bottom to 10 load more

- Create and post confessions
  - user needs to be logged in to create confession


- Categories of confession for search filtering
  - confessions (*Further define)
  - secrets (*Further define)
  - questions
    - add poll (strech)
  

- Search For confession by categories


- Users can comments and likes on confessions


- User login/register
  - user class
    - delete my own confessions
  - admin class 
    - delete confessions


- *STRETCH* Toxicity Check on confessions
  - report toxic confessions


## wireframe

https://www.figma.com/file/NzqPzfsCAQcTYrocChJ0CM/Confessions-App-Wireframe?node-id=0%3A1

## Stack choice
- Express
- React
- Postgres
  - SQL --> Sequelize?
- NodeJS
- Html / CSS
- SASS
- (stretch) nodemailer and mailgun

## Routes

### User login routes
- login
  - POST /login

- logout
  - POST /logout

- register
  - POST /register

- authenticate

app.get("/api/authenticate");
app.post("/api/login");
app.post("/api/register");

### API routes

# confession
- GET /api/confessions
- GET /api/confessions/:category_id
- POST /api/confessions
- PUT /api/confessions/:confession_id
- DELETE /api/confessions/:confession_id

# likes and comments
- GET /api/comments/:confession_id
- POST /api/comments/:confession_id
- PUT /api/comments/:comment_id
- DELETE /api/comments/:comment_id

- GET /api/likes/:confession_id
- POST /api/likes/:confession_id
- DELETE /api/likes/:like_id


QUESTION- Best way to query likes and comments
  specific routes? Or query them inside /confessions
  
  /api/confessions/:confession_id/likes ?



