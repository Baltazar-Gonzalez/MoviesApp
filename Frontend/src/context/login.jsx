import React, { createContext, useState } from 'react'

//Contexto
export const LoginContext = createContext()

//Provider
export function LoginProvider({ children }) {
    const [login, setLogin] = useState({})

    return (
        <LoginContext.Provider
            value={{
                login: false,
                setLogin,
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}
