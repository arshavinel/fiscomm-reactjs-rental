import React from 'react';
import Header from './Header';
import './ApartmentHero.scss';

export default function Hero() {
    return (
  
      <div className = 'apartment_hero'>
        <Header/>
        
        <div className="main_header">
                <h1>Our Apartment</h1>
                <img src={require('../img/wave.jpg')} alt='wave' />
        </div>
      </div>

    )
  }