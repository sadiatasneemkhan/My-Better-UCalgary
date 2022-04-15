import React from "react";
import AdminDashboard from '../components/adminDashboard';
import vg from '../styles/viewGrade.module.css'

function ViewGrade() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div className={vg.course-details}>
            <h1>STUDENT GRADES</h1>
                <table className={`${vg.table} ${vg.table-light} ${vg.table-striped} ${vg.scrollable}`}>
            <tr className={vg.attributes}>
                <th>Student ID</th>
                <th>Course Name</th>
                <th>Semester</th>
                <th>Letter GPA</th>
            </tr>
            <tr>
                <td className={vg.filterable-cell}>30090257</td>
                <td className={vg.filterable-cell}>ENGG 200</td>
                <td className={vg.filterable-cell}>Fall 2019</td>
                <td className={vg.filterable-cell}>A+</td>
            </tr>
            <tr>
            <td className={vg.filterable-cell}>30071766</td>
            <td className={vg.filterable-cell}>ENGG 200</td>
            <td className={vg.filterable-cell}>Spring 2020</td>
            <td className={vg.filterable-cell}>B-</td>
            </tr>
            <tr>
            <td className={vg.filterable-cell}>30045153</td>
            <td className={vg.filterable-cell}>CPSC 471</td>
            <td className={vg.filterable-cell}>Winter 2022</td>
            <td className={vg.filterable-cell}>A+</td>
            </tr>
            </table>
            <div className={vg.in}>
                <input type="number"/>
                <span 
                    id="search" 
                    onclick="SearchStudentGrades()" 
                    className={`${vg.btn} ${vg.btn-outline-light}`}>
                        Search Student</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ViewGrade;
