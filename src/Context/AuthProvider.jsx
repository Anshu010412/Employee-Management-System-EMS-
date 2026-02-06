import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
// localStorage.clear()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // You can call setLocalStorage to initialize or set values to localStorage if required.
        setLocalStorage()

        // Get data from localStorage safely
        const { Employees, Admin } = getLocalStorage() || {}
        setUserData({ Employees, Admin })
    }, [])

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
