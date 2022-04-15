import React, {Component} from 'react';
import lh1 from '../styles/loginHeader.module.css'

export default function LoginHeader (props) {
    return (
        <div className={lh1.header}>
            <div className={lh1.action}>
                <button
                className={lh1.action-button}
                onClick={event =>  window.location.href='../pages/login.jsx'}
                >
                LOGIN
                </button>
            </div>
        </div>
    );
}
