import React from 'react'
import ReactDOM from 'react-dom/client'
import { AnimationsProvider } from './contexts/AnimationsController'
import { BuildingsProvider } from './contexts/BuildingsList'
import { InputsProvider } from './contexts/InputsController'
import { LoginContext, LoginProvider } from './contexts/LoginController'
import { RouterController } from './routes/RouterController'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <BuildingsProvider>
        <InputsProvider>
          <AnimationsProvider>
            <RouterController/>
          </AnimationsProvider>
        </InputsProvider>
      </BuildingsProvider>
    </LoginProvider>
  </React.StrictMode>
)