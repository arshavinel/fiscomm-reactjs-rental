import React from 'react';
import Homepage from './Pages/Homepage';
import RioPage from './Pages/Riopage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.scss';


function App() {
  return (

    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      {/* ourApartment and contact routes will go here */}
      <Route path="Rio" element={<RioPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
