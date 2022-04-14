const express = require("express");
const app = express();
const port = 5000;
const CourseAPI = require('./API/course');
const StudentAPI = require('./API/student');
const ScheduleAPI = require('./API/schedule');
const AdminAPI = require('./API/admin');


app.use('/course',CourseAPI);
app.use('/student',StudentAPI);
app.use('/schedule',ScheduleAPI);
app.use('/admin',AdminAPI);

// localhost:5000/course/courses

app.listen(port, () => {
console.log(`server started on ${port}`);
});

module.exports = app;