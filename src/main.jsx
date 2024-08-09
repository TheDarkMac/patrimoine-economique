import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Header"
import Footer from './Footer'

import './style.css'
import Patrimoine from './Patrimoine'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Patrimoine/>
    <Footer/>
  </React.StrictMode>,
)
