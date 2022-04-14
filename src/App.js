import React, {Component} from 'react';
import LoginHeader from './components/loginHeader';
import Homepage from './pages/homepage';
import './App.css';


class App extends Component {
  render() { 
    return (
      <React.Fragment> 
        <Homepage/>
        
      </React.Fragment>
    );
  }
}
 
export default App;