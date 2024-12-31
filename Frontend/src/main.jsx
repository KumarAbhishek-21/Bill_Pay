import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import "./App.css"




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>
)
