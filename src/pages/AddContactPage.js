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
        <div class="add_box">
            <form onClick={handleSubmit}>
                <label htmlFor={"name"} class="add_box_label">Name</label>
                <input id={'name'} name={"name"} onChange={handleChange} value={name} class="add_box_input"/>
                <label htmlFor={"email"} class="add_box_label">Email</label>
                <input id={'email'} name={"email"} onChange={handleChange} value={email} class="add_box_input"/>
                <label htmlFor={"contact"} class="add_box_label">Contact</label>
                <input id={'contact'} name={"contact"} onChange={handleChange} value={contact} class="add_box_input"/>
                <input type={'submit'} value={'Ввести данные'} class="add_box_button"/>
            </form>
        </div>

    );
};

export default AddContactPage;