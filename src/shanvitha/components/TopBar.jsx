import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <section className="topbarsec">

        <div className="companytitle">
          <Link to='/' className='link'>
            <h2>Shanvitha</h2>
            </Link>
        </div>
        <div className="searchbar">
            <input type='text' placeholder='search...'/>
        </div>

        <div className="userauth">
            Login/Register
        </div>
        
    </section>
  )
}

export default TopBar
