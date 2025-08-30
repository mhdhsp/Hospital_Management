import React from 'react'
import { useLocation } from 'react-router-dom'

function Payment() {
    const location=useLocation();
    const doctor=location.state;
    
    console.log(doctor);
    
  return (
    <div>Payment</div>
  )
}

export default Payment