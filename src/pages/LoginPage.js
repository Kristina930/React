import React, { useState } from 'react';
import { loginInitiate } from '../redux/reducers/usersReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const  LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
        navigate('/addContact')
    }

    return (
        <div class="login_box">
            <h2>
                Логин
            </h2>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} class="login_box_input"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} class="login_box_input"/>
                <button type={'submit'} class="login_box_button">Зарегистрироваться</button>
            </form>

        </div>
    );
};


export default  LoginPage;