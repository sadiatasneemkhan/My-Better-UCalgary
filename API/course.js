const express = require("express");
const db = require("../db");

const router = express.Router();
// API 1
router.get("/courses", (req, res) => {
  let query = "SELECT * FROM COURSE";
  db.query(query, (err, result) => {
    if (err) throw err;
    // output parsing
    console.log(result);
    res.json(result);
  });
});

router.get("/courseByID", (req, res) => {
  let query = "";
});

router.get("/courseByAdminID", (req, res) => {
  let query = "";
});

router.put("/editCourse", (req, res) => {
  let query = "";
});

module.exports = router;
