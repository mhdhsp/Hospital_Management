import React from 'react'
import Register from './Pages/UserPages/Register'
import Login from './Components/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Doctors from './Pages/UserPages/Doctors'
import Booking from './Pages/UserPages/Booking'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/:id' element={<Booking/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App