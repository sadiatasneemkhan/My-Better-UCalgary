import React, {Component} from 'react';
import './App.css';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Registration from './pages/registration';
import StudentRegistration from './pages/studentRegistration';


class App extends Component {
  render() { 
    return (
      <React.Fragment> 
        <Registration/>
        
      </React.Fragment>
    );
  }
}
 
export default App;