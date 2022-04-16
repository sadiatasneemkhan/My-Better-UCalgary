import React from "react";
import AdminDashboard from '../components/adminDashboard';
import ag from '../styles/addGrade.module.css'

function AddGrade() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div className={ag.grade_details}>
            <h1>ADD GRADE</h1>

            <form method="post">
                <div className={ag.labels}>
                <label>Student's UCID</label>
                </div>
                <div className={ag.textfield}>
                <input className={ag.center_block} type="text" placeholder="UCID" required />
                </div>
                <div className={ag.labels}>
                <label>Course Name</label>
                </div>
                <div className={ag.textfield}>
                <input
                    className={ag.center_block}
                    type="text"
                    placeholder="Ex. CPSC 471"
                    required
                />
                </div>

                <div className={ag.labels}>
                <label>Course Semester</label>
                </div>
                <div className={ag.textfield}>
                <input
                    className={ag.center_block}
                    type="text"
                    placeholder="Ex. Winter 2022"
                    required
                />
                </div>

                <div className={ag.labels}>
                <label>Percentage Grade (%)</label>
                </div>
                <div className={ag.textfield}>
                <input
                    className={ag.center_block}
                    type="text"
                    placeholder="Ex. 97"
                    required
                />
                </div>

                <div className={ag.labels}>
                <label>Letter Grade</label>
                </div>
                <div className={ag.textfield}>
                <input
                    className={ag.center_block}
                    type="text"
                    placeholder="Ex. A+"
                    required
                />
                </div>

                <div className={ag.button}>
                <input className={ag.center_block} type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default AddGrade;
