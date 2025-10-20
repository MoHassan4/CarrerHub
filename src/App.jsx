import { Routes, Route } from "react-router";
import NavBar from "./Components/shared/NavBar.jsx";
import Footer from "./Components/shared/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/login.jsx";
import Signup from "./Pages/signup.jsx";
import JopSearch from "./Pages/JopSearch.jsx";
import JobsByLocation from "./Pages/JobsByLocation.jsx";
import PageNotFound from "./Components/pageNotFound/PageNotFound.jsx";

import "./css/cssShared/NavBar.css";
import "./css/cssShared/Footer.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/jopSearch" element={<JopSearch />}></Route>
        <Route path="/jobs-by-location" element={<JobsByLocation />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
