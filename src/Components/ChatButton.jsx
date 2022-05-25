import React from "react";
import './ChatButton.scss';

const ChatButton = ()=>{
    return(
        <div className="chat-button">
            <div className="cardImage user-logo">
               <img className="" src={require('../img/user-logo.png')} alt='booking' />
            </div>
            <h5 className="button-chat-text">Let's chat!</h5>  
        </div>
    )
}

export default ChatButton;