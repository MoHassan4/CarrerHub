import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
