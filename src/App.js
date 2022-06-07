import React from 'react';
import './App.scss';
import AnimatedRoutes from './Components/AnimatedRoutes';
import {BrowserRouter as Router} from "react-router-dom";
function App() {

  return (

    <div className='App'>
      <Router>
        <AnimatedRoutes/>
      </Router>
    </div>

  );
}

export default App;
