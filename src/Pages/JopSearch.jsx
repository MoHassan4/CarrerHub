import { Link } from "react-router-dom";
import Header from "../Components/shared/Header";
import SearchForm from "../Components/shared/SearchForm";

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
    </div>
  );
}

export default JopSearch;
