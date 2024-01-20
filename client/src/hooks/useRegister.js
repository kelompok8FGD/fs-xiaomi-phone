import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    const register = async (email, password, fullname) => {
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await axios.post(
          "https://xiaomi-phone-api.onrender.com/api/v1/register",
          { email, password, fullname },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        const json = response.data;
  
        if (response.status !== 200) {
          const jsonError =
            json.message || "An error occurred during registration.";
          setIsLoading(false);
          setError(jsonError);
          console.log(jsonError);
        } else {
          setIsLoading(false);
          navigate("/");
        }
      } catch (error) {
        if (error.response) {
          const jsonError =
            error.response.data.message || "An error occurred during registration";
          setIsLoading(false);
          setError(jsonError);
          console.log(error.response);
          console.log(jsonError);
        } else {
          setIsLoading(false);
          setError("An error occurred during registration.");
          console.error("Error during registration:", error);
        }
      }
    };
  
    return { register, isLoading, error };
  };
  