DROP DATABASE IF EXIST bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL (10,2) default 0,
    stock_quantity INT default 0,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Barg's rootbeer", "Grocery", 2.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("David Bowe T-shirt", "Clothing", 24.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("XBOX 360", "Electronics", 149.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Queen's Day Bed", "Furniture", 499.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Happy Christmas Card", "Stationary", 2.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Children's notebook", "Sationary", 4.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Ritz Crackers", "Grocery", 3.99, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Wheat Thins", "Grocery", 6.99, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Nike Sweater", "Clothing", 32.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Bananas", "Grocery", .99, 50);