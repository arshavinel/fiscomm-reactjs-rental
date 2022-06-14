import React from "react";
import Footer from "../Components/Footer";
import './OurApartment.scss';
import ChatButton from "../Components/ChatButton";
import ApartmentMain from "../Components/ApartmentMain";
import ApartmentHero from "../Components/ApartmentHero";

const OurApartment = ()=>{
    return (
        
        <div className="apartment_page">
            <ApartmentHero />
            <ApartmentMain/>
            <Footer/>
            <ChatButton/>
        </div>
        
  )
}

export default OurApartment;