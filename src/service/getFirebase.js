// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsrBfGbJQfrvV2AgmCjuJEW2rpz1A8zd8",
  authDomain: "mi-tienda-de-videojuegos.firebaseapp.com",
  projectId: "mi-tienda-de-videojuegos",
  storageBucket: "mi-tienda-de-videojuegos.appspot.com",
  messagingSenderId: "276897084333",
  appId: "1:276897084333:web:a2a231d9d6b1088b08a724"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}