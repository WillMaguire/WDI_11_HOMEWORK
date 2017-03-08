DROP TABLE IF EXISTS movie_list;

CREATE TABLE movie_list (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  year INTEGER,
  rated VARCHAR(200),
  released VARCHAR(200),
  runtime VARCHAR(200),
  genre VARCHAR(200),
  director VARCHAR(200),
  writer VARCHAR(200),
  actors VARCHAR(200),
  plot VARCHAR(400),
  language VARCHAR(200),
  country VARCHAR(200),
  awards VARCHAR(200),
  imdbRating FLOAT(1),
  imdbVotes NUMERIC,
  poster TEXT
);
