-- Create the database
CREATE DATABASE IF NOT EXISTS xiaomi_dev;

use xiaomi_dev;

-- Create product table
CREATE TABLE product (
    id_product INT PRIMARY KEY NOT NULL,
    name_product VARCHAR(255) NOT NULL,
    category_product VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    specification VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    discount INT
);

-- Create customers table
CREATE TABLE customers (
    id_customer INT PRIMARY KEY NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    created_at timestamp,
    updated_at timestamp
);

-- Create cart table
CREATE TABLE cart (
    id_cart INT PRIMARY KEY NOT NULL,
    id_product INT NOT NULL,
    id_customer INT NOT NULL,
    qty INT NOT NULL,
    price INT NOT NULL,
    created_at timestamp,
    updated_at timestamp,
    FOREIGN KEY (id_product) REFERENCES product(id_product),
    FOREIGN KEY (id_customer) REFERENCES customers(id_customer)

);

-- Create address table
CREATE TABLE address (
    id_address INT PRIMARY KEY NOT NULL,
    address_name VARCHAR(255) NOT NULL,
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    postal_code INT NOT NULL,
    created_at timestamp,
    updated_at timestamp
);

-- Create customer_address bridging table
CREATE TABLE customer_address (
    id_customer INT NOT NULL,
    id_address  INT NOT NULL,
    PRIMARY KEY (id_customer, id_address),
    FOREIGN KEY (id_customer) REFERENCES customers(id_customer),
    FOREIGN KEY (id_address) REFERENCES address(id_address)
);


-- Create payment_method table
CREATE TABLE payment_method (
    id_payment_method INT PRIMARY KEY NOT NULL,
    id_customer INT NOT NULL,
    payment_type VARCHAR(255) NOT NULL,
    provider VARCHAR(255) NOT NULL,
    account_number VARCHAR(255) NOT NULL,
    created_at timestamp,
    updated_at timestamp,
    FOREIGN KEY (id_customer) REFERENCES customers(id_customer)
);

-- Create checkout table
CREATE TABLE checkout (
    id_checkout INT PRIMARY KEY NOT NULL,
    id_address INT NOT NULL,
    id_customer INT NOT NULL,
    id_payment_method INT NOT NULL,
    id_cart INT NOT NULL,
    created_at timestamp,
    updated_at timestamp,
    FOREIGN KEY (id_address) REFERENCES address(id_address),
    FOREIGN KEY (id_customer) REFERENCES customers(id_customer),
    FOREIGN KEY (id_payment_method) REFERENCES payment_method(id_payment_method),
    FOREIGN KEY (id_cart) REFERENCES cart(id_cart)
);



SELECT
    customers.fullname,
    address.address_name,
    address.address_line1,
    address.address_line2,
    address.city,
    address.region,
    address.postal_code
FROM
    customer_address
INNER JOIN customers ON customer_address.id_customer = customers.id_customer
INNER JOIN address ON customer_address.id_address = address.id_address
GROUP BY
    customers.fullname,
    address.address_name,
    address.address_line1,
    address.address_line2,
    address.city,
    address.region,
    address.postal_code;




SELECT name_product
FROM products
WHERE category_product like '%POCO%';





