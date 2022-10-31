import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Input, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";

const MessagePage = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const { id } = useParams();
    const messages = useSelector(state => state.messages.messages);

    const message = messages.filter ((message) => {
        if(!id) return true

        return message.chatId === Number(id)
    })
    

    return (
        <div>
                {messages.map((message) => {
                    return(
                        <Card  class="link_item_message">
                        <CardContent to={`/chat/${message.chatId}`} key={message.chatId}  class="messages_card">
                                <Avatar sx={{ mb: 2, height: 50, width: 50, marginTop: 4, marginLeft: 3}}/>
                                <Typography variant="h5" component="div" color="primary.main" sx={{marginLeft: 12, marginTop: -7}}>
                                {message.text}
                            </Typography>
                        </CardContent>
                    </Card>
                    )
                })}

            <Input value={text} onChange={(e) => setText(e.target.value)} sx={{ marginLeft: 5, mt: 5, width: 260, }}/>
            
            <button onClick={() => (dispatch({type: 'deleteMessages', id: message.id}))} class="messages_btn">
                Удалить сообщение
            </button>
        </div>
    );
};


export default  MessagePage;