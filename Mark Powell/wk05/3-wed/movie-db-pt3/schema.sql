CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(255),
  director VARCHAR(255),
  actors VARCHAR(255),
  release_year VARCHAR(4),
  plot TEXT,
  poster_url TEXT
);
