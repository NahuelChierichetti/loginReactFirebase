// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjeBKoEa44XW4FdyDgL7RRCMlSkxWwsWU",
  authDomain: "loginreact-82fb3.firebaseapp.com",
  projectId: "loginreact-82fb3",
  storageBucket: "loginreact-82fb3.appspot.com",
  messagingSenderId: "690518790608",
  appId: "1:690518790608:web:ad6916bf832990fef169d5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;