import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyEq3XBl3Xj59Qlb-E0RUCeiObAxTNmTI",
    authDomain: "instagram-clone-react-c0e68.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-c0e68.firebaseio.com",
    projectId: "instagram-clone-react-c0e68",
    storageBucket: "instagram-clone-react-c0e68.appspot.com",
    messagingSenderId: "895715077490",
    appId: "1:895715077490:web:ce94acb67cdbe6ff8941eb",
    measurementId: "G-68M0TW6GZE"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }

//export default db;