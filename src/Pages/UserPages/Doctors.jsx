// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Doctors() {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate=useNavigate();
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     axios
//       .get("https://localhost:7023/api/Doctor", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setDoctors(res.data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);
// console.log(doctors);

//   if (loading) return <p>Loading doctors...</p>;
//   if (doctors.length === 0) return <p>No doctors found.</p>;

  
//   
// }

// export default Doctors;


import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctor } from '../../Redux/DoctorSlice';
import { useNavigate } from 'react-router-dom';

function Doctors() {
  const {doctors,loading,error}=useSelector(state=>state.Doctors);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchDoctor());
  },[])
  console.log(doctors);
  const navigate=useNavigate();
return (
    <div className="flex flex-wrap gap-6 justify-center">
  {doctors.map((item) => (
    <div
      key={item.id}
      className="w-72 bg-white rounded-2xl shadow-md hover:shadow-lg p-6 flex flex-col items-center transition-all duration-300"
    >
      {/* Doctor Photo */}
      <img
        src={item.image|| "https://via.placeholder.com/150"}
        alt={item.lastName}
        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-300"
      />

      {/* Doctor Info */} 
      <h2 className="text-lg font-semibold text-gray-800">{item.firstName} {item.lastName}</h2>
      <p className="text-sm text-gray-500">{item.department}</p>
      <p className="text-sm text-gray-500">Experience: {item.yearsOfExperience} yrs</p>
      <p className="text-sm text-gray-500">Age: {item.age}</p>
      <p className="text-sm text-gray-500">Phone: {item.phone}</p>
      <p className="text-sm text-gray-500">Email: {item.email}</p>
      <p
        className={`text-sm font-medium mt-2 ${
          item.avail ? "text-green-600" : "text-red-600"
        }`}
      >
        {item.avail ? "Available" : "Not Available"}
      </p>

      {/* Book Button */}
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => navigate(`/${item.id}`)}
      >
        Book Now
      </button>
    </div>
  ))}
</div>

  );
}

export default Doctors