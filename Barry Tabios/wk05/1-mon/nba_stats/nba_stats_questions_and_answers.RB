SQL Clauses & Aggregation

# Part 1
#
# Fire up psql and create a database called nba_db.
#
# I've created the schema for a table called players in the file players.sql. The schema includes an id, name, age, team, games, and points.
#
# Run the players.sql file for your nba_db by typingpsql -d nba_db -f players.sql into your terminal (not in psql). This will create the players table in your nba_db.
#
# Part 2
#
# Run gem install pg to install the pg gem. The pg gem allows us to run SQL in a Ruby file.
#
# Run the load_data.rb Ruby program ONCE (use the command: ruby load_data.rb)to populate the database. It reads in the CSV information from the data.csv textfile and populates your database. The data is structured like the following:name,age,team,games,points
#
# ** games is games played during the season and points is total points scored over the course of the season.
#
# Part 3
#
# Figure out the appropriate SQL commands to find out the following, and keep track of them in the file called sql_commands.txt
#
# All columns for all players from the New York Knicks (NYK)
#
SELECT * FROM players where team = 'NYK';

# All columns for all players from the Indiana Packers (IND) who are under 26 years old

SELECT * FROM players where team = 'IND' AND  age < 26;
#
# All columns for all players, ordered from least points scored to most points scored

SELECT * FROM players ORDER BY "points";

# Name and Points per game (points/games), for the players with the top 20 points per game

SELECT * FROM players ORDER BY points DESC LIMIT 20;

# The average age for all players

SELECT AVG(age) FROM players;
SELECT AVG(age) as average_age FROM players;

# The average age for all players on the Oklahoma City Thunder (OKC)

SELECT AVG(points) FROM players WHERE team = "OKC";

# The average age for all players who played more than 40 games

SELECT AVG(age) FROM players WHERE games > 40;

# The team and total points scored from all players on that team (team points), ordered from most team points to least

SELECT team, SUM(points) AS team_points
  FROM players
    GROUP BY team
    ORDER BY team_points DESC;


# Bonus
#
# Age and the average points per game for that age, ordered from youngest to oldest
# Team and the the number of players who score above 12 points per game on that team, ordered from most to least
