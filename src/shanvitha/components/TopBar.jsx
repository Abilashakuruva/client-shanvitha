import React from 'react'

const TopBar = () => {
  return (
    <section className="topbarsec">

        <div className="companytitle">
            <h2>Shanvitha</h2>
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
