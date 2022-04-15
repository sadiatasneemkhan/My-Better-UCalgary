import React from "react";
import AdminDashboard from '../components/adminDashboard';
import '../styles/addGrade.css'

function AddGrade() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div class="grade-details">
            <h1>ADD GRADE</h1>

            <form method="post">
                <div class="labels">
                <label>Student's UCID</label>
                </div>
                <div class="textfield">
                <input class="center-block" type="text" placeholder="UCID" required />
                </div>
                <div class="labels">
                <label>Course Name</label>
                </div>
                <div class="textfield">
                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. CPSC 471"
                    required
                />
                </div>

                <div class="labels">
                <label>Course Semester</label>
                </div>
                <div class="textfield">
                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. Winter 2022"
                    required
                />
                </div>

                <div class="labels">
                <label>Percentage Grade (%)</label>
                </div>
                <div class="textfield">
                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. 97"
                    required
                />
                </div>

                <div class="labels">
                <label>Letter Grade</label>
                </div>
                <div class="textfield">
                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. A+"
                    required
                />
                </div>

                <div class="button">
                <input class="center-block" type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default AddGrade;
