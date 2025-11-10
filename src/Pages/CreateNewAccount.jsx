import TargetJobForm from "../Components/NewAccoutComponents/TargetJobForm";
import PersonalDetails from "../Components/NewAccoutComponents/PersonalDetails";
import SkillsForm from "../Components/NewAccoutComponents/SkillsForm";
import ExperienceForm from "../Components/NewAccoutComponents/ExperienceForm";
import EducationForm from "../Components/NewAccoutComponents/EducationForm";
import "../Components/NewAccoutComponents/CreateNewAccount.css";
import { useState } from "react";
import Swal from "sweetalert2";

import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";

function CreateNewAccount() {
  const navegate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const decoded = jwtDecode(token);
  const userId = decoded._id;

  const [step, setStep] = useState(1);

  const finishAccount = async (skillsData) => {
    try {
      console.log("All steps completed!");
      console.log("Skills:", skillsData);

      await Swal.fire({
        title: "🎉 Account Created!",
        text: "Your account has been created successfully.",
        icon: "success",
        confirmButtonText: "Go to Home",
        confirmButtonColor: "#3085d6",
      });

      navegate("/");
      window.location.reload();
    } catch (err) {
      console.error("Error finishing account:", err);

      Swal.fire({
        title: "❌ Error",
        text: "Something went wrong while finishing your profile.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#d33",
      });
    }
  };

  const backStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <TargetJobForm next={() => setStep(2)} userID={userId} />;
      case 2:
        return (
          <PersonalDetails
            next={() => setStep(3)}
            back={backStep}
            userID={userId}
          />
        );
      case 3:
        return (
          <ExperienceForm
            next={() => setStep(4)}
            back={backStep}
            userID={userId}
          />
        );
      case 4:
        return (
          <EducationForm
            next={() => setStep(5)}
            back={backStep}
            userID={userId}
          />
        );
      case 5:
        return (
          <SkillsForm next={finishAccount} back={backStep} userID={userId} />
        );

      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h2 className="text-center pb-3">
        Create New Account (Step {step} of 5)
      </h2>
      {renderStep()}
    </div>
  );
}

export default CreateNewAccount;
