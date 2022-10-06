
const initialState = {
    messages: [
        {
            id: 1,
            text: "Привет",
            chatId: 2

        },
        {
            id: 2,
            text: "Привет! Как дела?",
            chatId: 3
        },
        {
            id: 3,
            text: "Все привет в этом чате!",
            chatId: 1
        },
        {
            id: 4,
            text: "Дела отилчно, а у тебя?",
            chatId: 2
        },
        {
            id: 5,
            text: "Ребят, как настроить хуки?",
            chatId: 1
        }
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'deleteMessages':
            return {
                ...state,
                messages: state.messages.filter((message) => message.id !== action.payload)
            };

        case 'addMessages':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };

        default:
            return state
    }
}

export const deleteMessages = (payload) => ({type: 'deleteMessages', payload});
export const addMessages = (payload) =>({type: 'addMessages', payload})