import { NavLink } from 'react-router-dom'
import React from 'react'
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-primary text-light bg-dark navbar-fixed-top">
        <div className="navbar-header ">
          <NavLink to="/" className="navbar-brand page-title">
            Park Suggestion System
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
