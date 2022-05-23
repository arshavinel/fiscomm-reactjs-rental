import React from 'react';
import './AppStyle.css';
import ChatButton from './Components/ChatButton';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';

function App() {
  return (

   
    <div className='App'>
       
      <div className="page-container">

        <ChatButton/>
        <Footer/>
      </div>
      
    </div>
  ); 
}

export default App;
