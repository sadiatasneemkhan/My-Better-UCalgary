import React, {Component} from 'react';
import soh from '../styles/loginHeader.module.css'

export default function SignOutHeader (props) { 
    return (
        <React.Fragment>
            <div className={soh.header}>
            <div className={soh.action}>
                <button
                
                onClick={event =>  window.location.href='../pages/login.jsx'}
                >
                SIGN OUT
                </button>
            </div>
        </div>
        <img src="../images/logo.png" class="unilogo" />
        </React.Fragment>
        
    );
}