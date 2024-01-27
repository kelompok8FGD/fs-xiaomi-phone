import { signInWithGoogle, signInWithFacebook } from "../firebase/firebase";
import { useUserContext } from '../context/UserContext';
import { useAuthContext } from "./useAuthContext";
export const useSocialLogin = () => {
    const { dispatch: dispatchAuth } = useAuthContext();
    const { dispatchUser } = useUserContext();

  
    const handleGoogleLogin = async () => {
        try {
          const data = await signInWithGoogle();
      
          // Extract necessary information
          const { email, displayName: fullname, accessToken: token, photoURL } = data;
      
          // Create a user object with the necessary information
          const userAuth = { email, fullname, token };
          const userProfile = { email, fullname, photoURL };
      
          // Store the user data in local storage
          localStorage.setItem("auth", JSON.stringify(userAuth));
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(userProfile));
          console.log("User Profile saved:", userProfile);
          // Dispatch 'LOGIN' action with the extracted information
          dispatchAuth({ type: 'LOGIN', payload: userAuth });
          dispatchUser({ type: 'SET_USER', payload: userProfile });
      
        } catch (error) {
          console.error('Google Login Error:', error);
        }
      };
      
  
    const handleFacebookLogin = async () => {
      try {
        const data = await signInWithFacebook();
        console.log(data)
        // Extract necessary information
        const { email, displayName: fullname, accessToken: token, photoURL } = data;
        // Create a user object with the necessary information
        const userAuth = { email, fullname, token };
        const userProfile = { email, fullname, photoURL: "" };
        // Store the user data in local storage
        localStorage.setItem("user", JSON.stringify(userProfile));
        localStorage.setItem("auth", JSON.stringify(userAuth));
        localStorage.setItem("token", token);
        

  
        // Dispatch 'LOGIN' action with the extracted information
        dispatchAuth({ type: 'LOGIN', payload: userAuth });
        dispatchUser({ type: 'SET_USER', payload: userProfile });

      } catch (error) {
        console.error('Facebook Login Error:', error);
      }
    };
  
    return { handleGoogleLogin, handleFacebookLogin };
  };
  