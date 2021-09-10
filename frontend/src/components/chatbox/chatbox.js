import React, { useState, useEffect} from 'react';
import "./chatbox.css";
import chatIcon from "../../images/chat-icon.png";
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
import { io } from "socket.io-client";

const Chatbox = ({ toggleChatBoxDisplay })=>{
const socket = io("http://localhost:4000/", { transports: ['websocket'] });

const [inputValue,setInputValue]=useState('');

    const handleSendMessage =()=>{
        if (inputValue==="") return ;
        console.log("sending message ");
        socket.emit('chat message', inputValue);
        setInputValue("");
    }
    useEffect(()=>{
        socket.on('chat message', function (msg) {
            console.log(msg)
        });
    },[])
    return(
        <div className='chat'>
            <div className='chat__top'>
                <div className='chat-icon'>
                    <img src={chatIcon}/>
                </div>
  
                <div>
                    <h1>Chat Bot </h1>
                </div>
                <div className='close-btn' onClick={toggleChatBoxDisplay}>
                    <CloseIcon/>
                </div>
            </div>
            <div className='chat__conversation'>
                    <div className='user'>
                      <div className='tpl-text-response'>
                         hi how are you doing
                      </div>
                    </div> 
            </div>
            <div className='typing'>
                <input className='chatBox-input' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type='text' placeholder='Please type in message'/>
              <div className='send-icon' onClick={handleSendMessage}>
                    <SendIcon/>
              </div>
            </div>
            <div className='chat-bottom'>
               .
            </div>
        </div>
    )
}

export default Chatbox; 