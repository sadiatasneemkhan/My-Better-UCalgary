import React from "react";
import AdminDashboard from '../components/adminDashboard';
import uc from  '../styles/updateCourse.module.css'

function UpdateCourse() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <h1 className={uc.header}>UPDATE COURSE</h1>

            <div className={uc.btn}>
            <button
                type="button"
                className={`${uc.bt} ${uc.margin_right} ${uc.add}`}
                onClick={event =>  window.location.href='/adminDashboard/addCourse'}
            >
                <span className={uc.buttontext}>ADD</span>
            </button>

            <button
                type="button"
                className={`${uc.bt} ${uc.margin_right} ${uc.edit}`}
                onClick={event =>  window.location.href='/adminDashboard/editCourse'}
            >
                <span className={uc.buttontext}>EDIT</span>
            </button>
            
            <button
                type="button"
                className={`${uc.bt} ${uc.remove}`}
                onClick={event =>  window.location.href='/adminDashboard/removeCourse'}
            >
                <span className={uc.buttontext}>REMOVE</span>
            </button>
            </div>
        </React.Fragment>
    );
}

export default UpdateCourse;
