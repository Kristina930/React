import React from "react";
import { Card, CardContent, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';


const ProfilePage = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 400}}>
                    <CardContent>
                            <Avatar sx={{ mb: 5, height: 80, width: 80}}/>
                            <Typography variant="h6" component="div" sx={{ mb: 2}}>
                            Информация о пользователе
                            </Typography>
                            <Typography variant="h6" component="div" >
                            Списки чатов пользователя
                            </Typography>
                    </CardContent>
                </Card>
        </div>

    );
};

export default ProfilePage;