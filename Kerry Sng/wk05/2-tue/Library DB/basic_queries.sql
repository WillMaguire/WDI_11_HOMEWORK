-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
    SELECT * FROM authors;

-- Get just the name and birth year of all authors
    SELECT name, birth_year * FROM authors;

-- Get all authors born in the 20th centruy or later
    SELECT * FROM authors WHERE birth_year > 1899;
-- Get all authors born in the USA
    SELECT * FROM authors WHERE nationality = United States of America
-- Get all books published on 1985
    SELECT * FROM books WHERE publication_date = 1985;
-- Get all books published before 1989
    SELECT * FROM books WHERE publication_date < 1989;
-- Get just the title of all books.
    SELECT title FROM books
-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been
    SELECT year FROM books WHERE title = A Dance with Dragons;
-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)

-- Add yourself as an author
    INSERT into authors(name) VALUES ('Kerry');
-- Add two books that you'd like to write (you can hard-code your id as the author id)
    INSERT into books(title, author_id) VALUES ('Basic SQL, Basic Javascript' , '5')
-- Update one of your books to have a new title
    UPDATE books SET title = 'Basic CSS', author_id = 5 WHERE title = 'Basic SQL'
-- Delete your books
    DELETE FROM books WHERE title = 'Basic CSS', 'Basic Javascript'
-- Delete your author entry
