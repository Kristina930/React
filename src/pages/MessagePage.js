import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const MessagePage = ()  => {
    const [message] = useState([
        {
            id: 1,
            text: "Привет",
            chatId: 2

        },
        {
            id: 2,
            text: "Привет! Как дела?",
            chatId: 3
        },
        {
            id: 3,
            text: "Все привет в этом чате!",
            chatId: 1
        },
        {
            id: 4,
            text: "Дела отилчно, а у тебя?",
            chatId: 2
        },
        {
            id: 5,
            text: "Ребят, как настроить хуки?",
            chatId: 1
        }
    ])
    const { id } = useParams();
    //Написать функцию по выводу сообщений

    const messages = message.filter ((message) => {
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
        </div>
    );
};


export default  MessagePage;