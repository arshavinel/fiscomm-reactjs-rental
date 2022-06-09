import React from 'react'
import './Riopage.scss'
 import RioHero from '../Components/RioHero';
import ChatButton from '../Components/ChatButton';
 import Footer from '../Components/Footer';
import RioMain from '../Components/RioMain';
import { motion } from "framer-motion";

export default function RioPage() {


    return (

      <motion.div className='rio-page'
      initial={{x:"100%"}}
      animate = {{x:0}}
      transition = {{duration:0.5}}>
        <RioHero />
        <ChatButton/>
        <RioMain />
        <Footer />
        </motion.div>
    );
}