import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios';



export const useLogin = () => {
    const { dispatch } = useAuthContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const API_URL = 'https://xiaomi-phone-api.onrender.com/api/v1/login'

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://xiaomi-phone-api.onrender.com/api/v1/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()
       
        if (!response.ok) {
            
            setIsLoading(false)
            setError(json.error)
            console.log(json.error)
        }
        if (response.ok) {
            // save the user to local storage
           localStorage.setItem('user', JSON.stringify(json));
           localStorage.setItem('token', JSON.stringify(json.token));

           // update the auth context
           dispatch({type: 'LOGIN', payload: json})

           setIsLoading(false)

    }
}
    return { login, isLoading, error }
}