import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { themes } from "../context";
import { ThemeContext } from "../context";
import Header from "./Header";


const Layout = () => {

    const [theme, setTeme] = useState(themes.light);
    

    const toggleTheme = () => {
        setTeme(prevState => prevState === themes.light ? themes.dark : themes.light);
    }
    return (
        <>
            <div style={{background: themes.background, color: themes.text, maxWidth: "100%", height: 500}}>
            <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>

            <Header/>

            <main >
                <Outlet className='outlet'/>
            </main>
            <footer className="div_footer">
                footer
            </footer>
            </ThemeContext.Provider>
            </div>
            
        </>

    );
};

export default Layout;