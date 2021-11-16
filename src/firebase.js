import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "NULL",
    authDomain: "vatss-5cfb5.firebaseapp.com",
    databaseURL: "NULL",
    projectId: "vatss-5cfb5",
    storageBucket: "vatss-5cfb5.appspot.com",
    messagingSenderId: "NULL",
    appId: "NULL"
};
    

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
