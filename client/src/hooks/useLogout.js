import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatchUser } = useUserContext();
  const navigate = useNavigate();
  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    localStorage.removeItem("countdownStartTime");
    localStorage.removeItem("countdownEndTime");
    // Check if 'epuserEmail' exists in localStorage
    if (localStorage.getItem("epuserEmail")) {
      // Remove 'epuserEmail' from localStorage
      localStorage.removeItem("epuserEmail");
      console.log("Item removed from localStorage");
    } else {
      console.log("Item not found in localStorage");
    }

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    dispatchUser({ type: "CLEAR_USER" });
    // Use navigate to redirect to the home page
    navigate("/");
  };

  return { logout };
};
