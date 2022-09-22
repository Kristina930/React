import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';


function Chat({Chat}) {
    const theme = useTheme();
    if (Chat.length > 0) {
        return (
        <List sx={{ width: '100%', maxWidth: 450, bgcolor: theme.palette.primary.main }}>
            {Chat.map(item => (
                <ListItem  key={item.id}>
                    <ListItemAvatar>
                            <Avatar alt={item.user.toUpperCase()} src="/static/images/avatar/1.jpg"/>
                            <Avatar alt={item.user.toUpperCase()} src="/static/images/avatar/2.jpg"/>
                            <Avatar alt={item.user.toUpperCase()} src="/static/images/avatar/3.jpg"/>
                    </ListItemAvatar>
                    <ListItemText />
                </ListItem>
                ))}
        </List>
        );
    }
}



export default Chat;