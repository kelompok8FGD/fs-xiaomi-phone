import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';

export const useEmailPasswordLogin = () => {
  const { dispatch: dispatchAuth } = useAuthContext();
  const navigate = useNavigate()
  const { dispatchUser } = useUserContext();
  const [emailPasswordError, setEmailPasswordError] = useState(null);
  const [emailPasswordLoading, setEmailPasswordLoading] = useState(false);

  const handleLoginSuccess = () => {
    toast.success('Login Successful');

    setTimeout(() => {
      navigate("/smartphone"); 
    }, 1500);
  };

  const emailPasswordLogin = async (email, password) => {
    setEmailPasswordLoading(true);
    setEmailPasswordError(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASEURL}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      const dataError = data.error || "An error occurred during login.";

      if (response.status === 200) {
        setEmailPasswordLoading(false);

        // Extract the information
        const { email, fullname, token } = data;

        // Create a user object with the necessary information
        const userAuth = { email, fullname, token };
        const userProfile = { email, fullname, photoURL: "" };
        localStorage.setItem("auth", JSON.stringify(userAuth));
        localStorage.setItem("user", JSON.stringify(userProfile));
        localStorage.setItem("token", token);
        localStorage.setItem("epuserEmail", JSON.stringify(userAuth.email));

        const user = JSON.parse(localStorage.getItem("user"));
        const auth = JSON.parse(localStorage.getItem("auth"));
        console.log("User Profile saved:", user);
        console.log("User Auth saved:", auth);

        // Dispatch to AuthContext
        dispatchAuth({ type: "LOGIN", payload: userAuth });

        // Dispatch to UserContext
        dispatchUser({ type: 'SET_USER', payload: userProfile });

        // Call handleLoginSuccess on successful login
        handleLoginSuccess();
      } else {
        setEmailPasswordLoading(false);
        setEmailPasswordError(dataError);
        console.error(dataError);
      }
    } catch (error) {
      setEmailPasswordLoading(false);
      const serverError = error.response?.data?.error;

      if (serverError) {
        setEmailPasswordError(serverError);
        console.error("Server error during login:", serverError);
      } else {
        setEmailPasswordError("An unexpected error occurred during login.");
        console.error("Unexpected error in server:", error.response?.data);
      }
    } finally {
      setEmailPasswordLoading(false);
    }
  };

  return { emailPasswordLogin, emailPasswordLoading, emailPasswordError };
};
