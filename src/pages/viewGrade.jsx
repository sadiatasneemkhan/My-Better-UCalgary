import React from "react";
import AdminDashboard from '../components/adminDashboard';
import '../styles/viewGrade.css'

function ViewGrade() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div class="course-details">
            <h1>STUDENT GRADES</h1>
                <table class="table table-light table-striped scrollable">
            <tr className="attributes">
                <th>Student ID</th>
                <th>Course Name</th>
                <th>Semester</th>
                <th>Letter GPA</th>
            </tr>
            <tr>
                <td class="filterable-cell">30090257</td>
                <td class="filterable-cell">ENGG 200</td>
                <td class="filterable-cell">Fall 2019</td>
                <td class="filterable-cell">A+</td>
            </tr>
            <tr>
            <td class="filterable-cell">30071766</td>
            <td class="filterable-cell">ENGG 200</td>
            <td class="filterable-cell">Spring 2020</td>
            <td class="filterable-cell">B-</td>
            </tr>
            <tr>
            <td class="filterable-cell">30045153</td>
            <td class="filterable-cell">CPSC 471</td>
            <td class="filterable-cell">Winter 2022</td>
            <td class="filterable-cell">A+</td>
            </tr>
            </table>
            <div class="in">
                <input type="number"/>
                <span id="search" onclick="SearchStudentGrades()" class="btn btn-outline-light">Search Student</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ViewGrade;
