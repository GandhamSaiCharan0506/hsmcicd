const MedicalHistory = () => {
  return (
    <div>
      <h2>Medical History</h2>

      <div className="section">
        <h3>Recent Visits</h3>

        <div className="card" style={{ marginBottom: "15px" }}>
          <strong>15 June 2026 — Cardiology Checkup</strong>
          <p>Doctor: Dr. Rajesh Kumar</p>
          <p>Diagnosis: Mild hypertension</p>
        </div>

        <div className="card" style={{ marginBottom: "15px" }}>
          <strong>12 March 2026 — General Consultation</strong>
          <p>Doctor: Dr. Suresh Rao</p>
          <p>Diagnosis: Viral fever</p>
        </div>
      </div>

      <div className="section">
        <h3>Past Conditions</h3>
        <ul>
          <li>Asthma (since 2018)</li>
          <li>Hypertension (since 2024)</li>
        </ul>
      </div>
    </div>
  );
};

export default MedicalHistory;
