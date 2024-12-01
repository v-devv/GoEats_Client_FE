import React from 'react'
import NavBar from '../GoEats/components/NavBar'
import ItemsDisplay from '../GoEats/components/ItemsDisplay'
import Chains from '../GoEats/components/Chains'
import FranchiseCollection from '../GoEats/components/FranchiseCollection'
import ProductMenu from '../GoEats/components/ProductMenu'

const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <div className="landingMarginSection">
          <ItemsDisplay />
          <Chains />
          <FranchiseCollection />
        </div>
        
    </div>
  )
}

export default LandingPage