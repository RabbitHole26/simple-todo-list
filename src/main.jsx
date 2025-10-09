// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"

if ('serviceWorker' in navigator) {
  const handleLoad = () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(reg => console.log('service worker registered: ', reg.scope))
      .catch(err => console.log('service worker registration failed: ', err))
  }

  window.addEventListener('load', handleLoad)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  //</React.StrictMode>,
)
