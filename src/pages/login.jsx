import React, { Component, useState, useEffect } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import axios from 'axios';
import l from '../styles/login.module.css'

export default function Login (props) {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [hasLoaded,setHasLoaded] = useState([{
        loading:false,
        account: null,
    }]);

    const submission = (evt) => {
        evt.preventDefault();
        alert(`user: ${user} pass: ${pass}`);
        const url = `http://localhost:5001/student/checklogin?UCID=${user}&password=${pass}`;

    }
    
    useEffect(() => {
        const url = `http://localhost:5001/student/checklogin?UCID=${user}&password=${pass}`;
        axios.get(url).then((account) =>{
            const acc = account.data;
            console.log();
    });

}, [])
    
    return (
        <React.Fragment> 
            <LoginHeader2/>
            <div className={l.loginbox}>
                <h1>LOGIN</h1>
                
                <form onSubmit={submission}>
                    <div className={l.textfield}>
                    <input className={l.center_block} onChange={e => setUser(e.target.value)}type="text" placeholder="UCID" required />
                    </div>

                    <div className={l.textfield}>
                    <input
                        className={l.center_block}
                        onChange={e => setPass(e.target.value)} 
                        type="password"
                        placeholder="Password"
                        required
                    />
                    </div>

                    <div className={l.loginfield}>
                    <input className={l.center_block} type="submit" value="Login" />
                    </div>

                    <div className={l.forgotpass}>Forgot password?</div>
                    <div className={l.createacc}>
                    Not registered yet? <a href="registration">Create an account </a>
                    </div>
                </form>

                <img src="../images/loginuser.png" className={l.usericon} />
                <img src="../images/loginpassword.png" className={l.passicon} />
                <img src="../images/login.png" className={l.loginicon} />
            </div>
        </React.Fragment>
    ); 
}