import React from "react";
import CustomLink from "./CustomLink";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <header>
                <div class="div_link">
                <div class="div_link_custom">
                <CustomLink to={"/"} >Hom</CustomLink>
                </div>
                <div class="div_link_custom">
                <CustomLink to={"/profile"} >Profile</CustomLink>
                </div>
                <div class="div_link_custom">
                <CustomLink to={"/message"} >Message</CustomLink>
                </div>
                <div class="div_link_custom">
                <CustomLink to={"/chat"} >Chat</CustomLink>
                </div>
                </div>
            </header>
            <main class="div_main">
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </>

    );
};

export default Layout;