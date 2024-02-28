import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LoginProvider } from './context/login.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <LoginProvider>
        <App />
    </LoginProvider>,
)
