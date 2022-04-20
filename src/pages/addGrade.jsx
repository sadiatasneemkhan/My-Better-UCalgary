import React, { useEffect, useState, useRef } from "react";
import AdminDashboard from '../components/adminDashboard';
import ag from '../styles/addGrade.module.css'
import axios from "axios";

function AddGrade() {
    let ucid;
    let i = new URLSearchParams(window.location.href.split("?")[1]);
    i.forEach((para) => {
        ucid = para;
    });

    const [sUCID, setUCID] = useState("");
    const [courseName, setCourseName] = useState("");
    const [sem, setSem] = useState("");
    const [pgrade, setPGrade] = useState("");
    const [lgrade, setLGrade] = useState("");

    const useDidMountEffect = (fetcher) => {
        const didMount = useRef(false);
    
        useEffect(() => {
          if (didMount.current) fetcher();
          else {
            didMount.current = true;
          }
        }, []);
    };

    async function fetcher() {
        console.log("ran fetcher");
    
        let post = {
            Adminid: ucid,
            Sid: sUCID,
            Course_name: courseName,
            Sem: sem,
            Lgrade: lgrade,
            Pgrade: pgrade,
        };

        var bool = Boolean(
            post.Adminid.length == 8 &&
            post.Sem.length <= 11 &&
            post.Sid.length == 8 &&
            post.Course_name.length == 9 &&
            post.Lgrade.length <= 2 &&
            post.Pgrade.length <= 2 
        );

        const url = `http://localhost:5001/admin/addGrade`;
        if (bool) {
          const { data } = await axios.post(url, null, {
            params: post,
          });
    
          //await axios.post(url,qs.stringify(post));
          if (data !== null) {
            document.location.href = `${window.location.origin}/admin/?ucid=${ucid}`;
            alert(`${courseName} grade has been added for ${sUCID}.`);
          } else {
            alert(`An error has orrcurred while adding grade for: ${sUCID}`);
          }
        } else {
          alert(`There was a error in your inputs.`);
        }
      }
    
      const submission = (evt) => {
        evt.preventDefault();
        fetcher();
      };

    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div className={ag.grade_details}>
            <h1>ADD GRADE</h1>

            <form onSubmit={submission}>
                <div className={ag.labels}>
                <label>Student's UCID</label>
                </div>
                <div className={ag.textfield}>
                <input 
                    className={ag.center_block} 
                    type="text" 
                    onChange={(e) => setUCID(e.target.value)}
                    placeholder="UCID" 
                    required />
                </div>
                <div className={ag.labels}>
                <label>Course Name</label>
                </div>
                <div className={ag.textfield}>
                <input
                    className={ag.center_block}
                    type="text"
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="Ex. CPSC 471"
                    required
                />
                </div>

                <div className={ag.labels}>
                <label>Course Semester</label>
                </div>
                <div className={ag.textfield}>
                <input
                    className={ag.center_block}
                    type="text"
                    onChange={(e) => setSem(e.target.value)}
                    placeholder="Ex. Winter 2022"
                    required
                />
                </div>

                <div className={ag.labels}>
                <label>Percentage Grade (%)</label>
                </div>
                <div className={ag.textfield}>
                <input
                    className={ag.center_block}
                    type="text"
                    onChange={(e) => setPGrade(e.target.value)}
                    placeholder="Ex. 97"
                    required
                />
                </div>

                <div className={ag.labels}>
                <label>Letter Grade</label>
                </div>
                <div className={ag.textfield}>
                <input
                    className={ag.center_block}
                    type="text"
                    onChange={(e) => setLGrade(e.target.value)}
                    placeholder="Ex. A+"
                    required
                />
                </div>

                <div className={ag.button}>
                <input className={ag.center_block} type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default AddGrade;
