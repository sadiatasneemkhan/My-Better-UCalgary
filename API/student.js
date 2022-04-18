const express = require("express");
const db = require("../db");
const router = express.Router();
// endpoint 1 & 2

// localhost:5000/student/checklogin?UCID=30098787?password=test2 -> {validity: true}

router.get("/checkLogin", (req, res) => {
  let ucid = req.query.UCID;
  let pass = req.query.password;
console.log('UCID[0]: ' + ucid[0]);
  let query = `SELECT * FROM ACCOUNT WHERE UCID ='${ucid}' AND password='${pass}'`;
  console.log(query);
  db.query(query, (err, result) => {
    if (err) throw err;
console.log('result: ' +result);
    if (result.length > 0) {
        if(ucid.charAt(0) == 1){
      res.send({ account: 'Admin' });
        }
      else res.send({ account: 'Student' });
    } else {
      res.send({ account: 'ERROR' });
    }
  });
});

// endpoint 3
// http://localhost:5002/student/createStudent?First_name=Sam&Last_name=Fam&date=06262001&Address=119 Doulgasview Rd SE&Postalcode=T8M9V6&City=Calgary&Province=AB&Country=Canada&UCID=30090275&Phone_number=403-975-4511&pass=pa55word&Program=Bachelor of Science&Minor=&Dept_name=Psychology&Year_of_program=3&Year_of_minor&minor_dept
router.post("/createStudent", (req, res) => {
  let fName = req.query.First_name;
  let lName = req.query.Last_name;
  let date = req.query.date;
  let addr = req.query.Address;
  let Postal = req.query.Postalcode;
  let City = req.query.City;
  let Province = req.query.Province;
  let Country = req.query.Country;
  let UCID = req.query.UCID;
  let Phone = req.query.Phone_number;
  let pass = req.query.pass;
  let prog = req.query.Program;
  let min = req.query.Minor;
  let deptname = req.query.Dept_name;
  let yop = req.query.Year_of_program;
  let yom = req.query.Year_of_minor;
  let dept_min = req.query.minor_dept;
  let properDate =
    date.substring(0, 2) + "/" + date.substring(2, 4) + "/" + date.substring(4);
  let query = `
INSERT INTO ACCOUNT
VALUES(${UCID},'${pass}')`;
  let query2 = `
INSERT INTO STUDENT
VALUES (${UCID},'${fName}','${lName}','${properDate}','${Phone}','${addr}','${Postal}','${City}','${Province}','${Country}',${UCID});`;
  let query3 = `INSERT INTO MAJORS_IN
VALUES(${UCID},'${deptname}',${yop},'${prog}')`;

  // adds to account
  db.query(query, (err) => {
    if (err) throw err;
    else {
      console.log("Account added...");
    }
  });
  // adds to student
  db.query(query2, (err) => {
    if (err) throw err;
    else {
      console.log("Student added...");
    }
  });
  // adds to minor if applicable
  if (min !== "" || yom !== "" || dept_min !== "") {
    let query4 = `INSERT INTO MINORS_IN 
     VALUES(${UCID},'${dept_min}','${yom}','${min}')`;

    db.query(query4, (err) => {
      if (err) throw err;
      else {
        console.log("Minor added...");
      }
    });
  }

  // adds to major
  db.query(query3, (err) => {
    if (err) throw err;
    else {
      console.log("Major added...");
    }
  });
  return res.send({ UCID: UCID });
});

// endpoint 9
router.get("/getGrades", (req, res) => {
  let UCID = req.query.UCID;

  let query = `SELECT GRADE.S_UCID, GRADE.Course_Name, GRADE.Letter_grade, GRADE.course_semester FROM GRADE WHERE S_UCID = '${UCID}'`;

  //generic query
  db.query(query, (err, result) => {
    if (err) throw err;
    else return res.json(result);
  });
});
module.exports = router;
