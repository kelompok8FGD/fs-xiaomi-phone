import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const API_URL = "https://xiaomi-phone-api.onrender.com/api/v1/login";
  const navigate = useNavigate();
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        API_URL,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.status);

      const json = response.data;

      if (response.status !== 200) {
        const jsonError = json.error || "An error occurred during login.";
        setIsLoading(false);
        setError(jsonError);
        console.log(jsonError);
      } else {
        // Save the user to local storage
        const token = json.token;
        localStorage.setItem("user", JSON.stringify(json));
        localStorage.setItem("token", token);
        console.log("Token:", token);

        // Update the auth context
        dispatch({ type: "LOGIN", payload: json });

        setIsLoading(false);
        // Use navigate to redirect to the cart page
        navigate("/cart");
      }
    } catch (error) {
      if (error.response) {
        const jsonError =
          error.response.data.error || "An error occurred during login.";
        setIsLoading(false);
        setError(jsonError);
        console.log(jsonError);
      } else {
        setIsLoading(false);
        setError("An error occurred during login.");
        console.error("Error during login:", error);
      }
    }
  };

  return { login, isLoading, error };
};
