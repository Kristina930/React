import React, { useState, useEffect } from "react";


function App() {

const [messageList, setMessageList] = useState([]);
const [text, setText] = useState('');
const [author, setAuthor] = useState('');

const handleClick = (event) => {
  event.preventDefault();
  setMessageList(prevState => [...prevState, {
    author: author, 
    text: text
  }]);
}


useEffect(() => {
  setTimeout(() => {
    botList(messageList);
    }, 
    1000);
});

function botList() {
  const itemAuthor = messageList[messageList.length - 1];
    if(itemAuthor && itemAuthor.author) {
      setMessageList(prevState => [
        ...prevState, {
          //Не выводить имя автора, выводить ${itemAuthor.author}, не понимаю почему.
            // eslint-disable-next-line no-template-curly-in-string
            text: 'Сообщение от автора ${itemAuthor.author}'
          }
        ])
    }
}

  return (
      <div>
        <form onSubmit={handleClick}>
          Ведите текст
          <input value={text} onChange={(event) => setText(event.target.value)}/><br/>
          Ведите автора:
          <input value={author} onChange={(event) => setAuthor(event.target.value)}/><br/>
          <button type="submit">Добавить сообщение</button>
  
        </form>
        {messageList.map((message) => {
          return(
          <div>
            {message.text}
            {message.author}
          </div>
          )
      })}
    </div>
  );
}


export default App;
