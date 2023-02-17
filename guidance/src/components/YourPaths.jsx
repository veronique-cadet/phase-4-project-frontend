
import React from 'react'
import NavBarTwo from "./NavBarTwo"
import YourPathsCard from './YourPathsCard'
import {useState, useEffect} from 'react'
import Footer from "./Footer.jsx"


function YourPaths({yourPaths, setYourPaths, user}) {


  useEffect(() => {
    fetch("http://localhost:3000/paths")
      .then((response) => response.json())
      .then((data) => {
        setYourPaths(data);
        console.log(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/paths/${id}`, {
      method: "DELETE"
    })
      // .then((response) => response.json())
      // .then(() => {
      //   const updatedPaths = yourPaths.filter(path => path.id !== id)
     
      // });
      const updatedPaths = yourPaths.filter(path => path.id !== id)
      setYourPaths(updatedPaths);
  };
  console.log(yourPaths)

  const filteredPaths = yourPaths.filter((path) => {return user.id === path.user.id })
  

  const pathCard = filteredPaths.map((path) => {
    return <YourPathsCard handleDelete={handleDelete} setYourPaths={setYourPaths} path={path} key={path.id} id={path.id} yourPaths={yourPaths}/>;
  });

  return (
    <div>
      <NavBarTwo />

      <h2 className="pb-5 mt-5 mb-4 text-4xl font-bold tracking-tighter text-center md:text-5xl text-coolGray-900">Your Paths&nbsp;</h2>
    {pathCard}
    <Footer />

    </div>
  );
}

export default YourPaths;
