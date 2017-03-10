CREATE TABLE movies(
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(200),
  year VARCHAR(10),
  runtime VARCHAR(20),
  genre VARCHAR(400),
  writer VARCHAR(400),
  plot TEXT,
  language VARCHAR(200),
  country VARCHAR(200),
  awards TEXT,
  poster TEXT,
  metascore VARCHAR(20),
  imdbrating VARCHAR(20),
  imdbid VARCHAR(40),
  type VARCHAR(80)
);
