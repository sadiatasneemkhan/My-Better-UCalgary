import React, { Component } from 'react';
import LoginHeader from '../components/loginHeader';
import '../styles/homepage.css'

export default function Homepage (props) {
    
    return (
        <React.Fragment> 
            <LoginHeader/>
            <div className="body">
                <div className="welcome">Welcome to MyBetterUCalgary</div>
                <div className="message">Press login to begin</div>
                <div className="logo">
                <img src="../../images/vertical-logo.png" />
                </div>
            </div>
        </React.Fragment>
    );
}
