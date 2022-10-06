import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from "@mui/material/List";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import ChatContainerPage from "../pages/ChatContainerPage";
import MessagePage from "../pages/MessagePage";


function App() {
    const theme = createTheme({
    palette: {
        primary: {
            main: orange[400],
        },
    },
});

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [author, setAuthor] = useState('');
    const [chatList] = useState([
        {name: "Some chat", id: "1"},
        {name: "Complicated discussin", id: "2"},
        {name: "Descriptions and document", id: "3"},
]);

    const inputRef = useRef(null);

    const onButtonClick= () => {
    let newId = 1;
    if (message.length > 0) newId = messages[messages.length -1].id + 1;
    if (author.length > 0) {
        setMessages(messages => [...messages, {text: message, author: author, id: newId }]);
    } else {
        alert("Author name needed")
    }
};


useEffect(() => {
    if (messages.length > 0){
    setTimeout(() => {
        alert(author + ", youy message sent");
        }, 1000);
    }
        focusTextField(inputRef.current);
    }, [messages, author]);

function focusTextField(input) {
    if (input) {
        input.focus();
    }
}

return (

    <ThemeProvider theme={theme}> 
        <div className="App main">
        <div className="massage-text">
            <Typography variant="h3" component="div" color="primary.main">chat List</Typography>
            <List sx={{ margin: '10px 0 10 px 0', width: "100%", bgcolor: "background.paper" }}>
            {chatList.map((item) => <ChatContainerPage name={item.name} key={item.id}/>)}
            </List>
        </div>  
        <div className="messages">
            <Box
            component="form" 
            sx={{m: 1, background: theme.palette.primary.backgroun, borderRadius: '10px', gap: "100%", width: "400px", margin: "10px", padding: "15px"}} 
            noValidate
            autoComplete="off"
            >
            <Typography variant="h4" component="div" color="primary.main">Message</Typography>
            <TextField sx={{ margin: "10px 0 10 px 0", backgroundColor: '#fff' }}
                        id="outlined-multiline-flexible" fullWidth
                        label="Author name"
                        multiline
                        maxRows={4}
                        value={author}
                        inputRef={inputRef}
                        onChange={(event) => setAuthor(event.target.value)}
            />
            <TextField sx={{ margin: "10px 0 10 px 0", backgroundColor: '#fff' }}
                        id="outlined-multiline-flexible" fullWidth
                        label="Message text"
                        multiline
                        maxRows={4}
                        value={author}
                        inputRef={inputRef}
                        onChange={(event) => setMessage(event.target.value)}
            />
            <Button sx={{ margin: "10px 0 10 px 0" }} variant="outlined" size="large" fullWidth onClick={onButtonClick}>Send Message</Button>
            </Box>
            {
            message.map(item => {
                return (
                    <MessagePage author={item.author} text={item.text} key={item.id}/>
                )
            })
            }
            </div>
        </div>
    </ThemeProvider>
);

}


export default App;

