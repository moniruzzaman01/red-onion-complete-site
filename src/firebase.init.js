// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxWsGg-nPz6Jg1aPrAcfBm8gbnC0qnyZQ",
  authDomain: "red-onion-48897.firebaseapp.com",
  projectId: "red-onion-48897",
  storageBucket: "red-onion-48897.appspot.com",
  messagingSenderId: "765454730846",
  appId: "1:765454730846:web:0eafacd6269c7ef59216cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
