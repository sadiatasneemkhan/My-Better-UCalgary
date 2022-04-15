import React from "react";
import StudentDashboard from '../components/studentDashboard';
import '../styles/calculator.css'

function Calculator() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div class="course-details">
            <div class="lists">
                <h1>FINAL GRADE CALCULATOR</h1>
                <div class="buttons">
                <span onclick="newElement()" class="btn btn-outline-warning">Calculate</span>
                <span onclick="newElement()" class="btn btn-outline-warning">Add</span>
                </div>

                <ol id="myUL">
                    <li >
                        Work <input placeholder="Ex. Asmt 1" class="work"/> Weight <input type="number"/>
                    </li>
                    <li >
                        Work <input placeholder="Ex. Asmt 2" class="work"/> Weight <input type="number"/>
                    </li>
                    <li>
                        Final Weight <input type="number"/> Grade Wanted <input type="number"/>
                    </li>
                </ol>
            </div>
            </div>
        </React.Fragment>
    );
}

export default Calculator;
