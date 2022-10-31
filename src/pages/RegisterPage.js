import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerInitiate } from '../redux/reducers/usersReducer';
import { useNavigate } from 'react-router-dom';


const  RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
        navigate('home')
    }
    

    return (
        <div className="register_box">
            <h2>
                Регистрация
            </h2>
            <form onSubmit={handleSubmit}  >
                <div className="register_box_form">
                    <label className='register_box_label' for="name">
                        Имя: <br />
                        <input value={displayName} placeholder="Имя" onChange={(e) => setDisplayName(e.target.value)} className="register_box_input"/>
                    </label>
                </div>
                <div className="register_box_form">
                    <label>
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
                <div className="register_box_form">
                    <label className='register_box_label' for="psw-repeat">
                        Подтвердите пароль: <br />
                        <input value={passwordConfirm} placeholder="Повторить пароль" onChange={(e) => setPasswordConfirm(e.target.value)} className="register_box_input"/>
                    </label>  
                </div>
                <button type={'submit'} className="register_box_button">Зарегистрироваться</button>
            </form>
        </div>
    );
};


export default  RegisterPage;