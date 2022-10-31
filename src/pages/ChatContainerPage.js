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
            <div class="chat_btm_list">
                <Input value={name} onChange={(e) => setName(e.target.value)} sx={{ marginLeft: 2, mt: 5, width: 260, }} />
                    <Button onClick={()=>dispatch({type: 'addChat'})} class="chat_btm">Добавить чат</Button>
                {chats.map((chat) => {
                    return(
                        <ListItemButton key={chat.id}  onClick={() => handleDelete(chat.id)} class="list_item">
                            <ListItemAvatar  sx={{ marginLeft: 3, mt: 3, }}>
                                <Link to={`/message/${chat.id}`} key={chat.id} class="link_item_chat">
                                    {chat.name}
                                    <Avatar sx={{ height: 50, width: 50, marginTop: 1}}/>
                                </Link>  
                            </ListItemAvatar>
                        <ListItemText />
                        <div class="item_button">Х</div>
                    </ListItemButton>
                    )
                })}
            </div>
            </ListItem>

    );
};

export default ChatPage;