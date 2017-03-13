CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(200),
  director VARCHAR(200),
  actors VARCHAR(400),
  release_year VARCHAR(10),
  plot TEXT,
  poster_url TEXT
)
