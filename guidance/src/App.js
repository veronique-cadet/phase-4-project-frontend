import { Route, Routes, useResolvedPath } from "react-router-dom";

import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home"
import Footer from "./components/Footer"
import CareerCaraousel from "./components/CareerCaraousel";
import ExploreCareers from "./components/ExploreCareers";
import YourPaths from "./components/YourPaths";
import CareerData from "./components/CareerData";
import EditProfile from "./components/EditProfile";
import CarouselCard from "./components/CarouselCard";
import { useState } from "react";
import DataTable from "./components/DataTable";

function App() {
  const [careerId, setCareerId] = useState(0)
  const [yourPaths, setYourPaths] = useState([]);
  const [user, setUser] = useState(null);



  return (
    <div className="bg-tarnsparent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn user={user} setUser={setUser}/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/carousel" element={<CareerCaraousel />}></Route>
        <Route path="/explore"  element={<ExploreCareers user={user} setUser={setUser} careerId={careerId} setCareerId={setCareerId} />}></Route>
        <Route path="/yourpaths" element={<YourPaths user={user} yourPaths={yourPaths} setYourPaths={setYourPaths}/>}></Route>
        <Route path="/careerdata" element={<CareerData careerId={careerId} yourPaths={yourPaths} setYourPaths={setYourPaths}/>}></Route>
        <Route path="/editprofile" element={<EditProfile user={user}/>}></Route>
        <Route path="/card" element={<CarouselCard />}></Route>
        <Route path="/data" element={<DataTable />}></Route>
      </Routes>
    </div>
  );
}

export default App;
