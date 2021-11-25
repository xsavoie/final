DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS confessions CASCADE;
DROP TABLE IF EXISTS likes CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS polls CASCADE;
DROP TABLE IF EXISTS options CASCADE;
DROP TABLE IF EXISTS results CASCADE;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "email" VARCHAR(255) NOT NULL,
  "username" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL
);

CREATE TABLE "confessions" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "category_id" INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  "content" TEXT NOT NULL,
  "created_at" VARCHAR(255)
);

CREATE TABLE "likes" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "confession_id" INTEGER NOT NULL REFERENCES confessions(id) ON DELETE CASCADE
);

CREATE TABLE "comments" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "confession_id" INTEGER NOT NULL REFERENCES confessions(id) ON DELETE CASCADE,
  "content" TEXT NOT NULL,
  "created_at" TIMESTAMP
);

CREATE TABLE "polls" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "content" TEXT NOT NULL,
  "created_at" TIMESTAMP
);

CREATE TABLE "options" (
  "id" SERIAL PRIMARY KEY,
  "poll_id" INTEGER NOT NULL REFERENCES polls(id) ON DELETE CASCADE,
  "content" TEXT NOT NULL

);

CREATE TABLE "results" (
  "id" SERIAL PRIMARY KEY,
  "option_id" INTEGER NOT NULL REFERENCES options(id) ON DELETE CASCADE,
  "user_id" INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE

);



ALTER TABLE "confessions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "confessions" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "likes" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "likes" ADD FOREIGN KEY ("confession_id") REFERENCES "confessions" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("confession_id") REFERENCES "confessions" ("id");


-- npm run db:reset