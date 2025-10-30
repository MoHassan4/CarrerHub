import { Routes, Route } from "react-router";
import NavBar from "./Components/shared/NavBar.jsx";
import Footer from "./Components/shared/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/login.jsx";
import Signup from "./Pages/signup.jsx";
import JopSearch from "./Pages/JopSearch.jsx";
import JobsByLocation from "./Pages/JobsByLocation.jsx";
import FindJobs from "./Pages/FindJobs.jsx";
import PageNotFound from "./Components/pageNotFound/PageNotFound.jsx";

import CompanyHome from "./Pages_Company/CompanyHome.jsx";
import PostJob from "./Pages_Company/PostJob.jsx";
import CompanyDashboard from "./Pages_Company/CompanyDashboard.jsx";

import "./css/cssShared/NavBar.css";
import "./css/cssShared/Footer.css";
import "./App.css";
import CreateNewAccount from "./Pages/CreateNewAccount.jsx";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/create-new-account"
          element={<CreateNewAccount />}
        ></Route>
        <Route path="/jopSearch" element={<JopSearch />}></Route>
        <Route path="/jobs-by-location" element={<JobsByLocation />}></Route>
        <Route path="/find-jobs" element={<FindJobs />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/company-home" element={<CompanyHome />}></Route>
        <Route path="/company-post-job" element={<PostJob />}></Route>
        <Route path="/company-dashboard" element={<CompanyDashboard />}></Route>

        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
