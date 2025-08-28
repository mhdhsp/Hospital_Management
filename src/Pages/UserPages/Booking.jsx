import React from 'react'
import { useLocation } from 'react-router-dom'

function Booking({doctor}) {
  
  console.log("from booking",doctor);
  const handleSubmit=e=>{
    e.preventDefault();
  }
  
  return (
    <div className='w-screen h-screen bg-white ml-2'>
      <h1>Fill THE DETAILS...!!</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
          <label>Full name</label>
          <input type='text' placeholder='Enter full name'/>
           <label>Enter place</label>
          <input type='text' placeholder='Enter place'/>
           <label>Phone Number</label>
          <input type='text' placeholder='Enter phone number'/>
           <label>Pin number</label>
          <input type='text' placeholder='Enter your pin number'/>
           
        </fieldset>

        <fieldset>
          <legend>Health Details</legend>
          <label>Height</label>
          <input type='text' placeholder='Enter the height'/>
           <label>Weight</label>
          <input type='text' placeholder='Enter the weight'/>
           <label>Age</label>
          <input type='text' placeholder='Enter your age'/>
           <label>Describe the ill</label>
          <textarea rows={3} cols={10}></textarea>
        </fieldset>

         <fieldset>
          <legend>Select the doctor details</legend>
          <label>Doctor name:{doctor.firstName} {doctor.lastName}</label>
           <label>Pich the date</label>
          <input type='date' placeholder=''/>
           <label>Age</label>
          <input type='text' placeholder='Enter your age'/>
           <label>Describe the ill</label>
          <textarea rows={3} cols={10}></textarea>
        </fieldset>

        <button type='submit'>Proceed to payment</button>

      </form>

    </div>
  )
}

export default Booking