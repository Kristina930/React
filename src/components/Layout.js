import React from "react";
import CustomLink from "./CustomLink";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { themes } from "../context";
import { ThemeContext } from "../context";


const Layout = () => {

    const [theme, setTeme] = useState(themes.light);
    

    const toggleTheme = () => {
        setTeme(prevState => prevState === themes.light ? themes.dark : themes.light);
    }
    return (
        <>
            <div style={{background: themes.background, color: themes.text, maxWidth: "100%", height: 500}}>
            <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>
            <header>
                    <div>
                    <div class="div_link">
                    <div class="div_link_custom">
                    <CustomLink to={"/"} >Hom</CustomLink>
                    </div>
                    <div class="div_link_custom">
                    <CustomLink to={"/profile"} >Profile</CustomLink>
                    </div>
                    <div class="div_link_custom">
                    <CustomLink to={"/chat"} >Chat</CustomLink>
                    </div>
                    <div class="div_link_custom">
                    <CustomLink to={"/register"} >Register</CustomLink>
                    </div>
                    <div class="div_link_custom">
                    <CustomLink to={"/login"} >Login</CustomLink>
                    </div>
                    </div>
                    </div>
            </header>
            <main class="div_main">
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
            </ThemeContext.Provider>
            </div>
            
        </>

    );
};

export default Layout;