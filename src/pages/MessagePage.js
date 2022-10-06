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
                        <Card sx={{ maxWidth: 500, bgcolor: "beige" }}>
                        <CardContent to={`/chat/${message.chatId}`} key={message.chatId} sx={{ mb: 5}} >
                                <Avatar sx={{ mb: 2, height: 50, width: 50}}/>
                                <Typography variant="h5" component="div" color="primary.main">
                                {message.text}
                            </Typography>
                        </CardContent>
                    </Card>
                    )
                })}

            <Input value={text} onChange={(e) => setText(e.target.value)}/>
            
            <button onClick={() => (dispatch({type: 'deleteMessages', id: message.id}))}>
                Удалить сообщение
            </button>
        </div>
    );
};


export default  MessagePage;