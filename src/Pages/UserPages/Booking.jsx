import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDoctor } from "../../Redux/DoctorSlice";

function Booking() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDoctor());
  }, [dispatch]);

  const doctors = useSelector((state) => state.Doctors.doctors);
  const doctor = doctors.find((item) => String(item.id) === id);

  if (!doctor) {
    return <p className="text-center text-xl text-red-500">Doctor not found...</p>;
  }

  return (
    <div className="flex justify-center bg-blue-50 p-6">
      <div className="doctor-details grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        
        {/* Basic Info */}
        <div className="border p-4 rounded-lg">
          <p className="text-center font-bold text-blue-600 text-2xl underline mb-4">
            {doctor.firstName} {doctor.lastName}
          </p>
          <p>{doctor.age} Years Old</p>
          <p>Gender: {doctor.gender}</p>
        </div>

        {/* Professional Details */}
        <div className="border p-4 rounded-lg">
          <p>Department: {doctor.department}</p>
          <p>Specialization: {doctor.specialization}</p>
          <p>Qualification: {doctor.qualification}</p>
          <p>Experience: {doctor.yearsOfExperience} yrs</p>
        </div>

        {/* Work Details */}
        <div className="border p-4 rounded-lg">
          <p>Hospital: {doctor.hospitalName}</p>
          <p>Room Number: {doctor.roomNumber}</p>
          <p>Consultation Hours: {doctor.consultationHours}</p>
          <p>Consultation Fee: ₹{doctor.consultationFee}</p>
        </div>

        {/* Contact Info */}
        <div className="border p-4 rounded-lg">
          <p>Phone: {doctor.phone}</p>
          <p>Email: {doctor.email}</p>
          <p>Address: {doctor.address}</p>
        </div>

        {/* License Info */}
        <div className="border p-4 rounded-lg">
          <p>License Number: {doctor.licenseNumber}</p>
          <p>License Expiry Date: {doctor.licenseExpiryDate}</p>
        </div>

        {/* Other Details */}
        <div className="border p-4 rounded-lg">
          <p>Date Joined: {doctor.dateJoined}</p>
          <p>Notes: {doctor.notes}</p>
        </div>
      </div>
    </div>
  );
}

export default Booking;
