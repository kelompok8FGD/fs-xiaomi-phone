import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRW3APrG9Tw9wcU82SoqnJFR71HIH9BgM",
  authDomain: "xiaomi-phone-486e3.firebaseapp.com",
  projectId: "xiaomi-phone-486e3",
  storageBucket: "xiaomi-phone-486e3.appspot.com",
  messagingSenderId: "1067267871225",
  appId: "1:1067267871225:web:2c7f60bb7c4c2425e66d28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider(); // google authentication
const fbAuthProvider = new FacebookAuthProvider(); // facebook authentication


export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider); 
    console.log(result.user)
    return result.user;
   
  } catch (error) {
    throw error;
  }
};

export const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, fbAuthProvider);
    console.log(result.user)
    return result.user;
  } catch (error) {
    throw error;
  }
};