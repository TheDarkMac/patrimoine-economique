import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Header"
import Footer from './Footer'
import './style.css'
import Body from './Body'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Body/>
    <Footer/>
  </React.StrictMode>,
)
