CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(255),
  director VARCHAR(255),
  actors VARCHAR(255),
  release_year VARCHAR(4),
  plot TEXT,
  poster_url TEXT
);

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(400) NOT NULL,
  password_digest VARCHAR(400) NOT NULL
);
