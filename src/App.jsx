import React from 'react'
import Register from './Pages/UserPages/Register'
import Login from './Components/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Doctors from './Pages/UserPages/Doctors'
import Explore from './Pages/UserPages/Explore'
import Booking from './Pages/UserPages/Booking'
import Payment from './Pages/UserPages/Payment'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/:id' element={<Explore/>}/>
        <Route path=':id/booking' element={<Booking/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App