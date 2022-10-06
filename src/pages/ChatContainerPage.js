import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { Button, Input } from '@mui/material';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const ChatPage = () => {
    const chats = useSelector(state => state.chats.chats);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    
    const handleDelete = (id) => {
        dispatch({type: 'deleteChat', id: id})
    }

    return (
        
        <ListItem disablePadding sx={{ display: 'block', mb: 3,  width: 500}}>
            <div>
                <Input value={name} onChange={(e) => setName(e.target.value)} sx={{ marginLeft: 2, mt: 5}}/>
                    <Button onClick={()=>dispatch({type: 'addChat'})}>Добавить чат</Button>
                {chats.map((chat) => {
                    return(
                        <ListItemButton key={chat.id} sx={{ height: 150, bgcolor: "beige"}} onClick={() => handleDelete(chat.id)}>
                            <ListItemAvatar  sx={{ marginLeft: 2, mt: 5}}>
                                <Link to={`/message/${chat.id}`} key={chat.id}>
                                    {chat.name}
                                    <Avatar sx={{ mb: 5, height: 50, width: 50, mt: 2}}/>
                                </Link>  
                            </ListItemAvatar>
                        <ListItemText />
                        Х
                    </ListItemButton>
                    )
                })}
            </div>
            </ListItem>

    );
};

export default ChatPage;