
import Hero from "../Components/Hero";
import './Homepage.scss';
import React from "react";
import Footer from "../Components/Footer";
import ChatButton from "../Components/ChatButton"
import Main from "../Components/Main";

export default function Homepage() {

  return (
    <div className="hero-parent">
      <Hero />
      <ChatButton/>
      <Main />
      <Footer/>
    </div>
  )
}
