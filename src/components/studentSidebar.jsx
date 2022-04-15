import React, { Component } from 'react';
import ss from '../styles/sidebar.module.css'

function StudentSidebar () {
    return (  
        <React.Fragment>
            <div className={ss.sidebar}>
                <span className={ss.left-jus}>DASHBOARD</span>

                <div className={ss.menuoptions}>
                    <a className={ss.left-jus} href="transcript.html">Transcript</a>
                    <a className={ss.left-jus} href="calculator.html">Grade Calculator</a>
                    <a className={ss.left-jus} href="schedule.html">Schedule</a>
                    <a className={ss.left-jus} href="enrollcourse.html">Enroll into a Course</a>
                    <a className={ss.left-jus} href="dropcourse.html">Drop a Course</a>
                    <a className={ss.left-jus} href="degreetracker.html">Degree Tracker</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default StudentSidebar ;