import React, {Component} from 'react';
import lh1 from '../styles/loginHeader.module.css'

export default function LoginHeader (props) {
    return (
        <div className={lh1.header}>
            <div className={lh1.action}>
                <button
                className={lh1.action_button}
                onClick={event =>  window.location.href='../login'}
                >
                LOGIN
                </button>
            </div>
        </div>
    );
}
