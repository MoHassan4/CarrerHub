function TargetJobForm() {
  return (
    <>
      <div className="container">
        <form action="#" className="form-control p-4">
          <h3>Hi Name, Whats Your dream job?</h3>
          <p>
            Set your target job to help employers find the right fit for you.
          </p>
          <hr />
          <div className="form-body d-flex flex-column gap-3">
            <label htmlFor="job-levels" className="form-label">
              Target Job Level *
            </label>
            <select id="job-levels" className="p-2 rounded" required>
              <option value="" selected disabled></option>
              <option value="">Fresh/Student</option>
              <option value="">Entry Level</option>
              <option value="">Mid Level</option>
              <option value="">Senior Level</option>
              <option value="">Management</option>
            </select>
            <label htmlFor="job-titles" className="form-label">
              Target Job Title *
            </label>
            <input
              list="job-titles"
              className="p-2 rounded border border-dark"
              required
            />
            <datalist id="job-titles">
              <option value="Frontend web developer"></option>
              <option value="Backend web developer"></option>
              <option value="Mobile developer"></option>
              <option value="Fullstack developer"></option>
              <option value=".Net developer"></option>
              <option value="Software engineer"></option>
              <option value="Database admin"></option>
              <option value="DevOps engineer"></option>
              <option value="Software tester"></option>
            </datalist>
            <label htmlFor="job-location" className="form-label">
              Target Job Location *
            </label>
            <select id="job-location" className="p-2 rounded" required>
              <option value="" selected disabled></option>
              <option value="">Egypt</option>
              <option value="">UAE</option>
              <option value="">Saudi Arabia</option>
              <option value="">Kuwait</option>
              <option value="">Qatar</option>
              <option value="">Bahrain</option>
              <option value="">Morocco</option>
              <option value="">Tunisia</option>
              <option value="">Algeria</option>
              <option value="">Libya</option>
              <option value="">Sudan</option>
              <option value="">Jordan</option>
              <option value="">Lebanon</option>
              <option value="">Oman</option>
              <option value="">Iraq</option>
              <option value="">Palestine</option>
            </select>
            <button
              type="submit"
              className="btn btn-primary py-2 px-3 my-4 align-self-center w-50"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TargetJobForm;
