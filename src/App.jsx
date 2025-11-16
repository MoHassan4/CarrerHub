import { Routes, Route } from "react-router";
import NavBar from "./Components/shared/NavBar.jsx";
import Footer from "./Components/shared/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/login.jsx";
import PrevSignup from "./Pages/prevSignup.jsx";
import Signup from "./Pages/signup.jsx";
import JopSearch from "./Pages/JopSearch.jsx";
import JobsByLocation from "./Pages/JobsByLocation.jsx";
import FindJobs from "./Pages/FindJobs.jsx";
import PageNotFound from "./Components/pageNotFound/PageNotFound.jsx";
import About from "./Pages/About.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import FAQ from "./Pages/faq.jsx";

import CompanyHome from "./Pages_Company/CompanyHome.jsx";
import PostJob from "./Pages_Company/PostJob.jsx";
import CompanyDashboard from "./Pages_Company/CompanyDashboard.jsx";
import CompanyPostDetails from "./Pages_Company/CompanyPostDetails.jsx";
import CompanySignup from "./Pages_Company/CompanySignUp.jsx";
import CompanyInfoForm from "./Pages_Company/CompanyInfoForm.jsx";
import CompanyLogin from "./Pages_Company/CompanyLogin.jsx";

import "./css/cssShared/NavBar.css";
import "./css/cssShared/Footer.css";
import "./App.css";
import CreateNewAccount from "./Pages/CreateNewAccount.jsx";
import Profile from "./Pages/Profile";
import AppliedJobs from "./Pages/AppliedJobs.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/prev-signup" element={<PrevSignup />}></Route>
        <Route
          path="/create-new-account"
          element={<CreateNewAccount />}
        ></Route>
        <Route path="/jopSearch" element={<JopSearch />}></Route>
        <Route path="/jobs-by-location" element={<JobsByLocation />}></Route>
        <Route path="/find-jobs/:q?/:country?" element={<FindJobs />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/applied-jobs" element={<AppliedJobs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        {/* company routes */}
        <Route path="/company-home" element={<CompanyHome />}></Route>
        <Route path="/company-post-job" element={<PostJob />}></Route>
        <Route path="/company-dashboard" element={<CompanyDashboard />}></Route>
        <Route
          path="/company-dashboard/company-post-details"
          element={<CompanyPostDetails />}
        ></Route>
        <Route path="/company-signup" element={<CompanySignup />}></Route>
        <Route path="/company-info-form" element={<CompanyInfoForm />}></Route>
        <Route path="/company-login" element={<CompanyLogin />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
