CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  year INTEGER,
  genre VARCHAR(250),
  actors VARCHAR(400),
  plot VARCHAR(500),
  country  VARCHAR(250),
  awards  VARCHAR(250),
  director  VARCHAR(250),
  poster_url TEXT
);
