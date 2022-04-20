const express = require("express");
const db = require("../db");

const router = express.Router();

// endpoint 4
// http://localhost:5001/admin/createadmin?First_name=Sam&Last_name=Fam&UCID=19999998&pass=password122&Confirmed_pass=password122&Dept_name=Chemistry&Dept_head=Jennifer Love&date=06262001
router.post('/createadmin',(req,res) =>{
 
  let fName = req.query.First_name;
  let lName = req.query.Last_name;
  let UCID = req.query.UCID;
  let pass = req.query.pass;
  let confpass = req.query.Confirmed_pass;
  let deptname = req.query.Dept_name;
  let depthead = req.query.Dept_head;
  let date = req.query.date;
  let properDate =
  date.substring(0, 2) + "/" + date.substring(2, 4) + "/" + date.substring(4);
  
  let test = false;

  if (pass === confpass){
    
    let query = `INSERT INTO ACCOUNT VALUES(${UCID},'${pass}')`
    db.query(query, (err, result) => {
      if (err) console.error(err);
      test = true;
    });
    
    let query3 = `INSERT INTO SYSTEM_ADMIN VALUES (${UCID},'${fName}','${lName}','${properDate}',${UCID})`
    db.query(query3, (err, result) => {
      if (err) throw err;
      test = true;
    });

    let query2 = `INSERT INTO DEPARTMENT VALUES('${deptname}','${depthead}', ${UCID})`
    db.query(query2, (err, result) => {
      if (err) console.error(err);
      if(test === true){
        res.send({'UCID': UCID});
      }
    });
  }

  else {
    res.send('Passwords did not match' );
  }
});

router.get('/studentTid',(req,res) =>{
  let sUCID = req.query.Sid;
  let query = `SELECT TRANSCRIPT.T_ID FROM (TRANSCRIPT JOIN STUDENT ON TRANSCRIPT.S_UCID = STUDENT.UCID) 
  WHERE UCID = ${sUCID}`;
  db.query(query, (err, result) => {
    if (err) console.error(err);
    else return res.json(result);
  }); 
});

router.get("/getadmins", (req, res) => {
  let query = `SELECT * FROM ACCOUNT`;
  db.query(query, (err, result) => {
    if (err) console.error(err);
    else return res.json(result);
  });
});

router.post('/addGrade',(req,res) => {
  let sysUCID = req.query.Adminid;
let sUCID = req.query.Sid;
let course = req.query.Course_name;
let Course_sem = req.query.Sem;
let letter = req.query.Lgrade;
let percent = req.query.Pgrade;
let t_id = req.query.t_id;



let query = `INSERT INTO GRADE
VALUES
('${sUCID}', '${course}', '${Course_sem}',${percent}, '${letter}', ${t_id}, ${sysUCID})`

db.query(query, (err) => {
  if (err) console.error(err);
  else return res.send({'UCID': sysUCID});
});
});


module.exports = router;