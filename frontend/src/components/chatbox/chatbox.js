import React from 'react';
import chatIcon from "../../images/chat-icon.png";
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
const Chatbox =()=>{
    return(
        <div className='chat'>
            <div className='chat__top'>
                <div className='chat-icon'>
                    <img src={chatIcon}/>
                </div>
  
                <div>
                    <h1>Chat Bot </h1>
                </div>
                <div>
                    <CloseIcon/>
                </div>
            </div>
            <div className='chat__conversation'>
                     
            </div>
            <div className='typing'>
              <input type='text' placeholder='Please type in message'/>
              <div className='send-icon'>
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