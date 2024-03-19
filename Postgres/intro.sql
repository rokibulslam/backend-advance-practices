-- Active: 1709189652471@@127.0.0.1@5432@test2
-- ## CREATE DATABASE
-- CREATE DATABASE db1

-- ## RENAME DATABASE
-- ALTER DATABASE db1 RENAME TO db2

-- ##DELETE DATABASE
-- DROP DATABASE db2

-- ## CREATE a TABLE
-- 
CREATE TABLE student (
    student_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    cgpa NUMERIC(3,2)
)

-- Create table with CONSTRAINT
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age int DEFAULT 18
)

-- INSERT
INSERT INTO users (user_id, username, email, age) VALUES(1, 'Rokibul', 'rokibul1003@gmail.com', 39)

-- Insert multiple VALUES
INSERT INTO users (username, email) 
VALUES
('rokibul1', 'rokibul1@gmail.com'),
('rokibul2', 'rokibul2@gmail.com')

SELECT * from users;

-- Truncate Will remove all rows in the table but not delete Table. While DROP will Delete table also.
TRUNCATE TABLE users;    