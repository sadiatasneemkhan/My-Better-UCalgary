const express = require("express");
const app = express();
const port = 5000;
const CourseAPI = require('./API/course');


app.use('/course',CourseAPI);
// localhost:5000/course/courses

app.listen(port, () => {
console.log(`server started on ${port}`);
});

module.exports = app;