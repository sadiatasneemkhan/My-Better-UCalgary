import React, { Component } from 'react';
import '../styles/sidebar.css'

function StudentSidebar () {
    return (  
        <React.Fragment>
            <div className="sidebar">
                <span className="left-jus">DASHBOARD</span>

                <div className="menuoptions">
                    <a className="left-jus" href="transcript.html">Transcript</a>
                    <a className="left-jus" href="calculator.html">Grade Calculator</a>
                    <a className="left-jus" href="schedule.html">Schedule</a>
                    <a className="left-jus" href="enrollcourse.html">Enroll into a Course</a>
                    <a className="left-jus" href="dropcourse.html">Drop a Course</a>
                    <a className="left-jus" href="degreetracker.html">Degree Tracker</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default StudentSidebar ;