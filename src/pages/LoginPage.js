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
        <div>
            <h2>
                Логин
            </h2>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type={'submit'}>Зарегистрироваться</button>
            </form>

        </div>
    );
};


export default  LoginPage;