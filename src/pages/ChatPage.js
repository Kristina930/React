import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';

const ChatPage = ({name}) => {
        return (
            <ListItem disablePadding sx={{ display: 'block', mb: 3,  width: 500}}>
                <ListItemButton sx={{ height: 150, bgcolor: "beige"}}>
                        <ListItemAvatar>
                            <Avatar sx={{ mb: 5, height: 50, width: 50}}/>
                            <Icon />
                        </ListItemAvatar>
                    <ListItemText primary={name} />
                </ListItemButton>
                <ListItemButton sx={{ height: 150, bgcolor: "yellow", mt: 5}}>
                        <ListItemAvatar>
                            <Avatar sx={{ mb: 5, height: 50, width: 50}}/>
                            <Icon />
                        </ListItemAvatar>
                    <ListItemText primary={name} />
                </ListItemButton>
                <ListItemButton sx={{ height: 150, bgcolor: "orange", mt: 5}}>
                        <ListItemAvatar>
                            <Avatar sx={{ mb: 5, height: 50, width: 50}}/>
                            <Icon />
                        </ListItemAvatar>
                    <ListItemText primary={name} />
                </ListItemButton>
        </ListItem>
    );
}

export default ChatPage;