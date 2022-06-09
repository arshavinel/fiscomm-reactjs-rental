
import Hero from "../Components/Hero";
import './Homepage.scss';
import React from "react";
import Footer from "../Components/Footer";
import ChatButton from "../Components/ChatButton"
import Main from "../Components/Main";
import { motion } from "framer-motion";


export default function Homepage() {

  return (
    
    <motion.div className="hero-parent"
    initial={{x:"100%"}}
    animate = {{x:0}}
    transition = {{duration:0.5}}>
        <Hero />
        <ChatButton/>
        <Main />
        <Footer/>
    </motion.div>

  )
}
