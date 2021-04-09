[[R0_SQL]]
less8 A short note on NULLs
NULL
data-type appropriate default values
IS NULL or IS NOT NULL

SELECT column, another_column, …
FROM mytable
WHERE column IS/IS NOT NULL
AND/OR another_condition
AND/OR …;

SQL Lesson 8: A short note on NULLs
	-- Find the name and role of all employees who have not been assigned to a building
		SELECT name, role FROM employees
		WHERE building IS NULL;
	-- Find the names of the buildings that hold no employees ✓
		SELECT DISTINCT building_name
		FROM buildings
		  LEFT JOIN employees
		    ON building_name = building
		WHERE role IS NULL;

SQL Lesson 9: Queries with expressions
	-- List all movies and their combined sales in millions of dollars
		SELECT title, (domestic_sales + international_sales) / 1000000 AS gross_sales_millions
		FROM movies
		  JOIN boxoffice
		    ON movies.id = boxoffice.movie_id;
	-- List all movies and their ratings in percent
		SELECT title, rating * 10 AS rating_percent
		FROM movies
		  JOIN boxoffice
		    ON movies.id = boxoffice.movie_id;
	-- List all movies that were released on even number years
		SELECT title, year
		FROM movies
		WHERE year % 2 = 0;

SQL Lesson 10: Queries with aggregates (Pt. 1)
	-- Find the longest time that an employee has been at the studio
		SELECT MAX(years_employed) as Max_years_employed
		FROM employees;
	-- For each role, find the average number of years employed by employees in that role
		SELECT role, AVG(years_employed) as Average_years_employed
		FROM employees
		GROUP BY role;
	-- Find the total number of employee years worked in each building
		SELECT building, SUM(years_employed) as Total_years_employed
		FROM employees
		GROUP BY building;

SQL Lesson 11: Queries with aggregates (Pt. 2)
	-- Find the number of Artists in the studio (without a HAVING clause)
		SELECT role, COUNT(*) as Number_of_artists
		FROM employees
		WHERE role = "Artist";
	-- Find the number of Employees of each role in the studio
		SELECT role, COUNT(*)
		FROM employees
		GROUP BY role;
	-- Find the total number of years employed by all Engineers
		SELECT role, SUM(years_employed)
		FROM employees
		GROUP BY role
		HAVING role = "Engineer";

SQL Lesson 12: Order of execution of a Query
	-- Find the number of movies each director has directed
		SELECT director, COUNT(id) as Num_movies_directed
		FROM movies
		GROUP BY director;
	-- Find the total domestic and international sales that can be attributed to each director
		SELECT director, SUM(domestic_sales + international_sales) as Cumulative_sales_from_all_movies
		FROM movies
		    INNER JOIN boxoffice
		        ON movies.id = boxoffice.movie_id
		GROUP BY director;

SQL Lesson 13: Inserting rows
	-- Add the studio's new production, Toy Story 4 to the list of movies (you can use any director)
		INSERT INTO movies VALUES (4, "Toy Story 4", "El Directore", 2015, 90);
	-- Toy Story 4 has been released to critical acclaim! It had a rating of 8.7,
	-- and made 340 million domestically and 270 million internationally.
	-- Add the record to the BoxOffice table.
		INSERT INTO boxoffice VALUES (4, 8.7, 340000000, 270000000);

SQL Lesson 14: Updating rows
	-- The director for A Bug's Life is incorrect, it was actually directed by John Lasseter
		UPDATE movies
		SET director = "John Lasseter"
		WHERE id = 2;
	-- The year that Toy Story 2 was released is incorrect, it was actually released in 1999
		UPDATE movies
		SET year = 1999
		WHERE id = 3;
	-- Both the title and director for Toy Story 8 is incorrect!
	-- The title should be "Toy Story 3" and it was directed by Lee Unkrich
		UPDATE movies
		SET title = "Toy Story 3", director = "Lee Unkrich"
		WHERE id = 11;

SQL Lesson 15: Deleting rows
	-- This database is getting too big, lets remove all movies that were released before 2005.
		DELETE FROM movies
		where year < 2005;
	-- Andrew Stanton has also left the studio, so please remove all movies directed by him.
		DELETE FROM movies
		where director = "Andrew Stanton";

SQL Lesson 16: Creating tables
	-- Create a new table named Database with the following columns:
	-- – Name A string (text) describing the name of the database
	-- – Version A number (floating point) of the latest version of this database
	-- – Download_count An integer count of the number of times this database was downloaded
	-- This table has no constraints.
	CREATE TABLE Database (
	    Name TEXT,
	    Version FLOAT,
	    Download_count INTEGER
	);

SQL Lesson 17: Altering tables
	-- Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in.
	ALTER TABLE Movies
	  ADD COLUMN Aspect_ratio FLOAT DEFAULT 2.39;
	-- Add another column named Language with a TEXT data type to store the language that the movie was released in.
	-- Ensure that the default for this language is English.
	ALTER TABLE Movies
	  ADD COLUMN Language TEXT DEFAULT "English";

SQL Lesson 18: Dropping tables
	-- We've sadly reached the end of our lessons, lets clean up by removing the Movies table
		DROP TABLE Movies;
	-- And drop the BoxOffice table as well
		DROP TABLE BoxOffice;

