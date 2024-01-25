import { signInWithGoogle, signInWithFacebook } from "../firebase/firebase";
import { useUserContext } from '../context/UserContext';
import { useAuthContext } from "./useAuthContext";

export const useSocialLogin = () => {
    const { dispatch: dispatchAuth } = useAuthContext();
    const { dispatchUser } = useUserContext();
  
    const handleGoogleLogin = async () => {
      try {
        const user = await signInWithGoogle();
        dispatchAuth({ type: 'LOGIN', payload: user });
        dispatchUser({ type: 'SET_USER', payload: user });
      } catch (error) {
        console.error('Google Login Error:', error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const user = await signInWithFacebook();
      dispatchAuth({ type: 'LOGIN', payload: user });
      dispatchUser({ type: 'SET_USER', payload: user });
    } catch (error) {
      console.error('Facebook Login Error:', error);
    }
  };

  return { handleGoogleLogin, handleFacebookLogin };
};
