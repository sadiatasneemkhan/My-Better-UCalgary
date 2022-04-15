import React from "react";
import AdminDashboard from '../components/adminDashboard';
import '../styles/removeCourse.css'

function RemoveCourse() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div class="course-details">
            <h1>REMOVE COURSE</h1>

            <form method="post">
                <div class="labels">
                <label>Choose the course you wish to remove:</label>
                </div>
                <div class="textfield">
                    
                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. CPSC 471"
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

export default RemoveCourse;
