import React, { useEffect, useState, useRef } from "react";
import LoginHeader2 from '../components/loginHeader2';
import sr from '../styles/studentRegistration.module.css'
import axios from "axios";
import { useParams } from "react-router-dom";

const qs = require('qs');

export default function StudentRegistration (props) {

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [date, setDate] = useState("");
    const [addr, setAddr] = useState("")
    const [postal, setPostal] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("");
    const [ucid, setUCID] = useState("");
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");
    const [confpass, setConfPass] = useState("")
    const [major, setMajor] = useState("");
    const [deptNameMajor, setDeptMajor] = useState("");
    const [yearOfMajor, setMajorYear] = useState("");
    const [minor, setMinor] = useState("");
    const [deptNameMinor, setDeptMinor] = useState("");
    const [yearOfMinor, setMinorYear] = useState("");
    
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
    date.substring(0, 2) + date.substring(3, 5) + date.substring(6);
  
    let post = {
        First_name: fname,
        Last_name: lname,
        date: formattedDate,
        Address: addr,
        Postalcode: postal,
        City: city,
        Province: province,
        Country: country,
        UCID: ucid,
        Phone_number: phone,
        pass: pass,
        Confirmed_pass: confpass,
        Program: major,
        Dept_name: deptNameMajor,
        Year_of_program: yearOfMajor,
        Minor: minor,
        minor_dept: deptNameMinor,
        Year_of_minor: yearOfMinor
    };

    var bool = Boolean(
        post.First_name.length < 255 && 
        post.Last_name.length < 255 && 
        post.Address.length < 255 &&
        post.Postalcode.length == 6 &&
        post.City.length < 255 &&
        post.Province.length == 2 &&
        post.Country.length < 255 &&
        post.UCID.length == 8 && 
        post.Phone_number.length < 255 &&
        post.pass.length < 255 &&
        post.Confirmed_pass.length < 255 &&
        post.Program.length < 255 &&
        post.Dept_name.length < 255 &&
        post.Year_of_program.length == 1 &&
        post.Minor.length < 255 &&
        post.minor_dept.length < 255 &&
        post.Year_of_minor.length == 1 &&

        // date has NO / --> ex. 01/01/2001 is 01012001
        post.date.length == 8
    ); 

        const url = `http://localhost:5001/student//createStudent`;
        if(bool){
        const {data} = await axios.post(url, null, 
        {
            params: post
        });
        
        if(data !== null && (post.pass === post.Confirmed_pass)){
            document.location.href = `${window.location.origin}/student/?ucid=${ucid}`;
            alert(`${ucid}: Student account has been successfully created.`)
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
            <div className={sr.regbox}>
            <h1>REGISTRATION</h1>

            <form onSubmit={submission}>
                <div className={sr.labels}>
                    <label>Full Name</label>
                </div>
                <div className={sr.textfield}>
                    <input 
                        className={sr.center_block} 
                        type="text" 
                        onChange={(e) => setFName(e.target.value)}
                        placeholder="First Name" 
                        required />
                    <input 
                        className={sr.center_block} 
                        type="text" 
                        onChange={(e) => setLName(e.target.value)}
                        placeholder="Last Name" 
                        required />
                </div>

                <div className={sr.labels}>
                    <label>Date of Birth</label>
                </div>
                <div className={sr.textfield}>
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="DD/MM/YYYY" 
                    required />
                </div>

                <div className={sr.labels}>
                    <label>Home Address</label>
                </div>
                <div className={sr.textfield}>
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setAddr(e.target.value)}
                    placeholder="Address" 
                    required />
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setPostal(e.target.value)}
                    placeholder="Postal Code" 
                    required />
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City" 
                    required />
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setProvince(e.target.value)}
                    placeholder="Province/State Ex. AB" 
                    required />
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country" 
                    required />
                </div>

                <div className={sr.labels}>
                    <label>Account Info</label>
                </div>
                <div className={sr.textfield}>
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setUCID(e.target.value)}
                    placeholder="UCID" 
                    required />
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number" 
                    required />
                <input 
                    className={sr.center_block} 
                    type="password" 
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Password" 
                    required />
                <input 
                    className={sr.center_block} 
                    type="password" 
                    onChange={(e) => setConfPass(e.target.value)}
                    placeholder="Confirm Password" 
                    required />
                </div>

                <div className={sr.labels}>
                    <label>Degree Info</label>
                </div>
                <div className={sr.textfield}>
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setMajor(e.target.value)}
                    placeholder="Program - Major" 
                    required />
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setDeptMajor(e.target.value)}
                    placeholder="Department" 
                    required />
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setMajorYear(e.target.value)}
                    placeholder="Year of Program" 
                    required />
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setMinor(e.target.value)}
                    placeholder="Program - Minor (if applicable)" />
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setDeptMinor(e.target.value)}
                    placeholder="Department"  />
                <input 
                    className={sr.center_block} 
                    type="text" 
                    onChange={(e) => setMinorYear(e.target.value)}
                    placeholder="Year of Program" />
                </div>

                <div className={sr.button}>
                    <input 
                        className={sr.center_block} type="submit" value="Register" />
                </div>
                
            </form>
            </div>
        </React.Fragment>
    );
}
 