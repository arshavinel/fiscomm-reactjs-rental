import React from 'react';
import './App.scss';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import OurApartment from './Pages/OurApartment';
import RioPage from './Pages/Riopage';
import Contact from './Pages/Contact';

function App() {
  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/OurApartment" element={<OurApartment/>} />
          <Route path="Rio" element={<RioPage />} />
          <Route path="Contact" element={<Contact />} />
         </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
