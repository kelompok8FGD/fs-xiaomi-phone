import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        const token = JSON.parse(localStorage.getItem('token'));
        console.log('Token:', token);

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
         // Use navigate to redirect to the home page
         navigate("/");
    }

    return {logout}
}