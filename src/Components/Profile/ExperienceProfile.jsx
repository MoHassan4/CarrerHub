

function ExperienceProfile({title, present, details}) {
    return (
      <>
        <div className="experience-item text-start border-start border-4 border-warning ps-3">
          <div className="d-flex justify-content-between">
            <h6 className="fw-bold mb-1">{title}</h6>
            <button className="btn btn-danger badge">Delete</button>
          </div>
          <p className="mb-1 text-secondary">{present}</p>
          <small className="text-muted">
            {details}
          </small>
        </div>
      </>
    );
}

export default ExperienceProfile;