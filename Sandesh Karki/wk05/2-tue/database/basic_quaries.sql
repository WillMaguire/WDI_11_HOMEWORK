-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
    SELECT *
    FROM authors

-- Get just the name and birth year of all authors
    SELECT name, birth_year
    FROM authors

-- Get all authors born in the 20th centruy or later
    SELECT name , birth_year
    FROM authors
    WHERE birth_year > 1899;

-- Get all authors born in the USA
    SELECT id , name , nationality, birth_year
    FROM authors
    WHERE nationality = 'United States of America';

-- Get all books published on 1985
    SELECT id, title, publication_date, author_id
    FROM books
    WHERE publication_date = 1985;

-- Get all books published before 1989
    SELECT id, title, publication_date, author_id
    FROM books
    WHERE publication_date < 1989;

-- Get just the title of all books.
    SELECT title
    FROM books;

-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been
    SELECT publication_date
    FROM books
    WHERE title = 'A Dance with Dragons';

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
    SELECT id, title, publication_date, author_id
    FROM books
    WHERE title LIKE '%the%';

-- Add yourself as an author
    INSERT INTO authors(name, nationality, birth_year)
    VALUES ('Sandesh Karki', 'Nepal', 1981);

-- Add two books that you'd like to write (you can hard-code your id as the author id)
    INSERT INTO books (title, publication_date, author_id)
    VALUES ('Understanding JS', 2018 , 10),
          ( 'Understanding Ruby', 2019 , 10);

-- Update one of your books to have a new title
    UPDATE books
    SET title = 'Understanding JS and JQuery'
    WHERE title = 'Understanding JS';

-- Delete your books
    DELETE FROM books
    WHERE author_id = 10;

-- Delete your author entry
    DELETE FROM authors
    WHERE name = 'Sandesh Karki';
