function PersonalDetails() {
  return (
    <>
      <div className="container">
        <form action="#" className="form-control p-4">
          <h3>Personal Details</h3>
          <p>Tell us a bit about you to get started</p>
          <hr />
          <div className="form-body d-flex flex-column gap-3 pb-5">
            <img
              src="https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg"
              alt="profile pic"
              className="w-25 rounded-circle"
            />
            <div className="names-input d-flex flex-column flex-md-row gap-3">
              <div className="fn-field d-flex flex-column w-100">
                <label htmlFor="fn" className="form-label">
                  First name *
                </label>
                <input
                  type="text"
                  name="fn"
                  id="fn"
                  className="p-2 rounded border-1"
                />
              </div>
              <div className="ln-field d-flex flex-column w-100">
                <label htmlFor="ln" className="form-label">
                  Last name *
                </label>
                <input
                  type="text"
                  name="ln"
                  id="ln"
                  className="p-2 rounded border-1"
                />
              </div>
            </div>
            <div className="bd-inputs d-flex flex-column">
              <label htmlFor="bd" className="form-label">
                Birth date *
              </label>
              <input
                type="date"
                name="bd"
                id="bd"
                className="p-2 rounded border-1"
              />
            </div>
            <div className="res-country-input d-flex flex-column">
              <label htmlFor="res-country" className="form-label">
                Residence country *
              </label>
              <select
                id="res-country"
                name="res-country"
                className="p-2 rounded border-1"
                required
              >
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
            </div>
            <div className="nationality d-flex flex-column">
              <label htmlFor="na" className="form-label">
                Nationality *
              </label>
              <select
                id="na"
                name="na"
                className="p-2 rounded border-1"
                required
              >
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
            </div>
            <div className="gender-input">
              <p className="form-label">Gender *</p>
              <div className="m-or-f d-flex gap-3">
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male" className="user-select-none">
                  Male
                </label>
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female" className="user-select-none">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="form-btns d-flex justify-content-between">
            <button className="back-btn btn btn-outline-primary py-2 px-3">
              Back
            </button>
            <button type="submit" className="btn btn-primary py-2 px-3">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonalDetails;
