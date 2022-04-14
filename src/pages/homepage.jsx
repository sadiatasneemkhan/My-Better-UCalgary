import React, { Component } from 'react';
import LoginHeader from '../components/loginHeader';
import '../styles/homepage.css'

class Homepage extends Component {
    render() { 
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
}
 
export default Homepage;