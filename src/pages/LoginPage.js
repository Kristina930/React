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
        <div className="login_box">
            <h2>
                Вход в приложение
            </h2>
            <form onSubmit={handleSubmit}>
            <div className="register_box_form">
                    <label className='register_box_label' for="name">
                        Email:  <br />
                        <input value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="register_box_input"/>
                    </label>
                </div>
                <div className="register_box_form">
                    <label className='register_box_label' for="psw">                         
                        Пароль: <br />
                        <input value={password} placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} className="register_box_input"/>
                    </label>
                </div>  
                <button type={'submit'} className="login_box_button">Войти</button>
            </form>

        </div>
    );
};


export default  LoginPage;