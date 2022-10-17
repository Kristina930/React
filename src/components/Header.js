import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context";
import CustomLink from "./CustomLink";
import {  logoutInitiate } from '../redux/reducers/usersReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const {themes, toggleTheme} = useContext(ThemeContext);

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate('');



    const handleAuth = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 2000)
    }

    return (
        <>
        <header style={{background: themes.background, color: 'black', padding: "30px"}}>
            <div className="header">
            <div className="header-logo">
            <Link to={"/"} className={'logo'}>
              <p className={'logo'}>logo</p>  
            </Link>
            </div>
            <div className="header-right">
                <div className="div_link_custom">
                <CustomLink  to={'/'} >Home</CustomLink>
                </div>
                <div className="div_link_custom">
                <CustomLink to={"/chat"} >Chat</CustomLink>
                </div>
                <div className="div_link_custom">
                <CustomLink to={'/about'}>About</CustomLink>
                </div>
                <div className="div_link_custom">
                <CustomLink to={'/addContact'}>Add Contact</CustomLink>
                </div>
                <div className="div_link_custom">
                <CustomLink to={"/register"}>Register</CustomLink>
                </div>
                <div className="div_link_custom">
                <CustomLink to={"/login"} >Login</CustomLink>
                </div>
                {user ? (
                    <p style={{cursor: 'pointer'}} onClick={handleAuth}>
                        Sign oUT
                    </p>
                ) : (
                    <div className="div_link_custom">
                        <CustomLink to={'/login'} >
                            Sign in
                        </CustomLink>
                    </div>
                    
                )}
            </div>
            </div>
            <button onClick={toggleTheme} class="header-button">Изменить тему</button>
        </header>
        </>
    );
};


export default Header;