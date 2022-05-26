import React from "react";
import './ChatButton.scss';
import { useState } from "react";
import ChatModal from "./ChatModal";


const ChatButton = ()=>{

    const [openModal, setOpenModal] = useState(false)

    return(
        <>
        <div className="chat-button" onClick={()=>{setOpenModal(true)  }}>
            
            <div className="cardImage user-logo">
               <img className="" src={require('../img/user-logo.png')} alt='booking' />
            </div>
            <h5 className="button-chat-text">Let's chat!</h5>  
          
        </div>

        {openModal && <ChatModal closeModal={setOpenModal}/>} 
        </>
        
    )
}

export default ChatButton;