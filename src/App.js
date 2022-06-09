import React from 'react';
import Homepage from './Pages/Homepage';
import RioPage from './Pages/Riopage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.scss';
import OurApartment from './Pages/OurApartment';

function App() {
  return (

    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/OurApartment" element={<OurApartment/>} />
      <Route path="Rio" element={<RioPage />} />
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
