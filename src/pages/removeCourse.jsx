import React, { useEffect, useState, useRef } from "react";
import AdminDashboard from '../components/adminDashboard';
import rc from '../styles/removeCourse.module.css'
import axios from "axios";

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


function RemoveCourse() {
    let UCID;
    let i = new URLSearchParams(window.location.href.split("?")[1]);
    i.forEach((para) => {
      UCID = para;
    });
      async function fetcher() {

        var del = {
            name: name,
            semester: sem,
            Id: UCID
        };

        const url = `http://localhost:5001/course/deleteCourse`;
        const {data} = await axios.delete(url,{headers: { 'Content-Type': 'application/json'},data: del});   
        console.log(data); 
         
        //document.location.href = `${window.location.origin}/admin/?ucid=${del.Id}`;
        alert(`Course: ${del.name} has been Deleted.`);
        }
      
    
      const submission = (evt) => {
        evt.preventDefault();
        fetcher();
      };
    
      
    const [name, setName] = useState("");
    const [sem, setSem] = useState("");




    return (  
        <React.Fragment>
            <AdminDashboard />

            <div className={rc.course_details}>
            <h1>REMOVE COURSE</h1>

            <form onSubmit={submission}>
                <div className={rc.labels}>
                <label>Choose the course you wish to remove:</label>
                </div>
                <div className={rc.textfield}>
                    
                <input
                    className={rc.center_block}
                    type="text"
                    placeholder="Ex. CPSC 471"
                    onChange={(e) =>{setName(e.target.value);}}
                    required
                />
                </div>
                <div className={rc.textfield}>
                    
                <input
                    className={rc.center_block}
                    type="text"
                    placeholder="Ex. Fall 2021"
                    onChange={(e) =>{setSem(e.target.value);}}
                    required
                />
                </div>
                
                <div className={rc.button}>
                <input className={rc.center_block} type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default RemoveCourse;
