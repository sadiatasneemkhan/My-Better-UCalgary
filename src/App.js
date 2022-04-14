import React, {Component} from 'react';
import Homepage from './pages/homepage';
import './App.css';
import Login from './pages/login';


class App extends Component {
  render() { 
    return (
      <React.Fragment> 
        <Login/>
        
      </React.Fragment>
    );
  }
}
 
export default App;