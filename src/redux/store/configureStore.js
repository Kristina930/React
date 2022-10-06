import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "../reducers/chatsReducer";
import {messagesReducer} from "../reducers/messagesReducer";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";


const timeout = store => next => action => {
    const delay = action?.meta?.delayMs
    if(!delay) {
        return next(action)
    }

    const result = setTimeout(() => next(action), delay)

    return () => {
        clearTimeout(result)
    }

}

const reducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
});


const persistConfig = { 
    key: 'root', 
    storage,
};

const persistsReducer = persistReducer(persistConfig, reducer);

export const store = createStore (persistsReducer, applyMiddleware(timeout));

export const persist = persistStore(store);