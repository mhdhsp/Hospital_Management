import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Booking({ doctor }) {
  const navigate=useNavigate();
  console.log("from booking", doctor);
  const handleSubmit = (e) => {
    e.preventDefault();
        navigate("/payment",{
          state:doctor
        });
  };

  return (
    <div className="w-screen h-screen bg-white ml-2 flex flex-col  items-center border rounded-2xl">
      <h1 className="text-center text-blue-600 font-bold mt-3">Fill THE DETAILS...!!</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 w-full h-full p-3">
        <fieldset className="flex flex-col items-start border border-black-200 rounded-mg p-3 m-1 ">
          <legend>Personal Details</legend>
          <label>Full name</label>
          <input type="text" placeholder="Enter full name" className="border border-gray-200 rounded-lg pl-3"/>
          <label>Enter place</label>
          <input type="text" placeholder="Enter place" className="border border-gray-200 rounded-lg pl-3"/>
          <label>Phone Number</label>
          <input type="text" placeholder="Enter phone number" className="border border-gray-200 rounded-lg pl-3" />
          <label>Pin number</label>
          <input type="text" placeholder="Enter your pin number" className="border border-gray-200 rounded-lg pl-3" />
        </fieldset>

        <fieldset className="flex flex-col items-start border border-black-200 rounded-lg p-1 m-1">
          <legend>Health Details</legend>
          <label>Height</label>
          <input type="text" placeholder="Enter the height"  className="border border-gray-200 rounded-lg pl-3"/>
          <label>Weight</label>
          <input type="text" placeholder="Enter the weight"  className="border border-gray-200 rounded-lg pl-3"/>
          <label>Age</label>
          <input type="text" placeholder="Enter your age" className="border border-gray-200 rounded-lg pl-3"/>
          <label>Describe the ill</label>
          <textarea rows={3} cols={35} className="border border-gray-200 rounded-lg pl-3"> </textarea>
        </fieldset>

        <fieldset className=" flex flex-col items-start border border-black-200 rounded-lg p-3 m-1 ">
          <legend> Doctor details</legend>
          <label>
            Doctor name : <span className="text-blue-600">{doctor.firstName}  {doctor.lastName}</span>
          </label>
          <label>Pick the date</label>
          <input type="date" placeholder="" />
        </fieldset>

        
        <fieldset className=" flex flex-col items-start border border-black-200 rounded-lg p-3 m-1 ">
          <legend> Token and Time</legend>
          <label>
            Your Token:{doctor.token+1} 
          </label>
        <label>
  Approximate Time::{
    (() => {
      const startTimeStr = doctor.consultationHours.split(" ")[1]; // "10:00"
      const [hours, minutes] = startTimeStr.split(":").map(Number);

      // Create a Date object today
      const date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes + 15 * doctor.token);

      // Format back to HH:MM
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    })()
  }
</label>

          
        </fieldset>

        <button type="submit" className="bg-blue-400 border rounded-lg col-span-2 p-1 font-bold">Proceed to payment</button>
      </form>
    </div>
  );
}

export default Booking;
