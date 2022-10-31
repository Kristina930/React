import React, { useState } from "react";
import { db } from '../service/firebase';

const initialState = {
    name: '',
    email: '',
    contact: '',

}

const AddContactPage = () => {
    const [state, setState] = useState(initialState);
   
    const {name, email, contact} = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact) {
            console.log("Пожалуста впишите данные в поля")
        } else {
            db.child('contacts').push(state, (e) => {
                if(e) {
                    console.log(e)
                } else {
                    console.log('success')
                }
            })
        }
    }

    const  handleChange = (e) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value})
    }

    return (
        <div className="add_box">
            <h2>
                Добавить контакт
           </h2>
            <form onClick={handleSubmit}>
                <label htmlFor={"name"}  className="add_box_label">Имя контакта</label> 
                    <input id={'name'} name={"name"} placeholder="Имя" onChange={handleChange} value={name} className="add_box_input"/>
                <label htmlFor={"email"} className="add_box_label">Email контакта</label>
                    <input id={'email'} name={"email"}  placeholder="email" onChange={handleChange} value={email} className="add_box_input"/>
                <label htmlFor={"contact"} className="add_box_label">Телефон</label>
                    <input id={'contact'} name={"contact"} placeholder="Телефон" onChange={handleChange} value={contact} className="add_box_input"/>
                <input type={'submit'} value={'Ввести данные'} className="add_box_button"/>
            </form>
        </div>

    );
};

export default AddContactPage;