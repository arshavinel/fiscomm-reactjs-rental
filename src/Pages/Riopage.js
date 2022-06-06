import React from 'react'
import './Riopage.scss'
 import RioHero from '../Components/RioHero';
import ChatButton from '../Components/ChatButton';
 import Footer from '../Components/Footer';
import RioMain from '../Components/RioMain';

export default function RioPage() {


    return (

      <div className='rio-page'>
      <RioHero />
      <ChatButton/>
      <RioMain />
      <Footer />
      </div>
    );
}