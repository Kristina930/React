import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


function Chat({Chat}) {
    const theme = useTheme();
    if (Chat.length > 0) {
        return (
        <List sx={{ width: '100%', maxWidth: 450, bgcolor: theme.palette.primary.main, borderRadius:2 }}>
            {Chat.map(item => (
                <ListItem alignItems="flex-start" key={item.id}>
                    <ListItemAvatar>
                            <Avatar alt={item.user.toUpperCase()} src="/static/images/avatar/1.jpg"/>
                            <Avatar alt={item.user.toUpperCase()} src="/static/images/avatar/2.jpg"/>
                            <Avatar alt={item.user.toUpperCase()} src="/static/images/avatar/3.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'block', color: 'orange' }}
                                component="span"
                                color="text.primary.main"
                            >
                                {item.user}
                            </Typography>
                            <Typography
                                sx={{ display: 'block', color: 'black' }}
                                component="span"
                                color="text.primary.main"
                            >
                                {item.user}
                            </Typography>
                            <Typography
                                sx={{ display: 'block', color: 'pink' }}
                                component="span"
                                color="text.primary.main"
                            >
                                {item.user}
                            </Typography>
                        </React.Fragment>
                    }

                    />
                </ListItem>
                ))}
        </List>
        );
    }
}



export default Chat;