import { useEffect, useState } from "react";
import "../../css/FindJobs.css";
import getJobsData from "../../services/getJobs.service";
import deleteJobData from "../../services/DeleteJobs.service";

function PostedJobs({ onViewApplicants }) {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await getJobsData();
        setJobsData(response.data.jobs || []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    }

    fetchJobs();
  }, []);

  const handleDeleteJob = async (jobId) => {
    try {
      await deleteJobData(jobId);

      // Update UI immediately after deletion
      setJobsData((prev) => prev.filter((job) => job._id !== jobId));
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  return (
    <>
      <div className="jobs-body">
        <div className="jobs-list">
          {jobsData.map((job) => (
            <div
              key={job._id}
              className="job posted-jobs border-top py-3 d-flex flex-column flex-md-row justify-content-between gap-3"
            >
              <div>
                <h4>{job.jobTitle}</h4>

                <div className="comp-container d-flex align-items-center gap-2 mb-2">
                  <p className="m-0">{job.jobLocation}</p>
                </div>

                <span className="bg-success-subtle px-1 rounded d-inline-block mb-2">
                  {job.jobType}
                </span>

                <p className="m-0 text-success">
                  {job.createdAt
                    ? new Date(job.createdAt).toLocaleDateString()
                    : ""}
                </p>
              </div>

              <div className="d-flex flex-column justify-content-center gap-3">
                <button
                  className="btn btn-success"
                  onClick={() => onViewApplicants(job._id)}
                >
                  View Applicants
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteJob(job._id)}
                >
                  Delete Job
                </button>
              </div>
            </div>
          ))}

          {jobsData.length === 0 && (
            <p className="text-center text-muted mt-4">No jobs posted yet.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default PostedJobs;
