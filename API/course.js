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
router.post('/createCourse',(req,res) =>{
  let name = req.query.name;
  let sem = req.query.semester;
  let dept = req.query.dept;
  let ifName = req.query.First_name;
  let ilName = req.query.Last_name;
  let des = req.query.desc;
  let status = req.query.status;
  let building = req.query.Date_of_birth;
  let roomNum = req.query.room_num;
  let day = req.query.day;
  let time = req.query.time;
  let size = req.query.size;
  let cap = req.query.cap;
  let UCID = req.query.UCID;
  let gradescale = req.query.gradescale;
  let query = `
  INSERT INTO COURSE
  VALUES(${name},${sem},${des},${ifName},${ilName},${building},${roomNum},${day},${time},${size},${cap},${status},${UCID},${gradescale});
  INSERT INTO OFFERS
  VALUES (${name},${dept});
  `
  
  db.query(query,(err) =>{
      if(err) throw err
      else return res.send('Course Created!');
  });
  });
  // endpoint 7
  // Not Done
  router.put('/editCourse',(req,res) =>{
    let orgname = req.query.orgName;
    let orgsem = req.query.orgSem;

    let name = req.query.name;
    let sem = req.query.semester;
    let dept = req.query.dept;
    let ifName = req.query.First_name;
    let ilName = req.query.Last_name;
    let des = req.query.desc;
    let status = req.query.status;
    let building = req.query.Date_of_birth;
    let roomNum = req.query.room_num;
    let day = req.query.day;
    let time = req.query.time;
    let size = req.query.size;
    let cap = req.query.cap;
    let UCID = req.query.UCID;
    let gradescale = req.query.gradescale;
    let query = `
    UPDATE COURSE
    SET name=${name}, semester=${sem},${des},${ifName},${ilName},${building},${roomNum},${day},${time},${size},${cap},${status},${UCID},${gradescale});
    WHERE Course_name =${orgname}, Semester =${orgsem};
    UPDATE OFFERS
   SET Course_name =${name}, Dept_name =${dept})
   WHERE Course_name =${orgname}, Dept_name =${dept};
    `
    
    db.query(query,(err) =>{
        if(err) throw err
        else return res.send('Course Created!');
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
