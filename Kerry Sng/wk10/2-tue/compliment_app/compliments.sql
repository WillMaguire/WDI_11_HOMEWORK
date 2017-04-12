CREATE DATABASE compliments;

\c compliments;

CREATE TABLE comment (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  message VARCHAR,
)
