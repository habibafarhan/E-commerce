
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- أضف هذا السطر هنا
import App from './App'
import CartProvider from './components/context/cartContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter basename="/e-commerce-react/">
   <CartProvider>
   <App />
   </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)