import { Link } from "react-router-dom";
import Header from "./shared/Header";
import SearchForm from "./shared/SearchForm";

function JopSearch() {
  const popularJobTitles = [
    { title: "Frontend Developer", number: 820 },
    { title: "Backend Developer", number: 801 },
    { title: "Full Stack Developer", number: 20 },
    { title: "UI/UX Designer", number: 1630 },
    { title: "Mobile App Developer", number: 150 },
    { title: "Data Analyst", number: 130 },
    { title: "Machine Learning Engineer", number: 180 },
    { title: "DevOps Engineer", number: 3146 },
    { title: "QA Tester", number: 80 },
    { title: "Cybersecurity Specialist", number: 4350 },
    { title: "Database Administrator", number: 130 },
    { title: "Cloud Engineer", number: 80 },
    { title: "Software Engineer", number: 8430 },
    { title: "Game Developer", number: 4310 },
    { title: "System Analyst", number: 6770 },
    { title: "IT Support Specialist", number: 3240 },
  ];

  const arabicCountries = [
    { name: "Egypt", jobs: 9820 },
    { name: "Saudi Arabia", jobs: 8760 },
    { name: "United Arab Emirates", jobs: 7450 },
    { name: "Kuwait", jobs: 6120 },
    { name: "Qatar", jobs: 6890 },
    { name: "Bahrain", jobs: 4130 },
    { name: "Oman", jobs: 5370 },
    { name: "Jordan", jobs: 4580 },
    { name: "Lebanon", jobs: 3640 },
    { name: "Palestine", jobs: 2780 },
    { name: "Syria", jobs: 2950 },
    { name: "Iraq", jobs: 5240 },
    { name: "Yemen", jobs: 2130 },
    { name: "Sudan", jobs: 3410 },
    { name: "Libya", jobs: 3120 },
    { name: "Tunisia", jobs: 4860 },
    { name: "Algeria", jobs: 6590 },
    { name: "Morocco", jobs: 5830 },
    { name: "Mauritania", jobs: 1760 },
    { name: "Somalia", jobs: 1940 },
    { name: "Comoros", jobs: 1180 },
    { name: "Djibouti", jobs: 1320 },
  ];

  return (
    <div className="container pb-3 pt-4">
      <Header
        h1="Find the job you"
        inSpan="love"
        p="Join the Middle East's #1 job site"
      />

      <SearchForm />

      <div className="popular-jop-titles bg-light p-4 rounded-3 d-flex flex-column gap-4">
        <h3>Popular jobs</h3>
        <div className="row">
          {popularJobTitles.map((job, index) => (
            <div key={index} className="col-12 col-md-6 mb-2">
              <div className="d-flex justify-content-between border-bottom py-1">
                <Link className="text-decoration-none orange fw-semibold">
                  {job.title}
                </Link>
                <span className="text-muted">{job.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="jop-by-country bg-light p-4 rounded-3 d-flex flex-column gap-4 mt-5">
        <h3>Jobs by country</h3>
        <div className="row">
          {arabicCountries.map((job, index) => (
            <div key={index} className="col-12 col-md-6 mb-2">
              <div className="d-flex justify-content-between border-bottom py-1">
                <Link className="text-decoration-none orange fw-semibold">
                  {job.name}
                </Link>
                <span className="text-muted">{job.jobs}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JopSearch;
