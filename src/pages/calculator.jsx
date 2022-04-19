import React from "react";
import StudentDashboard from '../components/studentDashboard';
import c from '../styles/calculator.module.css'

function Calculator() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div className={c.course_details}>
            <div className={c.lists}>
                <h1>FINAL GRADE CALCULATOR</h1>

                <div className={`${c.textfield} ${c.component}`}>
                    <input 
                        className={c.center_block} 
                        type="text" 
                        placeholder="Ex. Assignment 1 Grade" 
                        required />  
                    <input 
                        className={c.center_block} 
                        type="text" 
                        placeholder="Weight (%)" 
                        required /> 
                </div>


                <div className={`${c.textfield} ${c.component}`}>
                    <input 
                        className={c.center_block} 
                        type="text" 
                        placeholder="Ex. Midterm Grade" 
                        required />  
                    <input 
                        className={c.center_block} 
                        type="text" 
                        placeholder="Weight (%)" 
                        required /> 
                </div>

                <div className={c.textfield}>
                <input 
                    className={c.center_block} 
                    type="text" 
                    placeholder="Final Exam Weight" 
                    required />
                                
                <input 
                    className={c.center_block} 
                    type="text" 
                    placeholder="Grade Wanted" 
                    required />
                </div>

                <div className={c.button}>
                        <input className={c.center_block} type="submit" value="Add Component" />
                        <input className={c.center_block} type="submit" value="Calculate" />
                </div>

            </div>
            </div>
        </React.Fragment>
    );
}

export default Calculator;
