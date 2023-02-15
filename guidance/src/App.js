import { Route, Routes } from "react-router-dom";

import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home"
import Footer from "./components/Footer"
import CareerCaraousel from "./components/CareerCaraousel";
import ExploreCareers from "./components/ExploreCareers";
import YourPaths from "./components/YourPaths";

function App() {
  return (
    <div className="bg-tarnsparent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/carousel" element={<CareerCaraousel />}></Route>
        <Route path="/explore" element={<ExploreCareers />}></Route>
        <Route path="/yourpaths" element={<YourPaths />}></Route>
      </Routes>
    </div>
  );
}

export default App;
