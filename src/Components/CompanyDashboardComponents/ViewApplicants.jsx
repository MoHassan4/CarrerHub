import { useEffect, useState } from "react";
import getApplicantsData from "../../services/GetApplicants.service";

function ViewApplicants({ jobId, onBack, onViewApplicant }) {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApplicants() {
      try {
        const response = await getApplicantsData(jobId);

        console.log("Applicants response:", response.data);

        const data = response?.data?.applicants || [];
        setApplicants(data);
      } catch (err) {
        console.error("Error fetching applicants:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchApplicants();
  }, [jobId]);

  if (loading) return <p>Loading applicants...</p>;
  if (applicants.length === 0) return <p>No applicants found for this job.</p>;

  return (
    <div>
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        ← Back to Posted Jobs
      </button>

      <h2>Applicants for the Job</h2>

      <div className="mt-3">
        {applicants.map((applicant) => (
          <div
            key={applicant.applicationId}
            className="border rounded p-3 mb-3 d-flex flex-column flex-md-row justify-content-between align-items-center"
          >
            <div>
              <h5 className="mb-1">
                {applicant.user.firstName} {applicant.user.lastName}
              </h5>
              <p className="mb-1">
                <strong>Email:</strong> {applicant.user.email}
              </p>
              <p className="mb-1">
                <strong>Target Job:</strong>{" "}
                {applicant.profile.targetJobTitle || "N/A"}
              </p>
              <p className="mb-1">
                <strong>Status:</strong> {applicant.status}
              </p>
              <p className="mb-0">
                <strong>Applied At:</strong>{" "}
                {new Date(applicant.appliedAt).toLocaleDateString()}
              </p>
            </div>

            <div className="mt-2 mt-md-0">
              <button
                className="btn btn-primary"
                onClick={() => onViewApplicant(applicant.user._id)}
              >
                View Applicant
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewApplicants;
