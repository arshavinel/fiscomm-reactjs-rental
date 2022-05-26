import Hero from "../Components/Hero";
import './Homepage.css';
import React from "react";
import Footer from "../Components/Footer";
import ChatButton from "../Components/ChatButton"


export default function Homepage() {
  
  return (
    <div className="hero-parent">  
      <Hero />
      <ChatButton/>
      <Footer/>
    </div>

  )
}