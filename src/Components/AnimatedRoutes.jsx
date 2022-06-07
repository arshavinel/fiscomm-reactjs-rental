import React from "react";
import Homepage from "../Pages/Homepage";
import OurApartment from '../Pages/OurApartment';
import RioPage from "../Pages/Riopage";

import {Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

const AnimatedRoutes = ()=>{

    const location = useLocation();

    return(
    
        <AnimatePresence>
          <Routes location = {location} key = {location.pathname}>
            <Route path="/" element={<Homepage />} />
            <Route path="/OurApartment" element={<OurApartment/>} />
            <Route path="Rio" element={<RioPage />} />
          </Routes>
        </AnimatePresence>
  
    )
}

export default AnimatedRoutes;