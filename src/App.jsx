import React from 'react'
import LandingPage from './Pages/LandingPage'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import ProductMenu from './GoEats/components/ProductMenu'
const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:franchiseId/:franchiseName" element={<ProductMenu />} />
      </Routes>
    </div>
  )
}

export default App