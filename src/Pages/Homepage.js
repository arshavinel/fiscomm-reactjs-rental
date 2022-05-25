
import Hero from "../Components/Hero";
import './Homepage.css';
import React from "react";
import Footer from "../Components/Footer";
import Main from "../Components/Main";


export default function Homepage() {
  return (
    <div className="hero-parent">
      <Hero />
      <Main />
      <Footer/>
    </div>
  )
}