import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='flex justify-between items-center  w-screen bg-blue-100  p-6 w-2" '>
            <Link to="login" className='bg-blue-500'>Login</Link>
            <Link to="register" className='bg-blue-500'>Register</Link>
            <Link to="doctors" className='bg-blue-500'>Doctors</Link>
            <button onClick={()=>localStorage.clear()}>Logout</button>
        </nav>
        
        <Outlet/>
    </div>
  )
}

export default Navbar