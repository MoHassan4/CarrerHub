import TargetJobForm from "../Components/NewAccoutComponents/TargetJobForm";
import PersonalDetails from "../Components/NewAccoutComponents/PersonalDetails";
import ExperienceForm from "../Components/NewAccoutComponents/ExperienceForm";
import "../Components/NewAccoutComponents/CreateNewAccount.css";

function CreateNewAccount() {
  return (
    <>
      <div className="container">
        <TargetJobForm />
        <PersonalDetails />
        <ExperienceForm />
      </div>
    </>
  );
}

export default CreateNewAccount;
