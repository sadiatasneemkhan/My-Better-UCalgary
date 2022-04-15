import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import r from '../styles/registration.module.css'

export default function Registration (props) {
   
    return (
        <React.Fragment> 
            <LoginHeader2/>
            <h1>REGISTER AS</h1>
            <div className={r.btn}>
            
            <button
                type="button"
                className={`${r.button} ${r.margin_right} ${r.student}`}
                onClick={event =>  window.location.href='../pages/studentRegistration.jsx'}
            >
                <span className={r.buttontext}>STUDENT</span>
            </button>
            
            <button
                type="button"
                className={`${r.button} ${r.admin}`}
                onClick={event =>  window.location.href='../pages/adminRegistration.jsx'}
            >
                <span className={r.buttontext}>ADMIN</span>
            </button>
            </div>
        </React.Fragment>
    ); 
}
 