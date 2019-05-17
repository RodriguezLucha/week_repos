PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname VARCHAR(255),
    lname VARCHAR(255)
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    body TEXT,             
    associated_author_id INTEGER NOT NULL,
    FOREIGN KEY (associated_author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
    questions_id INTEGER NOT NULL,
    users_id INTEGER NOT NULL,
    FOREIGN KEY (questions_id) REFERENCES questions(id),
    FOREIGN KEY (users_id) REFERENCES users(id)

);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    parent_id INTEGER,
    users_id INTEGER NOT NULL,
    body TEXT,
    FOREIGN KEY(question_id) REFERENCES questions(id),
    FOREIGN KEY(parent_id) REFERENCES replies(id),
    FOREIGN KEY(users_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
    users_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    FOREIGN KEY(question_id) REFERENCES questions(id),
    FOREIGN KEY(users_id) REFERENCES users(id)
);


INSERT INTO users (id, fname, lname) 
VALUES (1, "Rudy", "Rodriguez");
INSERT INTO users (id, fname, lname) 
VALUES (2, "Alec", "Ning");
INSERT INTO users (id, fname, lname) 
VALUES (3, "Ronil", "Z");
INSERT INTO users (id, fname, lname) 
VALUES (4, "Joker", "None");

INSERT INTO questions (id, title, body, associated_author_id)
VALUES (1, "Serious", "Rudy asked why so serious?", 1);
INSERT INTO questions (id, title, body, associated_author_id)
VALUES (2, "Funny", "Alec asked why so funny?", 2);
INSERT INTO questions (id, title, body, associated_author_id)
VALUES (3, "High", "Alec asked Why so high?", 2);
INSERT INTO questions (id, title, body, associated_author_id)
VALUES (4, "HATE", "Why hate my question?", 1);

INSERT INTO question_follows (questions_id, users_id)
VALUES(1, 3);
INSERT INTO question_follows (questions_id, users_id)
VALUES(1, 2);
INSERT INTO question_follows (questions_id, users_id)
VALUES(2, 3);
INSERT INTO question_follows (questions_id, users_id)
VALUES(2, 1);
INSERT INTO question_follows (questions_id, users_id)
VALUES(1, 4);

INSERT INTO replies (id, question_id, parent_id, users_id, body)
VALUES(1, 1, NULL, 4, "Lets put a smile on that face!");
INSERT INTO replies (id, question_id, parent_id, users_id, body)
VALUES(2, 1, 1, 4, "Kill it!");
INSERT INTO replies (id, question_id, parent_id, users_id, body)
VALUES(3, 1, 1, 4, "Kill it again!");
INSERT INTO replies (id, question_id, parent_id, users_id, body)
VALUES(4, 1, 3, 4, "Save it!");

INSERT INTO question_likes(users_id, question_id)
VALUES(2, 1);
INSERT INTO question_likes(users_id, question_id)
VALUES(3, 3);
INSERT INTO question_likes(users_id, question_id)
VALUES(1, 3);
INSERT INTO question_likes(users_id, question_id)
VALUES(3, 1);
INSERT INTO question_likes(users_id, question_id)
VALUES(1, 1);





