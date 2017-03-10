DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title TEXT,
  year INTEGER,
  rate VARCHAR(10),
  runtime VARCHAR(50),
  genre VARCHAR(100),
  director TEXT,
  writer TEXT,
  actors TEXT,
  plot TEXT,
  language TEXT,
  country VARCHAR(100),
  poster TEXT
);
