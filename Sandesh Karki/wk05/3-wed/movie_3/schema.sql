
DROP TABLE IF EXISTS movies;

CREATE TABLE movies(
  id SERIAL4 PRIMARY KEY,
  Title VARCHAR(300),
  Rated VARCHAR(10),
  Released VARCHAR(50),
  Runtime VARCHAR(20),
  Director VARCHAR(200),
  Poster TEXT
);
