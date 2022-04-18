import React, { Component } from 'react';
import LoginHeader from '../components/loginHeader';
import h from '../styles/homepage.module.css'

export default function Homepage (props) {
    
    return (
        <React.Fragment> 
            <LoginHeader/>
            <div className={h.body}>
                <div className={h.welcome}>Welcome to MyBetterUCalgary</div>
                <div className={h.message}>Press login to begin</div>
                <div className={h.logo}>
                <img src="../../images/vertical-logo.png" />
                </div>
            </div>
        </React.Fragment>
    );
}