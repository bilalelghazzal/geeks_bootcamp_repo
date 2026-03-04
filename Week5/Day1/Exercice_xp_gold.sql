-- 1. First 4 students ordered alphabetically by last_name
SELECT first_name, last_name, birth_date 
FROM students
ORDER BY last_name ASC
LIMIT 4;

-- 2. Youngest student (most recent birth_date = highest date value)
SELECT first_name, last_name, birth_date 
FROM students
ORDER BY birth_date DESC
LIMIT 1;

-- 3. Three students skipping the first two
SELECT first_name, last_name, birth_date 
FROM students
LIMIT 3 OFFSET 2;