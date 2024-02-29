import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/auth.jsx'
import { MediaProvider } from './context/media.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <MediaProvider>
      <App />
    </MediaProvider>
    ,
  </AuthProvider>,
)
