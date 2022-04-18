import React, { Component } from 'react';
import as from '../styles/sidebar.module.css'

function AdminSidebar () {
    return (  
        <React.Fragment>
            <div className={as.sidebar}>
                <span className={as.left_jus}>DASHBOARD</span>

                <div className={as.menuoptions}>
                    <a className={as.left_jus} href="/admin/viewCourse">Course List</a>
                    <a className={as.left_jus} href="/admin/updateCourse">Update Course</a>
                    <a className={as.left_jus} href="/admin/viewGrade">View Student's Grade</a>
                    <a className={as.left_jus} href="/admin/addGrade">Add Student's Grade</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AdminSidebar ;