
_____________________________________________
SELECT role, COUNT(*) as Number_of_artists
FROM employees
WHERE role = "Artist";


___________________________________________

UPDATE movies
SET director = "John Lasseter", 
WHERE id = 2;


_______________________________________

Create table  database(
    name TEXT,
    version FLOAT, 
    download_count INTEGER
);

_________________________
ALTER TABLE Movies
  ADD COLUMN Language STRING DEFAULT English;

 ________________
 SELECT title, year
FROM movies
WHERE year % 2 = 0;