import React, { useState, useEffect, useRef } from "react";
import MessageList from "./MessageList";
import Chat from "./Chat";
import {Box, Button, Input} from '@mui/material';
import {ThemeProvider, createTheme} from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
        primary: {
            main: "#000913",
            addition:"#fff089",
            background:"#d3ff89",
        },
        button: {
            color: "#6b6b6b",
            background:"#acfca7",
        }
    },
});

const [messageList, setMessageList] = useState([]);
const [text, setText] = useState('');
const [chat, setChat] = useState([]);
const [author, setAuthor] = useState('');
const inputRef = useRef(null);



const handleClick = (event) => {
  event.preventDefault();
  setMessageList(prevState => [...prevState, {
    id: giveLastId(prevState),
    author: author, 
    text: text
  }]);
  setChat(prevState => [...prevState, {
    id: giveLastId(prevState),
    author: author, 
    createdAt: new Date()
  }]);
}


function giveLastId(array) {
  return array.length ? array[array.length - 1].id + 1 : 0
}

useEffect(() => {
  inputRef.current?.focus();
}, [messageList]);


useEffect(() => {
  setTimeout(() => {
    botList(messageList);
    }, 1000)
});

function botList() {
  const itemAuthor = messageList[messageList.length - 1];
    if(itemAuthor && itemAuthor.author) {
      setMessageList(prevState => [
        ...prevState, {
            id: giveLastId(prevState),
            // eslint-disable-next-line no-template-curly-in-string
            text: 'Сообщение от автора ${itemAuthor.author}'
          }
        ])
    }
}

  return (
    <ThemeProvider theme={theme}> 
      <div>
        <form onSubmit={handleClick}>
          Ведите тексе:
          <Input value={text} onChange={(event) => setText(event.target.value)} /><br/>
          Ведите автора:
          <Input value={author} onChange={(event) => setAuthor(event.target.value)} /><br/>
          <Button type="submit" variant="outlined" sx={{background: theme.palette.primary.button, borderRadius: 2,}}>Добавить сообщение</Button>
        </form>
        {messageList.map((message) => {
          return(
          <div key={message.id}>
            {message.text}
            {message.author}
          </div>
          )
      })}

        <Chat chat={chat}/>
        <Box component="form" sx={{background: theme.palette.primary.backgroun}} onSubmit={handleClick}>
          <p className={"box_p"}>Обратная связь</p>
        </Box>
        <MessageList array={messageList}/>
    </div>
    </ThemeProvider>
  );
}
export default App;
