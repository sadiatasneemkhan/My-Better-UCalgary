import React, {Component} from 'react';

//import Homepage from './pages/homepage';
//import Login from './pages/login';
//import Registration from './pages/registration';
//import StudentRegistration from './pages/studentRegistration';
//import AdminRegistration from './pages/adminRegistration';
//import AdminDashboard from './components/adminDashboard';
import StudentDashboard from './components/studentDashboard';

export default function App (){

  return (
    <React.Fragment> 
      <StudentDashboard/>
    </React.Fragment>
  );
}
 