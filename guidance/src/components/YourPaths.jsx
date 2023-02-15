import React from 'react'
import NavBarTwo from "./NavBarTwo"
import YourPathsCard from './YourPathsCard'
import {useState, useEffect} from 'react'
import Footer from "./Footer.jsx"

function YourPaths() {

const [yourPaths, setYourPaths] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/paths")
    .then((response) => response.json())
    .then((data) => {setYourPaths(data)
      console.log(data)
    }
    );
}, []);


const pathCard = yourPaths.map((path) => {return <YourPathsCard path= {path} key= {path.id} />})


  return (
    <div>
      <NavBarTwo />
      <h2 className="pb-5 mb-4 text-4xl font-bold tracking-tighter text-center md:text-5xl text-coolGray-900">Your Paths&nbsp;</h2>
    {pathCard}
    <Footer />
    </div>
  )
}

export default YourPaths