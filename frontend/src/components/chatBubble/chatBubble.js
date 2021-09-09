import React,{useState} from 'react';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
const ChatBubble =()=>{
    const [isChatBoxDisplayed, toggleChatBoxDisplay]=useState(false);
    return(
        <div>
            <ChatBubbleIcon/>
        </div>
    )
}

export default ChatBubble ;