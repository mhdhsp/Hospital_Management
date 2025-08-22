import axios from "axios";
import React, { useEffect, useState } from "react";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://localhost:7023/api/Doctor", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
console.log(doctors);

  if (loading) return <p>Loading doctors...</p>;
  if (doctors.length === 0) return <p>No doctors found.</p>;

  return (
    <div>
      {doctors.map((item) => (
        <div
          key={item.Id}
          style={{ border: "1px solid #131111ff", margin: "10px", padding: "10px" }}
        >
          <h2>{item.name}</h2>
          <p>Specialization: {item.department}</p>
          <p>Phone: {item.Phone}</p>
        </div>
      ))}
    </div>
  );
}

export default Doctors;
