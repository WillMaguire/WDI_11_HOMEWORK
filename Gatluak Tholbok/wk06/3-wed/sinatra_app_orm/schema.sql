CREATE TABLE products (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400) NOT NULL,
  image_url TEXT,
  price INTEGER,
  availablity TEXT
);


-- steps:
-- 1. create product:
-- product: has a name, price and is stocked - true if available and false if not available
-- 2. views folder has:
-- index - show only products that are in stock (where stock is true)
-- show - shows page for each products
-- edit - edit page to modify product
-- 3. can create, edit and delete products
-- 4. create postgresql to store products
-- 5. use ActiveRecord to talk to the database
