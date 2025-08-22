import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
            <Link to="doctors">Doctors</Link>
            <button onClick={()=>localStorage.clear()}>Logout</button>
        </nav>
        
        <Outlet/>
    </div>
  )
}

export default Navbar