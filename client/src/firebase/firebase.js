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
const provider = new GoogleAuthProvider(); // google authentication
const fbAuthProvider = new FacebookAuthProvider(); // facebook authentication





/**
 * auth and provider is declared at the top of file
 */
export const GoogleAuth = async () => {
  const userAuth = await signInWithPopup(auth, provider)
  return userAuth;

  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
}



export const FacebookAuth = async () => {
  try {
    const fbAuth = signInWithPopup(auth, fbAuthProvider);
    return fbAuth;
  } catch (error) {
    console.log(error);
  }
}