SELECT customer_id, COUNT(order_id) as orders 
FROM customers 
JOIN orders ON customers.customer_id = orders.customer_id 
WHERE city = 'Tokyo'


SELECT c.customer_id, COUNT(*) as orders
FROM customers c JOIN
     orders o
     ON c.customer_id = o.customer_id
WHERE c.city = 'London'
GROUP BY c.customer_id;

___________________________________

SELECT order_date, product_id, quantity, orders.order_id
FROM orders
left join orderDetails
on orders.order_id = orderDetails.order_id
where customer_id = 14


select max(customer_id)
from customers


SELECT * FROM products 
left JOIN suppliers ON products.supplier_id = suppliers.supplier_id
WHERE city = 'Tokyo'