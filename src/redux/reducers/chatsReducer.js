
const initialState = {
    chats: [
        {
            id: 1,
            name: "Maria",
        },
        {
            id: 2,
            name: "Alexei",
        },
        {
            id: 3,
            name: "Kristina",
        }
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'deleteChat':
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.id)
            };

        case 'addChat':
            let id = Date.now();
            return {
                ...state,
                chats: [...state.chats, {id: id, name: action.payload + id}]
            };
            
        default:
            return state
    }
}

export const deleteChat = (payload) => ({type: 'deleteChat', payload});
export const addChat = (payload) =>({type: 'addChat', payload})