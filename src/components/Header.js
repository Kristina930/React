import React, { useContext } from "react";
import { ThemeContext } from "../context";

const Header = () => {

    const {themes, toggleTheme} = useContext(ThemeContext);

    return (
        <>
        <header style={{background: themes.background, color: themes.text}}>
            <button onClick={toggleTheme}>Изменить тему</button>
        </header>
        </>
    );
};


export default Header;