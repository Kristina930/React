import { createContext } from "react"




export const themes = {
    light: {
        background: '#CEC3E9',
        text: '#000',
    },
    dark: {
        background: '#000',
        text: '#FCD9E6',
    }
}

export const ThemeContext = createContext({themes: themes.light, toggleTheme: () =>{}});

