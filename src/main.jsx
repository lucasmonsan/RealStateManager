import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginContext, LoginProvider } from './contexts/LoginController'
import { RouterController } from './routes/RouterController'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <RouterController />
    </LoginProvider>
  </React.StrictMode>
)