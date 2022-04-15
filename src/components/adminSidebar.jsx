import React, { Component } from 'react';
import '../styles/sidebar.css'

function AdminSidebar () {
    return (  
        <React.Fragment>
            <div className="sidebar">
                <span className="left-jus">DASHBOARD</span>

                <div className="menuoptions">
                    <a className="left-jus" href="courselist.html">Course List</a>
                    <a className="left-jus" href="updatecourse.html">Update Course</a>
                    <a className="left-jus" href="viewgrade.html">View Student's Grade</a>
                    <a className="left-jus" href="addgrade.html">Add Student's Grade</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AdminSidebar ;