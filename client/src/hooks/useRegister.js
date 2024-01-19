import { useState } from 'react'
import { useAuthContext } from './useAuthContext'


export const useRegister = () => {
    const { dispatch } = useAuthContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const register = async (email, password, fullname) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://xiaomi-phone-api.onrender.com/api/v1/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, fullname})
        })
        const json = await response.json()
        console.log('this is a test')
        if (!response.ok) {
            
            setIsLoading(false)
            setError(json.error)
            console.log(json.error)
        }
        if (response.ok) {
            // save the user to local storage
           localStorage.setItem('user', JSON.stringify(json))

           // update the auth context
           dispatch({type: 'LOGIN', payload: json})

           setIsLoading(false)

    }
}
    return { register, isLoading, error }
}