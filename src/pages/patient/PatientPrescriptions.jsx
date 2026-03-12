const PatientPrescriptions = () => {
  return (
    <div>
      <h2>My Prescriptions</h2>

      <div className="dashboard-grid">
        <div className="card">
          <h4>Cardiology Treatment</h4>
          <p>Doctor: Dr. Rajesh Kumar</p>
          <p>Medicine: Amlodipine 5mg</p>
          <p>Duration: 30 days</p>
        </div>

        <div className="card">
          <h4>General Medicine</h4>
          <p>Doctor: Dr. Suresh Rao</p>
          <p>Medicine: Paracetamol 500mg</p>
          <p>Duration: 5 days</p>
        </div>

        <div className="card">
          <h4>Respiratory Care</h4>
          <p>Doctor: Dr. Priya Reddy</p>
          <p>Medicine: Inhaler</p>
          <p>Duration: Ongoing</p>
        </div>
      </div>
    </div>
  );
};

export default PatientPrescriptions;
