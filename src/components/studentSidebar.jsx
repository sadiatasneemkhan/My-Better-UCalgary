import React, { Component } from 'react';
import '../styles/sidebar.css'

function StudentSidebar () {
    return (  
        <React.Fragment>
            <div class="sidebar">
                <span class="left-jus">DASHBOARD</span>

                <div class="menuoptions">
                    <a class="left-jus" href="transcript.html">Transcript</a>
                    <a class="left-jus" href="calculator.html">Grade Calculator</a>
                    <a class="left-jus" href="schedule.html">Schedule</a>
                    <a class="left-jus" href="enrollcourse.html">Enroll into a Course</a>
                    <a class="left-jus" href="dropcourse.html">Drop a Course</a>
                    <a class="left-jus" href="degreetracker.html">Degree Tracker</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default StudentSidebar ;