import React from 'react'
import TopBar from '../components/TopBar'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'

const LandingPage = () => {
  return (
    <div>
      <TopBar/>
      <div className="landingsec">
        <ItemsDisplay/>
        <Chains/>
        </div>
      
    </div>
  )
}

export default LandingPage
