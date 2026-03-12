const PatientDashboard = () => {
  return (
    <div>
      <h2>Patient Dashboard</h2>

      <div className="dashboard-grid">
        <div className="card">
          📅 Upcoming Appointments
          <p style={{ marginTop: "8px", fontSize: "14px" }}>
            24 July 2026 — Dr. Rajesh Kumar
          </p>
        </div>

        <div className="card">
          💊 Active Prescriptions
          <p style={{ marginTop: "8px", fontSize: "14px" }}>
            3 ongoing medications
          </p>
        </div>

        <div className="card">
          🧾 Medical Records
          <p style={{ marginTop: "8px", fontSize: "14px" }}>
            Last updated 2 weeks ago
          </p>
        </div>

        <div className="card">
          🧠 Health Status
          <p style={{ marginTop: "8px", fontSize: "14px" }}>
            Stable condition
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
