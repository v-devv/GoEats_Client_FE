import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className='nav-bar'>
        <div className='nav-bar-title'>
            <Link to={"/"} className='navLink'>
            <h2>Go Eats</h2>
            </Link>
        </div>
        <div className="search-bar">
            <input type="text" placeholder="Search for a restaurant"/>
        </div>
        <div className="user-auth">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
            
        </div>

    </section>
  )
}

export default NavBar