import { useState } from "react";
import axios from "axios";

export const useRegister = (navigate) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const register = async (email, password, fullname) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASEURL}/register`,
        { email, password, fullname },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const dataError = response.data.error || "An error occurred during registration.";

      if (response.status === 200) { //Successful response
        setIsLoading(false);
        // Use the navigate function passed as a parameter
        navigate("/account?activeTab=login");
        window.location.reload();
      } else {
        // Handle unexpected structure in backend response
        setIsLoading(false);
        setError(dataError);
        console.error(dataError);
      }
    } catch (error) {
      setIsLoading(false);
      const serverError = error.response?.data?.error;

      if (serverError) {
        // Specific error message from the backend
        setError(serverError);
        console.error("Server error during registration:", serverError);
      } else {
        // Unexpected response from the backend
        setError("An unexpected error occurred during registration.");
        console.error("Unexpected error in server:", error.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
