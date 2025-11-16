import { useState } from "react";
import PostedJobs from "../Components/CompanyDashboardComponents/PostedJobs";
import PostJob from "./PostJob";
import EditCompanyInfoForm from "../Components/CompanyDashboardComponents/EditCompanyInfoForm";
import ViewApplicants from "../Components/CompanyDashboardComponents/ViewApplicants";
import ApplicantProfile from "../Components/CompanyDashboardComponents/ApplicantProfile";

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState("addJob");

  const [selectedJobId, setSelectedJobId] = useState(null);
  const [selectedApplicantId, setSelectedApplicantId] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case "addJob":
        return <PostJob />;

      case "postedJobs":
        return (
          <PostedJobs
            onViewApplicants={(jobId) => {
              setSelectedJobId(jobId);
              setActiveTab("viewApplicants");
            }}
          />
        );

      case "editProfile":
        return <EditCompanyInfoForm />;

      case "viewApplicants":
        return (
          <ViewApplicants
            jobId={selectedJobId}
            onBack={() => setActiveTab("postedJobs")}
            onViewApplicant={(userId) => {
              setSelectedApplicantId(userId);
              setActiveTab("applicantProfile");
            }}
          />
        );

      case "applicantProfile":
        return (
          <ApplicantProfile
            jobId={selectedJobId}
            applicantId={selectedApplicantId}
            onBack={() => setActiveTab("viewApplicants")}
          />
        );

      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-12 col-md-3 col-lg-2 bg-dark text-light d-flex flex-column justify-content-between p-3 rounded">
          <div>
            <h3 className="text-center mb-4">Company</h3>

            <div className="nav flex-column nav-pills">
              <button
                className={`nav-link text-start ${
                  activeTab === "addJob" ? "active bg-primary" : "text-light"
                }`}
                onClick={() => setActiveTab("addJob")}
              >
                Add Job
              </button>

              <button
                className={`nav-link text-start ${
                  activeTab === "postedJobs"
                    ? "active bg-primary"
                    : "text-light"
                }`}
                onClick={() => setActiveTab("postedJobs")}
              >
                Posted Jobs
              </button>

              <button
                className={`nav-link text-start ${
                  activeTab === "editProfile"
                    ? "active bg-primary"
                    : "text-light"
                }`}
                onClick={() => setActiveTab("editProfile")}
              >
                Edit Profile
              </button>
            </div>
          </div>

          <button className="btn btn-danger w-100 mt-4">Logout</button>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10 p-4 bg-light rounded">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
