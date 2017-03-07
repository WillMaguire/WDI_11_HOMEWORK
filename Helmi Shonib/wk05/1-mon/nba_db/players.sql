CREATE DATABASE nba_db;

CREATE TABLE players (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(200),
  age integer,
  team VARCHAR(200),
  games integer,
  points integer
  );

1. SELECT * FROM players WHERE team = 'NYK';
2. SELECT * FROM players WHERE team = 'IND' AND age < 26;
3. SELECT * FROM players ORDER BY points asc;
4. SELECT name, (points/games) AS pointspergame FROM players ORDER BY (points/games) DESC LIMIT 20;
5. SELECT AVG(age) FROM players;
6. SELECT AVG(age) FROM players WHERE team = 'OKC';
7. SELECT AVG(age) FROM players WHERE games > 40;
8. SELECT team, SUM(points) FROM players GROUP BY team ORDER BY SUM DESC;
Bonus
1. SELECT age, AVG(points/games) FROM players GROUP BY age ORDER BY age;
