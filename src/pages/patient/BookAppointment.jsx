import { useState } from "react";

const doctorsData = {
  Cardiology: ["Dr. Rajesh Kumar", "Dr. Meena Patel"],
  Neurology: ["Dr. Anitha Sharma"],
  Orthopedics: ["Dr. Vikram Singh"],
  Pediatrics: ["Dr. Priya Reddy"],
};

const BookAppointment = () => {
  const [form, setForm] = useState({
    patientName: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
    paymentMethod: "",
  });

  const [message, setMessage] = useState("");

  const consultationFee = 500;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.patientName ||
      !form.department ||
      !form.doctor ||
      !form.date ||
      !form.time ||
      !form.paymentMethod
    ) {
      setMessage("⚠️ Please fill all required fields.");
      return;
    }

    setMessage("✅ Appointment booked and payment successful!");

    setForm({
      patientName: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      reason: "",
      paymentMethod: "",
    });
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <div className="section">
        <form className="form" onSubmit={handleSubmit}>

          {/* PATIENT DETAILS */}
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={form.patientName}
            onChange={handleChange}
          />

          {/* DEPARTMENT */}
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
          </select>

          {/* DOCTOR */}
          <select
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            disabled={!form.department}
          >
            <option value="">Select Doctor</option>
            {form.department &&
              doctorsData[form.department].map((doc, i) => (
                <option key={i}>{doc}</option>
              ))}
          </select>

          {/* DATE & TIME */}
          <input type="date" name="date" value={form.date} onChange={handleChange} />
          <input type="time" name="time" value={form.time} onChange={handleChange} />

          {/* REASON */}
          <textarea
            name="reason"
            placeholder="Reason for visit"
            rows="3"
            value={form.reason}
            onChange={handleChange}
          />

          {/* PAYMENT SECTION */}
          <div className="section" style={{ marginTop: "10px" }}>
            <h3>Payment Details</h3>

            <p><strong>Consultation Fee:</strong> ₹{consultationFee}</p>

            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
            >
              <option value="">Select Payment Method</option>
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>Cash at Hospital</option>
            </select>
          </div>

          <button type="submit">Confirm & Pay</button>
        </form>

        {/* SUCCESS MESSAGE */}
        {message && (
          <div className="card" style={{ marginTop: "20px" }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
