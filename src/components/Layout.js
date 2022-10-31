import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { themes } from "../context";
import { ThemeContext } from "../context";
import Header from "./Header";
import Footer from "./Footer";


const Layout = () => {

    const [theme, setTeme] = useState(themes.light);
    

    const toggleTheme = () => {
        setTeme(prevState => prevState === themes.light ? themes.dark : themes.light);
    }
    return (
        <>
            <div style={{background: themes.background, color: themes.text, maxWidth: "100%", height: 500}} >
            <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>

            <Header/>

            <main className="wrapper">
                <Outlet className='outlet'/>
            </main>
            <footer className="footer">
                <Footer />
            </footer>
            </ThemeContext.Provider>
            </div>
            
        </>

    );
};

export default Layout;