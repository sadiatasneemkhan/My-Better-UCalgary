import React from "react";
import AdminDashboard from '../components/adminDashboard';
import uc from  '../styles/updateCourse.module.css'

function UpdateCourse() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <h1>UPDATE COURSE</h1>

            <div className={uc.btn}>
            <button
                type="button"
                className={`${uc.button} ${uc.margin-right} ${uc.add}`}
                onclick="window.location.href='addcourse.html'"
            >
                <span className={uc.buttontext}>ADD</span>
            </button>
            <button
                type="button"
                className={`${uc.button} ${uc.margin-right} ${uc.edit}`}
                onclick="window.location.href='editcourse.html'"
            >
                <span className={uc.buttontext}>EDIT</span>
            </button>
            <button
                type="button"
                className={`$${uc.button} ${uc.remove}`}
                onclick="window.location.href='removecourse.html'"
            >
                <span className={uc.buttontext}>REMOVE</span>
            </button>
            </div>
        </React.Fragment>
    );
}

export default UpdateCourse;
