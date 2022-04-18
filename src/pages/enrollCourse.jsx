import React from "react";
import StudentDashboard from '../components/studentDashboard';
import erc from '../styles/enrollCourse.module.css'

function EnrollCourse() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div className={erc.course_details}>
            <h1>ENROLL INTO COURSE</h1>

            <form method="post">
                <div className={erc.labels}>
                <label>Choose the course you wish to enroll into:</label>
                </div>
                <div className={erc.textfield}>
                <input
                    className={erc.center_block}
                    type="text"
                    placeholder="Ex. CPSC 471"
                    required
                />
                </div>
                <div className={erc.button}>
                <input className={erc.center_block} type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default EnrollCourse;