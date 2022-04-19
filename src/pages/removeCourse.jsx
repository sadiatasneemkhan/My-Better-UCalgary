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

  function isEmpty(obj) {
    for(var prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }

function RemoveCourse() {
   
      async function fetcher() {

        var del = {
            name: name,
            semester: sem,
            Id: '12345678'
        };

        const url = `http://localhost:5001/course/deleteCourse`;
        await axios.delete(url,{headers: { 'Content-Type': 'application/json'},data: del});   
            document.location.href = `${window.location.origin}/admin/?ucid=${del.Id}`;
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
