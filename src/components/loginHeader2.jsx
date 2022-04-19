import React, {Component} from 'react';
import lh2 from '../styles/loginHeader.module.css'

export default function LoginHeader2 (props) { 
    return (
        <React.Fragment>
            <div className={lh2.header}>
            <div className={lh2.action}>
                <button
                className={lh2.action_button}
                onClick={event =>  window.location.href='/login'}
                >
                LOGIN
                </button>
            </div>
        </div>
        <img src="../images/horizontal-logo.png" className={lh2.unilogo} />
        </React.Fragment>
        
    );
}