import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyATu3qjm2ZTz1KrIUaHAj9mopDAHQAlyTs",
    authDomain: "fir-lesson9-9af6a.firebaseapp.com",
    projectId: "fir-lesson9-9af6a",
    storageBucket: "fir-lesson9-9af6a.appspot.com",
    messagingSenderId: "455142670110",
    appId: "1:455142670110:web:3ec8f838bfd3055a01d30f"
};


const firebaseDb = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();