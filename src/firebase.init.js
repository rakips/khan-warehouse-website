// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKlJuRjc4XNjeVs8plXWam5RQikN1eUWI",
    authDomain: "khans-shop.firebaseapp.com",
    projectId: "khans-shop",
    storageBucket: "khans-shop.appspot.com",
    messagingSenderId: "497009592281",
    appId: "1:497009592281:web:efa4752086333d67683bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;