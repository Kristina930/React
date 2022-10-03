
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
        case 'addChat':
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }

        case 'deleteChat':
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.id)
            };

        default:
            return state
    }
}