import React from 'react';
import "./chatbubble.css";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
const ChatBubble = ({ toggleChatBoxDisplay})=>{

    return(
        <div className='chat-bubble' onClick={toggleChatBoxDisplay}>
            <ChatBubbleIcon/>
            <p>Chat</p>
        </div>
    )
}

export default ChatBubble ;