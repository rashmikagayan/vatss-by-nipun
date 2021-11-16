import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBFo6xn3KwZWF7x4_-c2CiGDK5Zhp-MY9E",
    authDomain: "vatss-5cfb5.firebaseapp.com",
    databaseURL: "https://vatss-5cfb5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vatss-5cfb5",
    storageBucket: "vatss-5cfb5.appspot.com",
    messagingSenderId: "98707858245",
    appId: "1:98707858245:web:e3e6ae69f12d9cd941d42c"
};
    

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);