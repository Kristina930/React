import {addMessages} from "../reducers/messageReducer";
import randomSentence from "random-sentence"

export const messageThunk = (message, text, chatId) => (dispatch, _getState) => {
    dispatch(addMessages({message: message, text: text, chatId: Number(chatId)}));
    if (text !== 'chatbot') {
        setTimeout(() => dispatch(addMessages({
            message: `hello, ${text}! ${randomSentence({word:5})}`,
            text: 'chatbot',
            chatId: Number(chatId)
        })), 1000);

    }

}