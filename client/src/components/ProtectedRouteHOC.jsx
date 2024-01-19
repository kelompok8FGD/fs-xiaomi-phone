// ProtectedRouteHOC.js
import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRouteHOC = ({ element, redirectPath = "/" }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // Check if the user is trying to access the account page
  if (location.pathname === "/account") {
    // If accessing the account page, check if the user is authenticated
    if (token) {
      // If authenticated, redirect to the specified path
      return <Navigate to={redirectPath} />;
    }
    // If not authenticated, redirect render the account
    return element;
  }

  // Check if the user is not authenticated
  if (!token) {
    // Redirect to the account page when not authenticated
    return <Navigate to="/account" />;
  }

  // Render the protected route element for pages other than "/account"
  return element;
};

export default ProtectedRouteHOC;
