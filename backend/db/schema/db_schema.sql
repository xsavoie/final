CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "email" varchar,
  "username" varchar,
  "password" varchar
);

CREATE TABLE "confessions" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "category_id" int,
  "content" varchar,
  "created_at" timestamp
);

CREATE TABLE "likes" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "confession_id" int
);

CREATE TABLE "comments" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "confession_id" int,
  "content" varchar,
  "created_at" timestamp
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar
);

ALTER TABLE "confessions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "confessions" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "likes" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "likes" ADD FOREIGN KEY ("confession_id") REFERENCES "confessions" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("confession_id") REFERENCES "confessions" ("id");