DROP DATABASE IF EXISTS `MYBETTERUCALGARY`;
CREATE DATABASE `MYBETTERUCALGARY`; 
USE `MYBETTERUCALGARY`;

create table ACCOUNT(
    UCID int NOT NULL,
    Password varchar(255) NOT NULL,
    PRIMARY KEY(UCID)
);

create table STUDENT(
    UCID int NOT NULL,
    First_name varchar(255) NOT NULL,
    Last_name varchar(255) NOT NULL,
    Date_of_birth varchar(10) NOT NULL,
    Phone_number varchar(255) NOT NULL,
    Address varchar(255) NOT NULL,
    Postal_code varchar(6),
    City varchar(255),
    Province varchar(2),
    Country varchar(255),
    Acc_UCID int NOT NULL,
    PRIMARY KEY(UCID),
    FOREIGN KEY(Acc_UCID) REFERENCES ACCOUNT(UCID) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE SYSTEM_ADMIN (
    UCID int NOT NULL,
    First_name varchar(255),
    Last_name varchar(255),
    Date_joined varchar(10),
    Acc_UCID int NOT NULL,
    PRIMARY KEY(UCID),
    FOREIGN KEY(Acc_UCID) REFERENCES ACCOUNT(UCID) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE TRANSCRIPT (
    S_UCID int NOT NULL,
    T_ID int UNIQUE NOT NULL AUTO_INCREMENT,
    GPA double,
    PRIMARY KEY(S_UCID, T_ID),
    FOREIGN KEY(S_UCID) REFERENCES STUDENT(UCID) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE COURSE (
    Name varchar(8) NOT NULL,
    Semester varchar(11) NOT NULL,
    Description varchar(255),
    Instructor_fname varchar(255) NOT NULL,
    Instructor_lname varchar(255) NOT NULL,
    Building varchar(255) NOT NULL,
    Room_number varchar(255) NOT NULL,
    Day varchar(255) NOT NULL,
    Time varchar(11) NOT NULL,
    Current_size int NOT NULL,
    Max_capacity int NOT NULL,
    Status varchar(9) NOT NULL,
    Sys_UCID int NOT NULL,
	PRIMARY KEY(Name, Semester),
	FOREIGN KEY(Sys_UCID) REFERENCES SYSTEM_ADMIN(UCID) ON UPDATE CASCADE ON DELETE CASCADE
);

create table GRADE(
	S_UCID int NOT NULL,
	Course_Name varchar(8) NOT NULL,
	Course_semester varchar(11) NOT NULL,
	Percentage_grade int,
	Letter_grade varchar(2),
	T_ID int NOT NULL,
	Sys_UCID int,
	PRIMARY KEY(S_UCID, Course_name, Course_semester),
	FOREIGN KEY(S_UCID) REFERENCES STUDENT(UCID) ON UPDATE CASCADE ON DELETE CASCADE, 
	FOREIGN KEY(T_ID) REFERENCES TRANSCRIPT(T_ID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(Sys_UCID) REFERENCES SYSTEM_ADMIN(UCID) ON UPDATE CASCADE ON DELETE CASCADE
);

create table SHOPPING_CART(
	S_UCID int NOT NULL,
	Semester varchar(11) NOT NULL,
	Size int,
	PRIMARY KEY(S_UCID, Semester),
	FOREIGN KEY(S_UCID) REFERENCES STUDENT(UCID) ON UPDATE CASCADE ON DELETE CASCADE
);

create table SCHEDULE(
	S_UCID int NOT NULL,
	Start_date date NOT NULL,
	End_date date NOT NULL,
	Break_sdate date NOT NULL,
	Break_edate date NOT NULL,
	PRIMARY KEY(S_UCID),
	FOREIGN KEY(S_UCID) REFERENCES STUDENT(UCID) ON UPDATE CASCADE ON DELETE CASCADE
);

create table DEPARTMENT(
	Name varchar(255) NOT NULL,
	Dept_head varchar(255),
	Sys_UCID int NOT NULL,
	PRIMARY KEY(Name),
	FOREIGN KEY(Sys_UCID) REFERENCES SYSTEM_ADMIN(UCID)
);

create table OFFERS(
	Course_name varchar(255) NOT NULL,
	Dept_name varchar(255) NOT NULL,
	PRIMARY KEY(Course_name, Dept_name),
	FOREIGN KEY(Course_name) REFERENCES COURSE(Name) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(Dept_name) REFERENCES DEPARTMENT(Name) ON UPDATE CASCADE ON DELETE CASCADE
);

create table MAJORS_IN(
    UCID int NOT NULL,
    Dept_name varchar(255) NOT NULL,
    Year_program int NOT NULL,
    Program varchar(255) NOT NULL,
    PRIMARY KEY(UCID, Dept_name),
    FOREIGN KEY(UCID) REFERENCES STUDENT(UCID) ON UPDATE CASCADE ON DELETE CASCADE, 
    FOREIGN KEY(Dept_name) REFERENCES DEPARTMENT(Name) ON UPDATE CASCADE ON DELETE CASCADE
);

create table MINORS_IN(
    UCID int NOT NULL,
    Dept_name varchar(255) NOT NULL,
    Year_program int NOT NULL,
    Program varchar(255) NOT NULL,
    PRIMARY KEY(UCID, Dept_name),
    FOREIGN KEY(UCID) REFERENCES STUDENT(UCID) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(Dept_name) REFERENCES DEPARTMENT(Name) ON UPDATE CASCADE ON DELETE CASCADE
);

create table ENROLLED_IN(
    S_UCID int NOT NULL,
    Course_name varchar(8) NOT NULL,
    Semester varchar(11) NOT NULL,
    PRIMARY KEY(Semester, S_UCID, Course_name),
    FOREIGN KEY(S_UCID) REFERENCES STUDENT(UCID) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(Course_name, Semester) REFERENCES COURSE(Name, Semester) ON UPDATE CASCADE ON DELETE CASCADE
);

create table APPEARS_ON(
    T_ID int NOT NULL,
    Course_name varchar(8) NOT NULL,
    Semester varchar(11) NOT NULL,
    PRIMARY KEY(Course_name, Semester, T_ID),
    FOREIGN KEY(T_ID) REFERENCES TRANSCRIPT(T_ID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(Course_name, Semester) REFERENCES COURSE(Name, Semester) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Inserting data into tables

-- Student UCID starts with 3, Admin UCID starst with 1

INSERT INTO ACCOUNT
VALUES 
(30091234, 'abc123'), 
(30098787, 'test2'), 
(30090271, 'password'),
(12345678, 'password'), 
(12340099, 'password'),
(12312312, 'password'),
(15975346, 'password');


INSERT INTO STUDENT
VALUES 
(30091234, 'Rafael', 'Schulte', '01/05/1998', '403-862-2571', '56 New Brighton Dr SE', 'T2Z4B2', 'Calgary', 'AB', 'Canada', 30091234), 
(30098787, 'Melissa', 'Golden', '07/12/2000', '587-018-5000', '142 Taradale Dr NE', 'T3J5G3', 'Calgary', 'AB', 'Canada', 30098787), 
(30090271, 'Maryam', 'Eldib', '06/03/2001', '587-123-5000', '3915 Bay Street', 'M5J2R8', 'Toronto', 'ON', 'Canada', 30090271);


INSERT INTO SYSTEM_ADMIN
VALUES 
(12345678, 'Alison', 'Smith', '09/17/2010', 12345678), 
(12340099, 'Carter', 'Jones', '07/04/2015', 12340099),
(12312312, 'Jardani', 'Jovanovich', '10/24/2014', 12312312),
(15975346, 'Will', 'Hunting', '01/01/2001', 15975346);

INSERT INTO TRANSCRIPT (S_UCID, GPA)
VALUES 
(30091234, 3.4), 
(30098787, 3.2),
(30090271, 3.8) ;


INSERT INTO COURSE
VALUES 
('CPSC 471', 'Winter 2022', 'Data Base Management Systems', 'Kashfia', 'Sailunaz', 'ST', '147', 'MWF', '10:00-10:50', '144', '150', 'Ongoing', '12345678'),
('CPSC 457', 'Fall 2021', 'Principles of Operating Systems', 'Pavol', 'Federl ', 'ENE', '243', 'TR', '8:00-9:50', '178', '200', 'Completed', '12345678'),
('PSYC 200', 'Fall 2021', 'Principles of Psychology I', 'Mark', 'Holden', 'ENA', '201', 'MF', '14:00-15:15', '189', '200', 'Completed', '12340099');

INSERT INTO GRADE
VALUES
(30091234, 'CPSC 457', 'Fall 2021', 95, 'A', 1, 12345678);

INSERT INTO SHOPPING_CART
VALUES
(30091234, 'Winter 2022' ,1),
(30098787, 'Winter 2022' ,3),
(30090271, 'Winter 2022' ,2);

INSERT INTO SCHEDULE
VALUES
(30091234, '2022-01-01', '2022-05-01', '2022-02-14', '2022-02-01'),
(30098787, '2022-01-01', '2022-05-01', '2022-02-14', '2022-02-01'),
(30090271, '2022-01-01', '2022-05-01', '2022-02-14', '2022-02-01');

INSERT INTO DEPARTMENT
VALUES
('Computer Science', 'Alan Turing', '12345678'),
('Psychology', 'Sigmund Freud', '12312312'),
('Biological Sciences', 'David Hansen', '12340099'),
('Mathematics & Statistics', 'Max Planck', '15975346');

INSERT INTO OFFERS
VALUES
('CPSC 471','Computer Science'),
('CPSC 457','Computer Science'),
('PSYC 200','Psychology');

INSERT INTO MAJORS_IN
VALUES
(30091234, 'Computer Science', 3, 'Computer Science'),
(30098787, 'Mathematics & Statistics', 2, 'Mathematics'),
(30090271, 'Biological Sciences', 4, 'Zoology');

INSERT INTO MINORS_IN
VALUES
(30098787, 'Computer Science', 2, 'Computer Science'),
(30091234, 'Mathematics & Statistics', 3, 'Mathematics');

INSERT INTO ENROLLED_IN
VALUES
(30091234, 'CPSC 471', 'Winter 2022'),
(30098787, 'CPSC 471', 'Winter 2022'),
(30091234, 'CPSC 457', 'Fall 2021');

INSERT INTO APPEARS_ON
VALUES
(1,'CPSC 457', 'Fall 2021'),
(2, 'CPSC 471', 'Winter 2022'),
(1, 'CPSC 471', 'Winter 2022');

