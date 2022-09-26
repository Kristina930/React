import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';


const MessagePage = ({author, text})  => {
        return (
            <div className='message-text'>
                <Card sx={{ maxWidth: 275, bgcolor: "beige" }}>
                    <CardContent sx={{ mb: 5}}>
                            <Avatar sx={{ mb: 2, height: 50, width: 50}}/>
                            <Icon />
                            <Typography variant="h5" component="div" color="primary.main">
                            {author}:
                        </Typography>
                        <Typography variant="body2">
                            " {text} "
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 275, mt: 10, bgcolor: "silver"}}>
                    <CardContent sx={{ mb: 5}}>
                            <Avatar sx={{ mb: 2, height: 50, width: 50, bgcolor: "beige"}}/>
                            <Icon />
                            <Typography variant="h5" component="div" color="primary.main">
                            {author}:
                        </Typography>
                        <Typography variant="body2">
                            " {text} "
                        </Typography>
                    </CardContent>
                </Card>
            </div>
    );
};


export default  MessagePage;