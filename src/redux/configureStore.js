import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer";
import {usersReducer} from './reducers/usersReducer';
import thunk from "redux-thunk";


const reducer = combineReducers({
    users: usersReducer,
    chats: chatsReducer,
    messages: messagesReducer,

});


export const store = createStore (reducer, applyMiddleware(thunk));

