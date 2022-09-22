import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


function MessageList({array}) {
    const theme = useTheme();
    if (array.length > 0) {
        return (
            <List sx={{width: '100%', maxWidth: 200, bgcolor: theme.palette.primary.background, borderRadius: 3}}>
                {array.map(item => (
                    <ListItem  key={item.id}>
                        <ListItemAvatar>
                            <Avatar alt={item.user.toUpperCase()} src="/static/images/avatar/1.jpg"/>
                            <Avatar alt={item.user.toUpperCase()} src="/static/images/avatar/2.jpg"/>
                            <Avatar alt={item.user.toUpperCase()} src="/static/images/avatar/3.jpg"/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline', color: 'orange'}}
                                        component="span"
                                        color="text.primary.main"
                                    >
                                        {item.user} wrote
                                    </Typography>
                                    <Typography
                                        sx={{display: 'inline', color: 'black'}}
                                        component="span"
                                        color="text.primary.main"
                                    >
                                        {item.user} wrote
                                    </Typography>
                                    <Typography
                                        sx={{display: 'inline', color: 'pink'}}
                                        component="span"
                                        color="text.primary.main"
                                    >
                                        {item.user} wrote
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

export default  MessageList;