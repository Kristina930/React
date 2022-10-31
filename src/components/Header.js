import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context";
import CustomLink from "./CustomLink";
import {  logoutInitiate } from '../redux/reducers/usersReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import layers from '../layers.png';






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
        <header style={{background: themes.background, padding: 30, height: 180}} >
            <div className="header wrapper">
            <div className="header_logo" >
            <img src={layers} className="logo" alt="logo" />
            </div>
            <div className="header-right">
                <div className="div_link_custom">
                <CustomLink  to={'/'} >Главная</CustomLink>
                </div>
                <div className="div_link_custom">
                <CustomLink to={"/chat"} >Чаты</CustomLink>
                </div>
                <div className="div_link_custom">
                <CustomLink to={'/about'} >О компании</CustomLink>
                </div>
                <div className="div_link_custom">
                <CustomLink to={'/addContact'} >Добавить контакты</CustomLink>
                </div>
                
                {user ? (
                    <p style={{cursor: 'pointer'}} onClick={handleAuth}>
                        
                    </p>
                ) : (
                    <div className="div_link_custom">
                        <CustomLink to={'/login'} >
                            Войти
                        </CustomLink>
                    </div>
                )}
                <div className="div_link_custom">
                <CustomLink to={"/register"} >Регистрация</CustomLink>
                </div>
            </div>
            <div className="header_button_theme">
            <button onClick={toggleTheme} className="header_button ">Изменить тему</button>
            </div>
            </div>
        </header>
        </>
    );
};


export default Header;