import React, {Component} from 'react';
import soh from '../styles/loginHeader.module.css'

export default function SignOutHeader (props) { 
    return (
        <React.Fragment>
            <div className={soh.header}>
            <div className={soh.action}>
                <button
                className={soh.action_button}
                onClick={event =>  window.location.href='/'}
                >
                SIGN OUT
                </button>
            </div>
        </div>
        <img src="../images/horizontal-logo.png" className={soh.unilogo} />
        </React.Fragment>
        
    );
}