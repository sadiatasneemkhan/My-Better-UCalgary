import React from "react";
import StudentDashboard from '../components/studentDashboard';
import '../styles/degreeTracker.css'

function DegreeTracker() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <h1>DEGREE TRACKER</h1>

            <h2 class="left-jus">DEGREE(S)</h2>
            <div class="text left-jus">
            <div class="major txt">Major:</div>
            <div class="yop txt">Year of Program:</div>
            <div class="minor txt">Minor:</div>
            <div class="yop txt">Year of Program:</div>
            </div>

            <h2 class="left-jus">COURSES COMPLETED</h2>
        </React.Fragment>
    );
}

export default DegreeTracker;
