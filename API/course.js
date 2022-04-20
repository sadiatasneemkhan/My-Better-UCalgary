const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/courses", (req, res) => {
  let query = "SELECT * FROM COURSE";
  db.query(query, (err, result) => {
    if (err) console.error(err);
    // output parsing
    console.log(result);
    res.json(result);
  });
});
// endpoint 6

// http://localhost:5002/course/createCourse?name=CPSC 441&semester=Fall 2022&dept=Computer Science&First_name=Carey&Last_name=Williamson&desc=Computer Networks&status=Completed&building=EEEL&room_num=138&day=MWF&time=13:00-13:50&Classsize=196&cap=200&Ucid=12345678
router.post("/createCourse", (req, res) => {
  console.log(req.query);
  console.log('got to createCourse API.')
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
    if (err) console.error(err);
    else console.log("Offers created...");
  });
  db.query(query3, (err, result) => {
    if (err) console.error(err);
    else return res.json(result);
  });
});
// endpoint 7
// Not Done


router.put("/editCourse", (req, res) => {
  let orgname = req.query.orgName;
  let orgsem = req.query.orgSem;

  let query = `
  UPDATE COURSE
  SET`

  let name = req.query.name;
  if(name !== undefined){
  query += ` name='${name}',`
  }
  let sem = req.query.semester;
  if(sem !== undefined){
    query += ` Semester='${sem}',`
    }
  
  let dept = req.query.dept;
  if(dept !== undefined){
    query += ` Semester='${dept}',`
    }
  let ifName = req.query.First_name;
  if(ifName !== undefined){
    query += ` Instructor_fname='${ifName}',`
    }
  let ilName = req.query.Last_name;
  if(ilName !== undefined){
      query += ` Instructor_lname='${ilName}',`
      }
  let des = req.query.desc;
  if(des !== undefined){
    query += ` Description='${des}',`
    }
  let status = req.query.status;
  if(status !== undefined){
    query += ` Status='${status}',`
    }
  let building = req.query.building;
  if(building !== undefined){
    query += ` Building='${building}',`
    }
  let roomNum = req.query.room_num;
  if(roomNum !== undefined){
    query += ` Room_number='${roomNum}',`
    }
  let day = req.query.day;
  if(day !== undefined){
    query += ` Day='${day}',`
    }
  let time = req.query.time;
  if(time !== undefined){
    query += ` Time='${time}',`
    }
  let size = req.query.Classsize;
  if(size !== undefined){
    query += ` Current_size='${size}',`
    }
  let cap = req.query.cap;
  if(cap !== undefined){
    query += ` Max_capacity='${cap}',`
    }
  let ID = req.query.Ucid;
  if(ID !== undefined){
    query += ` Semester='${ID}',`
    }

    query = query.substring(0,query.length-1);
  query += `\n WHERE Name ='${orgname}' AND Semester ='${orgsem}';
    `;
  let query2 = `UPDATE OFFERS
   SET`
   if(name !== undefined){
    query2 += ` name='${name}',`
    }
    
    if(sem !== undefined){
      query2 += ` Semester='${sem}',`
      }
      query2 = query2.substring(0,query2.length-1);
   query2 += `\nWHERE Course_name ='${orgname}' AND Dept_name ='${dept}';
    `;
let query3 = `SELECT * FROM COURSE WHERE name = '${name ? name: orgname}' AND Semester = '${sem ? sem: orgsem}';`;
  db.query(query, (err) => {
    if (err) console.error(err);
    else console.log("Course Updated!");
  });
  if(!(name === undefined) || !(sem === undefined)){
  db.query(query2, (err) => {
    if (err) console.error(err);
    else console.log("Offers updated!");
  });
}
  db.query(query3, (err, result) => {
    if (err) console.error(err);
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
    if (err) console.error(err);
    // output parsing
    console.log(result);
    res.json(result);
  });
});

router.get("/courseByStudentID", (req, res) => {
  let ucid = req.query.UCID;
console.log("Called")
  let query = `
  SELECT * FROM GRADE WHERE S_UCID=${ucid};
  `;
  db.query(query, (err, result) => {
    if (err) console.error(err);
    // output parsing
    console.log(result);
    res.json(result);
  });
});

//endpoint 8
router.delete("/deleteCourse", (req, res) => {
  let name = req.query.name;
  let sem = req.query.semester;

  let query = `DELETE FROM COURSE WHERE name = '${name}' AND Semester = '${sem}'`;
  console.log(query);
  db.query(query, (err, result) => {
    if (err) console.error(err);
    // output parsing
    console.log(result)
    if(result.affectedRows < 1){
      return res.status(400).send('Nothing was deleted');
    }
    console.log("Course Deleted...");
  return res.json(result);
    
  });
});

module.exports = router;
