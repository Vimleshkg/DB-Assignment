# 1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
    - We can create a foreign key constraint on the category_id field in the "Product" table. This foreign key would reference the primary key (id) of the "Product_Category" table. This would prevent from creating a product with a category that doesn't exist

# 2. How could you ensure that each product in the "Product" table has a valid category assigned to it.
     We can set the category_id field in the "Product" table to NOT NULL. This would prevent from creating a product without specifying a category.
