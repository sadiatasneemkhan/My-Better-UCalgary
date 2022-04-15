const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/courses", (req, res) => {
  let query = "SELECT * FROM COURSE";
  db.query(query, (err, result) => {
    if (err) throw err;
    // output parsing
    console.log(result);
    res.json(result);
  });
});
// endpoint 6

// http://localhost:5002/course/createCourse?name=CPSC 441&semester=Fall 2022&dept=Computer Science&First_name=Carey&Last_name=Williamson&desc=Computer Networks&status=Completed&building=EEEL&room_num=138&day=MWF&time=13:00-13:50&Classsize=196&cap=200&Ucid=12345678
router.post("/createCourse", (req, res) => {
  let name = req.query.name;
  let sem = req.query.semester;
  let dept = req.query.dept;
  let ifName = req.query.First_name;
  let ilName = req.query.Last_name;
  let des = req.query.desc;
  let status = req.query.status;
  let building = req.query.building;
  let roomNum = req.query.room_num;
  let day = req.query.day;
  let time = req.query.time;
  let size = req.query.Classsize;
  let cap = req.query.cap;
  let ID = req.query.Ucid;

  let query = `
  INSERT INTO COURSE
  VALUES('${name}','${sem}','${des}','${ifName}','${ilName}','${building}','${roomNum}','${day}','${time}','${size}','${cap}','${status}','${ID}');`;
  let query2 = `INSERT INTO OFFERS VALUES ('${name}','${dept}');`;
  let query3 = `SELECT * FROM COURSE WHERE name = '${name}' AND Semester = '${sem}';`;

  db.query(query, (err, result) => {
    if (err) throw err;
    else console.log("Course created...");
  });
  db.query(query2, (err, result) => {
    if (err) throw err;
    else console.log("Offers created...");
  });
  db.query(query3, (err, result) => {
    if (err) throw err;
    else return res.json(result);
  });
});
// endpoint 7
// Not Done

router.put("/editCourse", (req, res) => {
  let orgname = req.query.orgName;
  let orgsem = req.query.orgSem;

  let name = req.query.name;
  let sem = req.query.semester;
  let dept = req.query.dept;
  let ifName = req.query.First_name;
  let ilName = req.query.Last_name;
  let des = req.query.desc;
  let status = req.query.status;
  let building = req.query.building;
  let roomNum = req.query.room_num;
  let day = req.query.day;
  let time = req.query.time;
  let size = req.query.Classsize;
  let cap = req.query.cap;
  let ID = req.query.Ucid;
  let query = `
  
    UPDATE COURSE
    SET name=${name}, semester=${sem},${des},${ifName},${ilName},${building},${roomNum},${day},${time},${size},${cap},${status},${ID});
    WHERE Course_name =${orgname}, Semester =${orgsem};
    `;
  let query2 = `UPDATE OFFERS
   SET Course_name =${name}, Dept_name =${dept})
   WHERE Course_name =${orgname}, Dept_name =${dept};
    `;
  let query3 = `SELECT * FROM COURSE WHERE name = '${name}' AND Semester = '${sem}';`;
  db.query(query, (err) => {
    if (err) throw err;
    else console.log("Course Updated!");
  });
  db.query(query2, (err) => {
    if (err) throw err;
    else console.log("Offers updated!");
  });
  db.query(query3, (err, result) => {
    if (err) throw err;
    else return res.json(result);
  });
});

//endpoint 5
router.get("/courseByAdminID", (req, res) => {
  let ucid = req.query.UCID;

  let query = `
  SELECT Course_name,Semester,Instructor_lname,Status FROM (((SYSTEM_ADMIN JOIN DEPARTMENT ON UCID=Sys_UCID) JOIN OFFERS ON DEPARTMENT.name= Dept_name) JOIN COURSE ON  COURSE.name=Course_name)
 WHERE ${ucid} = SYSTEM_ADMIN.UCID;
  `;
  db.query(query, (err, result) => {
    if (err) throw err;
    // output parsing
    console.log(result);
    res.json(result);
  });
});

router.delete("/deleteCourse", (req, res) => {
  let name = req.query.name;
  let sem = req.query.semester;

  let query = `DELETE FROM COURSE 
  WHERE name = ${name} AND Semester = ${sem}`;
  db.query(query, (err, result) => {
    if (err) throw err;
    // output parsing
    console.log(result);
    res.json(result);
  });
});

//endpoint 8

module.exports = router;
