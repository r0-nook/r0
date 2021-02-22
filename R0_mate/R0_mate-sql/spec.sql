LIKE
WHERE -- общие условия на весь набор данных
HAVING -- фильтровать даннные по сгрупперованной информации
	OR -- или то или то
	AND -- и то и то
ORDER BY - сортировка
INSERT INTO -
DELETE FROM -
SELECT FROM -
WHERE % BETWEEN _ AND _ -
DISTINCT - без дубликатов повторений
<> - неравно
NULL = НЕТ
NULL IS NULL -- ЕДИНСТВЕННО ВЕРНО
--типы соединений
	LEFT JOIN --???? ГЛАВНАЯ ТАБЛИЦА под правую создаются пустые яцейки
	INNER JOIN --??? записи присутствующие в обеих табличках
	RIGHT JOIN
	CROSS JOIN
	FULL JOIN
cresate table customer -- создание таблицы кастомер
id serial primary key,
CREATE TABLE
UNION -- не повторимы набор данных
UNION ALL --
EXTRACT()
ORDER BY колонка DESC -- обратная сортировка
WHERE колонка BETWEEN 2 AND 4 -- диапазон
WHERE NOT колонка BETWEEN 2 AND 4 -- вне указанного диапазона
WHERE колонка IN (2,4) -- точно
WHERE (колонка0 = "пункт0" OR колонка = "пункт1") AND колонка1 = 1; -- обеденяя требования