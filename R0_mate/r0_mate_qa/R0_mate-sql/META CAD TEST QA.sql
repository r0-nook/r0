1. Calculate the amount of customers from London.
SELECT COUNT(*)
FROM CUSTOMERS
WHERE 	;

2. Show all info about all customers that are located in Germany, Mexico and Austria.
SELECT *
FROM customers
WHERE country IN ("Germany", "Mexico", "Austria") ;

3. Show all info about the employee with id = 8.
SELECT *
FROM EMPLOYEES
WHERE employee_id = 8;

4. Show the list of customer names and contact names of the customers from London.
SELECT customer_name, contact_name
FROM CUSTOMERS
WHERE city = "London";

5. Show first and last name of the oldest employee. --????
SELECT first_name, last_name
FROM EMPLOYEES
ORDER BY birth_date
LIMIT 1;

6. Show list of customer names and contact names of the customers whose customer name begins with letter 'A'.
SELECT customer_name, contact_name
FROM customers
WHERE customer_name LIKE "A%";

7. Show supplier_name of companies which provide products with price less than 20.
SELECT DISTINCT supplier_name
FROM products LEFT JOIN suppliers
ON products.supplier_id = suppliers.supplier_id
WHERE price < 20

8.

SELECT DISTINCT customers.customer_id
, (SELECT COUNT(city = "London")) AS orders
-- , RPAD(customers.customer_id, 2) as orders
FROM customers
INNER JOIN orders
ON customers.customer_id = orders.customer_id
WHERE city = "London"
-- ALTER TABLE customers
-- ADD COLUMN orders integer DEFAULT