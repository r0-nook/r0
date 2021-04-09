
SQL Lesson 8: A short note on NULLs
	-- Find the name and role of all employees who have not been assigned to a building
	-- Find the names of the buildings that hold no employees ✓

SQL Lesson 9: Queries with expressions
	-- List all movies and their combined sales in millions of dollars
	-- List all movies and their ratings customers  percent
	-- List all movies that were released on even number years

SQL Lesson 10: Queries with aggregates (Pt. 1)
	-- Find the longest time that an employee has been at the studio
	-- For each role, find the average number of years employed by employees in that role
	-- Find the total number of employee years worked in each building

SQL Lesson 11: Queries with aggregates (Pt. 2)
	-- Find the number of Artists in the studio (without a HAVING clause)
	-- Find the number of Employees of each role in the studio
	-- Find the total number of years employed by all Engineers

SQL Lesson 12: Order of execution of a Query
	-- Find the number of movies each director has directed
	-- Find the total domestic and international sales that can be attributed to each director
SQL Lesson 13: Inserting rows
	-- Add the studio's new production, Toy Story 4 to the list of movies (you can use any director)
	-- Toy Story 4 has been released to critical acclaim! It had a rating of 8.7,
	-- and made 340 million domestically and 270 million internationally.
	-- Add the record to the BoxOffice table.

SQL Lesson 14: Updating rows
	-- The director for A Bug's Life is incorrect, it was actually directed by John Lasseter
	-- The year that Toy Story 2 was released is incorrect, it was actually released in 1999
	-- Both the title and director for Toy Story 8 is incorrect!
	-- The title should be "Toy Story 3" and it was directed by Lee Unkrich

SQL Lesson 15: Deleting rows
	-- This database is getting too big, lets remove all movies that were released before 2005.
	-- Andrew Stanton has also left the studio, so please remove all movies directed by him.

SQL Lesson 16: Creating tables
	-- Create a new table named Database with the following columns:
	-- – Name A string (text) describing the name of the database
	-- – Version A number (floating point) of the latest version of this database
	-- – Download_count An integer count of the number of times this database was downloaded
	-- This table has no constraints.

SQL Lesson 17: Altering tables
	-- Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in.
	-- Add another column named Language with a TEXT data type to store the language that the movie was released in.
	-- Ensure that the default for this language is English.

SQL Lesson 18: Dropping tables
	-- We've sadly reached the end of our lessons, lets clean up by removing the Movies table
	-- And drop the BoxOffice table as well

