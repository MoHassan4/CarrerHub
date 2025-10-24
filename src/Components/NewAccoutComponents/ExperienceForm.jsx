import experienceImg from "../../assets/experiencePage.jpg";

function ExperienceForm() {
  return (
    <>
      <div className="container">
        <form action="#" className="form-control p-4">
          <h3>Experience</h3>
          <p>
            Include at least one work experience to show employers your
            accomplishments so far.
          </p>
          <hr />
          <div>
            <div className="img-container w-100 d-flex justify-content-center">
              <img src={experienceImg} alt="img" />
            </div>
            <div className="exp-field d-flex flex-column flex-md-row justify-content-between gap-3">
              <button className="back-btn btn btn-outline-primary py-2 px-3">
                Back
              </button>
              <div className="exp-input d-flex flex-column flex-md-row gap-3">
                <button className="back-btn btn btn-outline-primary py-2 px-3">
                  No experience yet
                </button>
                <button className="btn btn-primary py-2 px-3">
                  Add experience
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ExperienceForm;
