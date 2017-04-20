class Product <ActiveRecord::Base
  validates :name, presence: true
end




# steps:
#
# 1. create product:
#
# product: has a name, price and is stocked - true if it available and false if not available
#
# 2. views folder has:
# index - show only products that are in stock (where stock is true)
# show - shows page for each products
# edit - edit page to modify product
#
# 3. can create, edit and delete products
# 4. create postgresql to store products
# 5. use ActiveRecord to talk to the database
