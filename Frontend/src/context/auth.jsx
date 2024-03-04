import React, { createContext, useState, useContext, useEffect } from 'react'
import { instance, endpoints } from '../API/api'
const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  //Realiza el login del usuario, lo guarda en localStorage y actualiza el estado del contexto
  const login = async (userData) => {
    try {
      const response = await instance.post(endpoints.postUserLogin, userData)
      const loggedInUser = response?.data?.user
      setUser(loggedInUser)
      localStorage.setItem('token', response?.data?.token) 
    } catch (error) {
      if (error.response.status === 401) {
        throw new Error('Credenciales inválidas')
      } else {
        console.error('Error al iniciar sesión:', error)
        throw new Error('Error al iniciar sesión')
      }
    }
  }

  //Borra el estado y el localStorage del usuario
  const logout = () => {
    localStorage.removeItem('token') 
    setUser(null)
  }

  //Verifica si el usuario esta autentificado
  const isAuthenticated = () => {
    return !!user
  }

  //Verifica si existe un token del usuario
  useEffect(()=>{
    instance.get(endpoints.getAuth)
    .then(response => {
      setUser(response.data.decoded)
    })
    .catch(err=>console.log(err))
  }, [])

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
