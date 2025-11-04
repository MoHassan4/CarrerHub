function EducationProfile({ degree, university, duration }) {
  return (
    <div className="education-item text-start border-start border-4 border-warning ps-3">
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold mb-1">{degree}</h6>
        <button className="btn btn-danger badge">Delete</button>
      </div>
      <p className="mb-1 text-secondary">{university}</p>
      <small className="text-muted">{duration}</small>
    </div>
  );
}

export default EducationProfile;
