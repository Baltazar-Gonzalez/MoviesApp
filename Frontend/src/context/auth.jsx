import React, { createContext, useState, useContext } from 'react'
import { instance, endpoints } from '../API/api'
const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = async (userData) => {
    try {
      const response = await instance.post(endpoints.postUserLogin, userData)
      const loggedInUser = response.data.user
      setUser(loggedInUser)
    } catch (error) {
      if (error.response.status === 401) {
        throw new Error('Credenciales inválidas')
      } else {
        console.error('Error al iniciar sesión:', error)
        throw new Error('Error al iniciar sesión')
      }
    }
  }

  const logout = (userData) => {
    setUser(null)
  }
  const isAuthenticated = () => {
    return !!user
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
