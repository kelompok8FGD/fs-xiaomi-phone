import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
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

const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // google authentication
const gihtubProvider = new GithubAuthProvider(); // github authentication
const fbAuthProvider = new FacebookAuthProvider(); // facebook authentication

/**
 * `createUserWithEmailAndPassword()` method from firebase auth is used to create new user
 * using email and password
 *
 * @param {string} email
 * @param {string} password
 * @returns
 *
 * Email -> email variable takes users email address from email input
 * password -> password variable takes user password from password input
 *
 */
export async function CreateNewUser(email, password) {
  // let's add some validation
  if (!email) throw new Error("Email can not be empty");
  if (!password) throw new Error("Password can not be Empty");

  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  /**
   * after successfull login it will return users credentials like
   * email, userId, token, etc.
   */
  return userCredentials;
}

/**
 * If user alredy exists in firebase and want to login.
 * In last video we have seen how to create user "signup"
 * In this video we will see how to login existing user.
 */
export async function LoginUser(email, password) {
  // let's add some validation
  if (!email) throw new Error("Email can not be empty");
  if (!password) throw new Error("Password can not be Empty");

  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

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

export const GithubAuth = async () => {
  /**
   * auth and gihtubProvider is declared at the top of this file.
   * 
   * here we are not handaling any errors.
   * As we are not handling errors here
   * it says user is alredy exists with this email address but using different provider.
   */
  const userAuth = await signInWithPopup(auth, gihtubProvider);
  return userAuth;
}


export const FacebookAuth = async () => {
  try {
    const fbAuth = signInWithPopup(auth, fbAuthProvider);
    return fbAuth;
  } catch (error) {
    console.log(error);
  }
}