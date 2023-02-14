import { Route, Routes } from "react-router-dom";

import './App.css';
import SignIn from "./components/SignIn";
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-tarnsparent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
