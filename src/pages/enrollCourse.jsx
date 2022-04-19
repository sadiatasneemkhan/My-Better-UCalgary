import React, {useState, useEffect, useRef} from "react";
import StudentDashboard from '../components/studentDashboard';
import erc from '../styles/enrollCourse.module.css'
import axios from "axios";
function EnrollCourse() {

    const [name, setName] = useState("");
  const [sem, setSem] = useState("");
    const [UCID, setUCID] = useState("30098787")
    
  async function fetcher() {
    const url = `http://localhost:5001/schedule/enroll`;
    var post = {
        Course_name: name,
        Semester: sem,
        Sucid: UCID
    }
    
    console.log(url);
    const { data } = await axios.post(url, null, {
        params: post,
      });
        if(data.UCID === UCID){
            document.location.href = `${window.location.origin}/student?UCID=${UCID}`;
        }else{
            alert('Error Occurred when enrolling into course: ' + post.Course_name)
        }
  }

  const submission = (evt) => {
    evt.preventDefault();
    fetcher();
  };

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
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div className={erc.course_details}>
            <h1>ENROLL INTO COURSE</h1>

            <form onSubmit={submission}>
                <div className={erc.labels}>
                <label>Choose the course you wish to enroll into:</label>
                </div>
                <div className={erc.textfield}>
                <input
                    className={erc.center_block}
                    type="text"
                    placeholder="Ex. CPSC 471"
                    onChange={(e) =>{setName(e.target.value)}}
                    required
                />
                </div>
                <div className={erc.textfield}>
                <input
                    className={erc.center_block}
                    type="text"
                    placeholder="Ex. Fall 2022"
                    onChange={(e) =>{setSem(e.target.value)}}
                    required
                />
                </div>
                <div className={erc.button}>
                <input className={erc.center_block} type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default EnrollCourse;
