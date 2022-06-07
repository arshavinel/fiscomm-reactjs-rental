import React from 'react';
import Homepage from './Pages/Homepage';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from './Components/Contact';


function App() {
  return (

    <div className='App'>

    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/contact" element={<Contact /> }/>
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
