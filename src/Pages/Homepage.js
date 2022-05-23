import Header from "../Components/Header";
import Main from "../Components/Main";
import Hero from "../Components/Hero";
import './Homepage.css';
import React from "react";
import Footer from "../Components/Footer";


export default function Homepage() {
  return (
    <div className="hero-parent">
      <Hero />
      <Footer/>
    </div>
  )
}