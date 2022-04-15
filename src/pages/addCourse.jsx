import React from "react";
import AdminDashboard from '../components/adminDashboard';
import ac from'../styles/addCourse.module.css'

function AddCourse() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div className={ac.course-details}>
            <h1>ADD COURSE</h1>

            <form method="post">
                <div className={ac.labels}>
                <label>Name</label>
                </div>
                <div className={ac.textfield}>
                    
                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="Ex. CPSC 471"
                    required
                />
                </div>

                <div className={ac.labels}>
                <label>Semester</label>
                </div>
                <div className={ac.textfield}>

                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="Ex. Winter 2022"
                    required
                />
                </div>

                <div className={ac.labels}>
                <label>Description</label>
                </div>
                <div className={ac.textfield}>

                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="Description"
                    required
                />
                </div>

                <div className={ac.labels}>
                <label>Instructor's Name</label>
                </div>
                <div className={ac.textfield}>

                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="First Name"
                    required
                />
                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="Last Name"
                    required
                />
                </div>

                <div className={ac.labels}>
                <label>Location</label>
                </div>
                <div className={ac.textfield}>

                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="Building"
                    required
                />
                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="Room Number"
                    required
                />
                </div>

                <div className={ac.labels}>
                <label>Day and Time</label>
                </div>
                <div className={ac.textfield}>

                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="Ex. MWF"
                    required
                />

                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="Ex. 12:00 - 14:30"
                    required
                />
                </div>

                <div className={ac.labels}>
                <label>Number of Enrolled Students</label>
                </div>
                <div className={ac.textfield}>
                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="0 - Max Capacity"
                    required
                />
                </div>

                <div className={ac.labels}>
                <label>Max Capacity</label>
                </div>
                <div className={ac.textfield}>
                <input
                    className={ac.center-block}
                    type="text"
                    placeholder="Max Capacity"
                    required
                />
                </div>

                <div className={ac.button}>
                <input className={ac.center-block} type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default AddCourse;
