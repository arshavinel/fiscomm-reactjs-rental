import React from "react";
import Homepage from "../Pages/Homepage";
import OurApartment from '../Pages/OurApartment';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const AnimatedRoutes = ()=>{
    return(
      
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/OurApartment' element={<OurApartment/>}></Route>
        </Routes>
      </Router>
       
    )
}

export default AnimatedRoutes;