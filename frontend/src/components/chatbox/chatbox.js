import React, { useState, useEffect} from 'react';
import "./chatbox.css";
import chatIcon from "../../images/chat-icon.png";
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
// import { io } from "socket.io-client";

const Chatbox = ({ toggleChatBoxDisplay, username, messages, loggedInUser})=>{
// const socket = io("http://localhost:4000/", { transports: ['websocket'] });

const [inputValue,setInputValue]=useState('');

const [userMessage,SetUserMessage]=useState("");
    var message={};

    const handleSendMessage =()=>{
        if (inputValue==="") return ;
 
        fetchUserMessages();

        console.log(message)
        // console.log("sending message ");
        // socket.emit('chat message', inputValue);
        // setInputValue("");
    }

   

    const fetchUserMessages = () => {
        message = {
            creator__id: loggedInUser,
            message__body: inputValue,
            recipient__id: username
        }
        fetch('http://localhost:4000/api/messages', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })

   }




    // useEffect(()=>{
    //     socket.on('chat message', function (msg) {
    //         console.log(msg)
    //     });
    // },[])
    return(
        <div className='chat'>
            <div className='chat__top'>
                <div className='chat-icon'>
                    <img src={chatIcon}/>
                </div>
  
                <div>
                    <p>{username === "" ? "please select user" : username} </p>
                </div>
                <div className='close-btn' onClick={toggleChatBoxDisplay}>
                    <CloseIcon/>
                </div>
            </div>
            <div className='chat__conversation'>
                    <div className='user'>
                    {messages.map((message)=>{
                       return(
                           <div className={`${message.creator__id !== loggedInUser ? 'left' : "right"}`}>
                               <div className={`${message.creator__id !== loggedInUser ? 'sender' : "tpl-text-response"}`}>
                                   <p>{message.message__body}</p>
                               </div>
                           
                          </div>
         
                       )
                    })}

                    </div> 
            </div>
            <div className='typing'>
                <input className='chatBox-input' value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} type='text' placeholder='Please type in message'/>
              <div className='send-icon' onClick={handleSendMessage}>
                    <SendIcon/>
              </div>
            </div>
            <div className='chat-bottom'>
             
            </div>
        </div>
    )
}

export default Chatbox; 