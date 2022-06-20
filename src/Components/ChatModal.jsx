import React from "react";
import "./ChatModal.scss";
import {useState, useRef} from 'react'
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function ChatModal({ closeModal }){

    const messagesEndRef = useRef(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [displayIcon, setDisplayIcon] = useState(false);


    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behaviour: "smooth"})
    }

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = () => {
        if(message){
            setMessages([...messages,message]);
            setMessage('');
           setDisplayIcon(false);
        }
    }

    const onPressEnter = e => {
        e.preventDefault();
         handleSendMessage();
    }

    const onTypingText = (e) => {
        setMessage(e.target.value);
        if(e.target.value !== ''){
            setDisplayIcon(true);
        }else{
            setDisplayIcon(false);
        }
    }

    // console.log("Messages", messages);


    return(
            <div className="chatModalContainer">
                <div className="chat-header-text">
                    <h5>rio-apartment-rental</h5>
                    <p style={{marginLeft:'10px'}}>We’ll reply as soon as we can</p>
                </div>
                <button className="button-close" onClick={()=>{closeModal(false)}}>X</button>
                <div id="chat-content" name="chat-content">
                    {messages.map(message =>
                    <div className="textMessage" key={uuidv4()}>
                    <p>{message}</p>
                    </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <form id="form" onSubmit={onPressEnter}>
                    <input type="text"
                    value={message}
                    id="text-area"
                    autoComplete="off"
                    placeholder="Type a message..."
                    onChange={onTypingText} />
                   {displayIcon && <img src={require('../img/send-icon.png')}
                    alt="send-icon"
                    className="sendMessage"
                    onClick={handleSendMessage}
                    />}
                </form>
                </div>
    )
}

export default ChatModal;
