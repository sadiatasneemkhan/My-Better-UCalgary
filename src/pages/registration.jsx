import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import '../styles/registration.css'

export default function Registration (props) {
   
    return (
        <React.Fragment> 
            <LoginHeader2/>
            <h1>REGISTER AS</h1>
            <div className="btn">
            
            <button
                type="button"
                className="button margin-right student"
                onClick={event =>  window.location.href='../pages/studentRegistration.jsx'}
            >
                <span className="buttontext">STUDENT</span>
            </button>
            
            <button
                type="button"
                className="button admin"
                onClick={event =>  window.location.href='../pages/adminRegistration.jsx'}
            >
                <span className="buttontext">ADMIN</span>
            </button>
            </div>
        </React.Fragment>
    ); 
}
 