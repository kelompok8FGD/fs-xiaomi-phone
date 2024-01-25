import { signInWithGoogle, signInWithFacebook } from "../firebase/firebase";
import { useUserContext } from '../context/UserContext';
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
export const useSocialLogin = () => {
    const { dispatch: dispatchAuth } = useAuthContext();
    const { dispatchUser } = useUserContext();
    const navigate = useNavigate();
  
    const handleGoogleLogin = async () => {
        try {
          const data = await signInWithGoogle();
      
          // Extract necessary information
          const { email, displayName: fullname, accessToken: token, photoURL } = data;
      
          // Create a user object with the necessary information
          const userData = { email, fullname, token };
      
          // Store the user data in local storage
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("token", token);
      
          // Dispatch 'LOGIN' action with the extracted information
          dispatchAuth({ type: 'LOGIN', payload: userData });
          dispatchUser({ type: 'SET_USER', payload: userData });
          navigate("/cart");
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
        const userData = { email, fullname, token };
        // Store the user data in local storage
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);
  
        // Dispatch 'LOGIN' action with the extracted information
        dispatchAuth({ type: 'LOGIN', payload: userData });
        dispatchUser({ type: 'SET_USER', payload: userData });
        navigate("/cart");
      } catch (error) {
        console.error('Facebook Login Error:', error);
      }
    };
  
    return { handleGoogleLogin, handleFacebookLogin };
  };
  