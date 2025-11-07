function SkillsProfile({ skill }) {
  return (
    <div className="skill-item text-start border-start border-4 border-warning ps-3 mb-2">
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="fw-bold mb-0">{skill}</h6>
        <button className="btn btn-danger badge">Delete</button>
      </div>
    </div>
  );
}

export default SkillsProfile;
