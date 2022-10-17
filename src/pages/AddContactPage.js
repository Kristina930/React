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
        <div>
            <form onClick={handleSubmit}>
                <label htmlFor={"name"}>Name</label>
                <input id={'name'} name={"name"} onChange={handleChange} value={name} />
                <label htmlFor={"email"}>Email</label>
                <input id={'email'} name={"email"} onChange={handleChange} value={email}/>
                <label htmlFor={"contact"}>Contact</label>
                <input id={'contact'} name={"contact"} onChange={handleChange} value={contact}/>
                <input type={'submit'} value={'save'}/>
            </form>
        </div>

    );
};

export default AddContactPage;