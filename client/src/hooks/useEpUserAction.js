// useEpUserAction.js
import { useState } from 'react';
import axios from 'axios';

const useEpUserAction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteEpUser = async () => {
    try {
      setIsLoading(true);
       // Retrieve the user email from localStorage
       const userEmail = localStorage.getItem('epuserEmail');

      const response = await axios.delete('http://localhost:5000/api/v1/deleteepuser', {
        data: { userEmail }, // Pass the user email in the request parameters // Pass the user email in the request body
      });
      // Assuming the response from the server is JSON
      const data = response.data;

      if (data.status !== 'success') {
        throw new Error(data.error || 'An error occurred during deletion.');
      }

      console.log(data); // Handle the result as needed

    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteEpUser, isLoading, error };
};

export default useEpUserAction;
