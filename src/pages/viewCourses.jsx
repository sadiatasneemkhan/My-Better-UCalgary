import React from "react";
import AdminDashboard from '../components/adminDashboard';
import '../styles/viewCourses.css'

function ViewCourses() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div className="course-details">
                <h1>COURSE VIEWER</h1>
                    <table className="table table-light table-striped scrollable">
                        <tr className="attributes">
                            <th>Course Name</th>
                            <th>Semester</th>
                            <th>Instuctor's Last Name</th>
                            <th>Status</th>

                        </tr>
                        <tr>
                            <td className="filterable-cell">ENSF 480</td>
                            <td className="filterable-cell">Fall 2019</td>
                            <td className="filterable-cell">Huffington</td>
                            <td className="filterable-cell">Completed</td>
                        </tr>
                        <tr>
                        <td className="filterable-cell">ENSF 409</td>
                        <td className="filterable-cell">Spring 2020</td>
                        <td className="filterable-cell">Terster</td>
                        <td className="filterable-cell">Completed</td>
                        </tr>
                        <tr>
                        <td className="filterable-cell">CPSC 471</td>
                        <td className="filterable-cell">Winter 2022</td>
                        <td className="filterable-cell">Sailunaz</td>
                        <td className="filterable-cell">Ongoing</td>
                        </tr>
                    </table>
                <div className="in">
                    <input type="number"/>
                    <span id="search" onclick="SearchStudentGrades()" className="btn btn-outline-light">Search Course(s)</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ViewCourses;
