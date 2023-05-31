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
import { useState, useEffect } from "react";
import DataTable from "./components/DataTable";
import ContactPage from "./components/ContactPage";

function App() {
  const [careerId, setCareerId] = useState(0)
  const [yourPaths, setYourPaths] = useState([]);
  const [user, setUser] = useState(null);


   useEffect(() => {
     // auto-login
     const getUser = async () => {
       let req = await fetch("/me");
       let res = await req.json()
       console.log('res', res)
       setUser(res)
      }
      getUser()
   }, []);

    //  if (!user) return <Home onLogin={setUser} />;


  return (
    <div className="bg-tarnsparent">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn user={user} setUser={setUser}/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/carousel" element={<CareerCaraousel />}></Route>
        <Route path="/explore"  element={<ExploreCareers user={user} setUser={setUser} careerId={careerId} setCareerId={setCareerId} />}></Route>
        <Route path="/yourpaths" element={<YourPaths user={user} yourPaths={yourPaths} setYourPaths={setYourPaths}/>}></Route>
        <Route path="/careerdata" element={<CareerData user={user}  careerId={careerId} yourPaths={yourPaths} setYourPaths={setYourPaths}/>}></Route>
        <Route path="/editprofile" element={<EditProfile user={user}/>}></Route>
        <Route path="/card" element={<CarouselCard />}></Route>
        <Route path="/data" element={<DataTable />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
