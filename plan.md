Setup propper backend
 - setting up all routes
 - create db helpers --> write down querie

 - login logic

Creating react component (slowly)


To do planning:
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

## ERD

https://dbdiagram.io/d/6196c0aa02cf5d186b5db14c

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
  --> query all confession
- GET /api/confessions/:category_id
  --> query all confession for :category_id
- POST /api/confessions
  --> create new confession

- PUT /api/confessions/:confession_id
  --> update specific confession
- DELETE /api/confessions/:confession_id
  --> delete specific confession

# likes and comments
- GET /api/comments/:confession_id
  --> query all comments for a specific confession
- POST /api/comments/:confession_id
  --> create comment for a specific confession

- PUT /api/comments/:comment_id
  --> update specific comment
- DELETE /api/comments/:comment_id
  --> delete specific comment

- GET /api/likes/:confession_id
  --> get count of likes for specific confession
- POST /api/likes/:confession_id
  --> create like for specific confession
- DELETE /api/likes/:like_id


QUESTION- Best way to query likes and comments
  specific routes? Or query them inside /confessions
  How to link confession to a user?
  
  /api/confessions/:confession_id/likes ?


# React Component

 ## APP
  - tracks the user state

 ## Navbar 
  STATE:
  PROPS:
    - sign ing / logout + register
    - create confession button (if logged in)
    - select category
    - app logo

 ## Confession list
  STATE:
  PROPS:
  - container that hold multiple indivual confessions

 ## Confession list item
  STATE:
  PROPS:
  - has confession content
  - create comment button (note think about how to display)
  - view comment button (note think about how to display)

 ## Like component
  STATE:
  PROPS:
  - like button + # of likes (merge to confession list item?)
  
 ## Confession list item + create comment
  STATE:
  PROPS:
  - holds confession list item 
  - form to enter a new comment
  - submit button
  - back button (?)
  

 ## Confession list item + view all comments
  STATE:
  PROPS:
  - holds confession list item
  - container of comments for specific confession
  - back button (?)

 ## New confession form
  STATE:
  PROPS:
  - form to enter confession content
  - submit button
  - choose category button
  - cancel button (hides form)

 ## Login 
  STATE:
  PROPS:
  - contain form to login

 ## Register
  STATE:
  PROPS:
  - contain form to register


# list of queries
  --> query all confession
  --> query all confession for :category_id
  --> create new confession
  --> update specific confession
  --> delete specific confession

  --> query all comments for a specific confession
  --> create comment for a specific confession
  --> update specific comment
  --> delete specific comment

  --> get count of likes for specific confession
  --> create like for specific confession

  --> login query 