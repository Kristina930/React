import React, {useState} from 'react';
import {useOutletContext, useParams} from "react-router-dom";
import MessagePage from "./MessagePage";
import {Box, Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";



function CurrentChatPage() {
    const [message, setMessage] = useState('');
    const {chatId} = useParams();
    const [chat] = useOutletContext();
    const messageUpdate = (e) => {
        e.preventDefault();
        chat[chatId].message.push({text: message, author: 'text', id: chat[chatId].message.length + 1 })
        setMessage('');
    }
    

    return (
        <div class="chat_box">
                <Box component="form" onSubmit={messageUpdate}>
                        <TextField
                            id="outlined-multiline"
                            label="Message"
                            value={message}
                            autoFocus
                            onInput={(event) => setMessage(event.target.value)}
                        />
                        <Button variant="contained"  type={"submit"}
                            endIcon={<SendIcon/>}>send</Button>
                        </Box>
            <MessagePage message={chat[chatId].message}/>
        </div>
    );
}

export default CurrentChatPage;