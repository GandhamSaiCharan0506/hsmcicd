import { useState } from "react";

const PatientProfile = () => {
  const [profile, setProfile] = useState({
    name: "Ravi Kumar",
    age: "35",
    gender: "Male",
    phone: "9876543210",
    email: "ravi@example.com",
    bloodGroup: "O+",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setMessage("✅ Profile updated successfully!");
  };

  return (
    <div>
      <h2>My Profile</h2>

      <div className="section">
        <form className="form" onSubmit={handleSave}>
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Full Name"
          />

          <input
            name="age"
            value={profile.age}
            onChange={handleChange}
            placeholder="Age"
          />

          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <input
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            name="bloodGroup"
            value={profile.bloodGroup}
            onChange={handleChange}
            placeholder="Blood Group"
          />

          <button type="submit">Save Changes</button>
        </form>

        {message && (
          <p style={{ marginTop: "15px", fontWeight: "bold" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PatientProfile;
