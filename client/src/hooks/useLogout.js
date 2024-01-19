import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        const token = JSON.parse(localStorage.getItem('token'));
        console.log('Token:', token);

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
    }

    return {logout}
}