import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDjeBKoEa44XW4FdyDgL7RRCMlSkxWwsWU",
  authDomain: "loginreact-82fb3.firebaseapp.com",
  projectId: "loginreact-82fb3",
  storageBucket: "loginreact-82fb3.appspot.com",
  messagingSenderId: "690518790608",
  appId: "1:690518790608:web:ad6916bf832990fef169d5"
};

const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export default appFirebase;