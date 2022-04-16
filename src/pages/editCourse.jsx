import React from "react";
import AdminDashboard from '../components/adminDashboard';
import ec from '../styles/editCourse.module.css'

function EditCourse() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div className={ec.course_details}>
            <h1>EDIT COURSE</h1>

            <form method="post">
                <div className={ec.labels}>
                <label className={ec.subheading}>Choose a course to edit:</label>
                </div>
                <div className={ec.textfield}>
                <input
                    className={ec.center_block}
                    type="text"
                    placeholder="Ex. CPSC 471"
                    required
                />
                </div>
                <div className={ec.labels}>
                <label className={ec.subheading}>Modify one or more attributes:</label>
                </div>
                <div className={ec.labels}>
                <label>Name</label>
                </div>
                <div className={ec.textfield}>
                <input className={ec.center_block} type="text" placeholder="Ex. CPSC 471" />
                </div>

                <div className={ec.labels}>
                <label>Semester</label>
                </div>
                <div className={ec.textfield}>
                <input
                    className={ec.center_block}
                    type="text"
                    placeholder="Ex. Winter 2022"
                />
                </div>

                <div className={ec.labels}>
                <label>Description</label>
                </div>
                <div className={ec.textfield}>
                <input className={ec.center_block} type="text" placeholder="Description" />
                </div>

                <div className={ec.labels}>
                <label>Instructor's Name</label>
                </div>
                <div className={`${ec.textfield} ${ec.same_row}`}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                </div>

                <div className={ec.labels}>
                <label>Location</label>
                </div>
                <div className={`${ec.textfield} ${ec.same_row}`}>
                <input type="text" placeholder="Building" />
                <input type="text" placeholder="Room Number" />
                </div>

                <div className={ec.labels}>
                <label>Day and Time</label>
                </div>
                <div className={`${ec.textfield} ${ec.same_row}`}>
                <input type="text" placeholder="Ex. MWF" />
                <input type="text" placeholder="Ex. 12:00 - 14:30" />
                </div>

                <div className={ec.labels}>
                <label>Current Size and Capacity</label>
                </div>
                <div className={`${ec.textfield} ${ec.same_row}`}>
                <input type="text" placeholder="Number of Enrolled Students" />
                <input type="text" placeholder="Max Capacity" />
                </div>

                <div className={ec.button}>
                <input className={ec.center_block} type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default EditCourse;
