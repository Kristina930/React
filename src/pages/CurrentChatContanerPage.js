import React, { useState } from 'react';
import { useParams} from "react-router-dom";
import MessagePage from "./MessagePage";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getChat } from "../store/chats/selectors";
import { getMessages } from '../../store/messages/selectors';



function CurrentChatPage() {
    const [message, setMessage] = useState('');
    const {chatId} = useParams();
    const dispatch = useDispatch();
    const chats = useSelector(getChat(chatId), shallowEqual);
    const messages = useSelector(getMessages(chatId), shallowEqual);
 

    const messageUpdate = (e) => {
        e.preventDefault();
        dispatch({type: 'addMessages', message: message,  chatId: chatId })
        setMessage('');
    }
    

    return (
        <div className="chat_box">
                <Box component="form" onSubmit={messageUpdate}>
                    <div>
                    <MessagePage messages={(messages)}/>
                    </div>
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
            <MessagePage messages={chats[chatId].messages}/>
        </div>
    );
}

export default CurrentChatPage;