import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/reducers/usersReducer';

const HomePage = () => {
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
        <header>
            <p>Добро пожаловать</p>

            <button onClick={handleAuth}>Выйти</button>
        </header>
    </>
    );
};

export default HomePage;