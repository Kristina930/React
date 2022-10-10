import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer";
//import storage from "redux-persist/lib/storage";
//import {persistReducer, persistStore} from "redux-persist";
import { usersReducer } from "./reducers/usersReducer";
import thunk from "redux-thunk";


const reducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    users: usersReducer
});


/*const timeout = store => next => action => {
    const delay = action?.meta?.delayMs
    if(!delay) {
        return next(action)
    }

    const result = setTimeout(() => next(action), delay)

    return () => {
        clearTimeout(result)
    }

}

const persistConfig = { 
    key: 'root', 
    storage,
};


const persistsReducer = persistReducer(persistConfig, reducer);*/

export const store = createStore (reducer, applyMiddleware(thunk));

//export const persist = persistStore(store);