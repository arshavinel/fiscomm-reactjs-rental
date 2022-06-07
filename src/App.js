import React from 'react';
import Homepage from './Pages/Homepage';
import RioPage from './Pages/Riopage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from './Components/Contact';


function App() {
  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* ourApartment and contact routes will go here */}
          <Route path="Rio" element={<RioPage />} />
          <Route path="Contact" element={<Contact />} />
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
