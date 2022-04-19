import React, { useEffect, useState, useRef } from "react";
import LoginHeader2 from '../components/loginHeader2';
import ar from '../styles/adminRegistration.module.css'
import axios from "axios";
import {  useParams } from "react-router-dom";

const qs = require('qs');

export default function AdminRegistration (props) {

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [ucid, setUCID] = useState("");
    const [password, setPass] = useState("")
    const [confPassword, setConfPass] = useState("");
    const [deptName, setDeptName] = useState("");
    const [deptHead, setDeptHead] = useState("");
    const [dateJoined, setDate] = useState("");
    
    const useDidMountEffect = (fetcher) => {

        const didMount = useRef(false);

        useEffect(() => {
            if(didMount.current)
        fetcher();
        else{
            didMount.current = true;
        }
        }, []);
    };

    async function fetcher(){
    console.log("ran fetcher")

    //formatting of date to remove / from input
    let formattedDate =
    dateJoined.substring(0, 2) + dateJoined.substring(3, 5) + dateJoined.substring(6);
  
    let post = {
        First_name: fname,
        Last_name: lname,
        UCID: ucid,
        pass: password,
        Confirmed_pass: confPassword,
        Dept_name: deptName,
        Dept_head: deptHead,
        date: formattedDate
    };

    var bool = Boolean(
        post.First_name.length < 255 && 
        post.Last_name.length < 255 && 
        post.UCID.length == 8 && 
        post.pass.length < 255 && 
        post.Confirmed_pass.length < 255 && 
        post.Dept_name.length < 255 && 
        post.Dept_head.length < 255 &&

        // date has NO / --> ex. 01/01/2001 is 01012001
        post.date.length == 8
    ); 

        const url = `http://localhost:5001/admin/createadmin`;
        if(bool){
        const {data} = await axios.post(url, null, 
        {
            params: post
        });
        
        if(data !== null && (post.pass === post.Confirmed_pass)){
            document.location.href = `${window.location.origin}/admin/?ucid=${ucid}`;
            alert(`${ucid}: Admin account has been successfully created.`)
        }else{
            alert(`An error has orrcurred while creating the account for: ${ucid}`);
        }
    }else{
        alert(`There was an error in your inputs.`);
    }
    }

    const submission = (evt) => {
        evt.preventDefault();
        fetcher();
    }

    return (
        <React.Fragment> 
            <LoginHeader2/>
            <div className={ar.regbox}>
                <h1>REGISTRATION</h1>

                <form onSubmit={submission}>
                    <div className={ar.labels}>
                        <label>Full Name</label>
                    </div>
                    <div className={ar.textfield}>
                        <input 
                            className={ar.center_block} 
                            type="text" 
                            onChange={(e) => setFName(e.target.value)}
                            placeholder="First Name" 
                            required />
                        <input 
                            className={ar.center_block} 
                            type="text" 
                            onChange={(e) => setLName(e.target.value)}
                            placeholder="Last Name" 
                            required />
                    </div>

                    <div className={ar.labels}>
                        <label>Date Joined</label>
                    </div>
                    <div className={ar.textfield}>
                        <input 
                            className={ar.center_block} 
                            type="text" 
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="DD/MM/YYYY" 
                            required />
                    </div>

                    <div className={ar.labels}>
                        <label>Account Info</label>
                    </div>
                    <div className={ar.textfield}>
                        <input 
                            className={ar.center_block} 
                            type="text" 
                            onChange={(e) => setUCID(e.target.value)}
                            placeholder="UCID" 
                            required />
                        <input 
                            className={ar.center_block} 
                            type="text" 
                            onChange={(e) => setDeptName(e.target.value)}
                            placeholder="Department Name" 
                            required />
                        <input 
                            className={ar.center_block} 
                            type="text" 
                            onChange={(e) => setDeptHead(e.target.value)}
                            placeholder="Dept Head's Name" 
                            required />
                        <input 
                            className={ar.center_block} 
                            type="password" 
                            onChange={(e) => setPass(e.target.value)}
                            placeholder="Password" 
                            required />
                        <input 
                            className={ar.center_block} 
                            type="password" 
                            onChange={(e) => setConfPass(e.target.value)}
                            placeholder="Confirm Password" 
                            required />
                    </div>

                    <div className={ar.button}>
                        <input 
                            className={ar.center_block} 
                            type="submit" 
                            value="Register" />
                    </div>
                    
                </form>
            </div>
        </React.Fragment>
    );    
}
 