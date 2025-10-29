import TargetJobForm from "../Components/NewAccoutComponents/TargetJobForm";
import PersonalDetails from "../Components/NewAccoutComponents/PersonalDetails";
import ExperienceForm from "../Components/NewAccoutComponents/ExperienceForm";
import EducationForm from "../Components/NewAccoutComponents/EducationForm";
import "../Components/NewAccoutComponents/CreateNewAccount.css";
import { useState } from "react";

function CreateNewAccount() {
  const [step, setStep] = useState(1);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  // For Experience Form
  const nextStepExperience = (data) => {
    if (data) {
      setExperiences((prev) => [...prev, data]);
      console.log("Saved experiences:", [...experiences, data]);
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  // For Education Form
  const createAccount = (data) => {
    if (data) {
      setEducations((prev) => [...prev, ...data]);
      console.log("Saved educations:", [...educations, ...data]);
    }
    alert("Account created!");
  };

  const backStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <TargetJobForm next={() => setStep(2)} back={backStep} />;
      case 2:
        return <PersonalDetails next={() => setStep(3)} back={backStep} />;
      case 3:
        return <ExperienceForm next={nextStepExperience} back={backStep} />;
      case 4:
        return <EducationForm back={backStep} createAccount={createAccount} />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h2 className="text-center pb-3">
        Create New Account (Step {step} of 4)
      </h2>
      {renderStep()}
    </div>
  );
}

export default CreateNewAccount;
