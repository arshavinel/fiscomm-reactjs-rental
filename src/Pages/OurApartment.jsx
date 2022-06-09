import React from "react";
import Footer from "../Components/Footer";
import './OurApartment.scss';
import ChatButton from "../Components/ChatButton";
import ApartmentMain from "../Components/ApartmentMain";
import ApartmentHero from "../Components/ApartmentHero";
import { motion } from "framer-motion";

const OurApartment = ()=>{
    return (
        
        <motion.div className="apartment_page"
        initial={{x:"100%"}}
        animate = {{x:0}}
        transition = {{duration:0.5}}>
            <ApartmentHero />
            <ApartmentMain/>
            <Footer/>
            <ChatButton/>
        </motion.div>
        
  )
}

export default OurApartment;