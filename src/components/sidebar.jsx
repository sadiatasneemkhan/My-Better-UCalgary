import React, { Component } from 'react';
import '../styles/sidebar.css'

function Sidebar () {
    return (  
        <React.Fragment>
            <div class="sidebar">
                <span class="left-jus">DASHBOARD</span>

                <div class="menuoptions">
                    <a class="left-jus" href="courselist.html">Course List</a>
                    <a class="left-jus" href="updatecourse.html">Update Course</a>
                    <a class="left-jus" href="viewgrade.html">View Student's Grade</a>
                    <a class="left-jus" href="addgrade.html">Add Student's Grade</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar ;