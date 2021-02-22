[[R0_SQL]]
SELECT
FROM
Если мы хотим получить абсолютно все столбцы данных из таблицы, мы можем затем использовать *сокращение asterisk ( ) вместо перечисления всех имен столбцов по отдельности.
- [ ] Выбрать запрос для всех столбцов
SELECT *
FROM mytable;
Этот запрос, в частности, действительно полезен, потому что это простой способ проверить таблицу, выгрузив все данные сразу.
WHERE condition
    AND/OR another_condition
    AND/OR …;
	Operator	Condition	SQL Example
=, !=, < <=, >, >=	Standard numerical operators	col_name != 4
BETWEEN … AND …	Number is within range of two values (inclusive)	col_name BETWEEN 1.5 AND 10.5
NOT BETWEEN … AND …	Number is not within range of two values (inclusive)	col_name NOT BETWEEN 1 AND 10
IN (…)	Number exists in a list	col_name IN (2, 4, 6)
NOT IN (…)	Number does not exist in a list	col_name NOT IN (1, 3, 5)
![[Pasted image 20201207014003.png]]
https://sqlbolt.com/lesson/select_queries_with_constraints
SELECT title, year FROM movies WHERE year <= 2003;
![[Pasted image 20201207120520.png]]
=	Case sensitive exact string comparison (notice the single equals)	col_name = "abc"
!= or <>	Case sensitive exact string inequality comparison	col_name != "abcd"
LIKE	Case insensitive exact string comparison	col_name LIKE "ABC"
NOT LIKE	Case insensitive exact string inequality comparison	col_name NOT LIKE "ABCD"
%	Used anywhere in a string to match a sequence of zero or more characters (only with LIKE or NOT LIKE)	col_name LIKE "%AT%"
(matches "AT", "ATTIC", "CAT" or even "BATS")
_	Used anywhere in a string to match a single character (only with LIKE or NOT LIKE)	col_name LIKE "AN_"
(matches "AND", but not "AN")
IN (…)	String exists in a list	col_name IN ("A", "B", "C")
NOT IN (…)

SELECT FROM WHERE
operator =, !=, < <=, >, >= BETWEEN … AND … NOT BETWEEN … AND … IN (…) NOT IN (…) LIKE  NOT LIKE	% _ and or
GROUP BY
DISTINCT
ORDER BY  LIMIT OFFSET
SELECT DISTINCT director FROM movies ORDER BY director ASC
																			алфавитный порядок
SELECT title, year 					FROM movies ORDER BY year DESC LIMIT 4;
SELECT title 							FROM movies ORDER BY title ASC LIMIT 5;
SELECT title FROM movies ORDER BY title ASC LIMIT 5 OFFSET 5
нипанятна

SELECT City, Country, Population FROM north_american_cities 
WHERE Country LIKE "Canada"

SELECT city, latitude FROM north_american_cities WHERE country = "United States"
ORDER BY latitude DESC;

НИПАНЯТНОА РАЗНИЦА МЕЖДУ АСК И ДЕСК

SELECT city, longitude FROM north_american_cities
WHERE longitude < -87.629798 ORDER BY longitude ASC;
{{white noise}}

SELECT city, population FROM north_american_cities
WHERE country LIKE "Mexico" ORDER BY population DESC LIMIT 2;
{{}}

SELECT city, population FROM north_american_cities
WHERE country LIKE "United States" ORDER BY population DESC LIMIT 2 OFFSET 2;
{{3 and 4 citi by populations}}

INNER JOIN
ON constraint
SELECT * FROM movies INNER JOIN Boxoffice ON Movies.id = Boxoffice.Movie_id

SELECT title, domestic_sales, international_sales
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id
WHERE international_sales > domestic_sales;
Show the sales numbers for each movie that did better internationally rather than domestically  

SELECT title, rating
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id
ORDER BY rating DESC; {{выстроил в порядке убывания}}
List all the movies by their ratings in descending order 


SELECT DISTINCT building FROM employees;
Find the list of all buildings that have employees
Оператор SQL DISTINCT используется для указания на то, что следует работать только с уникальными значениями столбца.

SELECT * FROM buildings;

SELECT DISTINCT building_name, role
FROM buildings
  LEFT JOIN employees
    ON building_name = building;
	List all buildings and the distinct employee roles in each building (including empty buildings)