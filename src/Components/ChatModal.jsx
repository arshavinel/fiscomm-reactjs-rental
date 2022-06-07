import React from "react";
import "./ChatModal.scss";
import {useState} from 'react'

function ChatModal({ closeModal }){

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);


    const handleSendMessage = () => {
        if(message){
            setMessages([...messages,message]);
            setMessage('');
        }
    }

    console.log("Messages", messages);


    return(

            <div className="chatModalContainer">
                <div className="chat-header-text">
                    <h5>rio-apartment-rental</h5>
                    <p style={{marginLeft:'10px'}}>We’ll reply as soon as we can</p>
                </div>
                <button className="button-close" onClick={()=>{closeModal(false)}}>X</button>
                <div id="chat-content" name="chat-content">
                    {messages.map(message =>
                    <li key={message.length}>{message}</li>
                    )}
                </div>
                <div className="buttonIn">
                    <input type="text"
                    value={message}
                    id="text-area"
                    placeholder="Type a message..."
                    onChange={e => setMessage(e.target.value)} />
                    <button
                    className="sendMessage"
                    onClick={handleSendMessage}>Send</button>
                </div>
            </div>

    )
}

export default ChatModal;
