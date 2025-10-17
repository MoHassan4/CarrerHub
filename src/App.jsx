import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Login from "./Components/login/login";
import Signup from "./Components/signup/signup";
import "./css/NavBar.css";
import "./css/Footer.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
