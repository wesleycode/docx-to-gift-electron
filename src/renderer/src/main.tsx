import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { MyRouter } from './infrastructure/router/MyRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
        <MyRouter />
    </HashRouter>
  </React.StrictMode>
)
