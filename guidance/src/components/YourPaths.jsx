import React from "react";
import NavBarTwo from "./NavBarTwo";
import YourPathsCard from "./YourPathsCard";
import { useState, useEffect } from "react";
import Footer from "./Footer.jsx";

function YourPaths({ yourPaths, setYourPaths, user, setUser }) {
  useEffect(() => {
    fetch("/paths")
      .then((response) => response.json())
      .then((data) => {
        setYourPaths(data);
        console.log(data);
      });
  }, []);


  const handleDelete = (id) => {
    fetch(`/paths/${id}`, {
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

  const filteredPaths = yourPaths.filter((path) => {
    if (user) return user?.id === path?.user?.id;
    else return path;
  


  });

  // const pathCard = filteredPaths.map((path) => {
  //   // if (!user.id) return null
  //   // else
  //   return <YourPathsCard setYourPaths={setYourPaths} path={path} key={path.id} id={path.id} yourPaths={yourPaths}/>;
  // });
  // console.log(";a;sjf")
  // console.log(user)
  // console.log(user.id)

  return (
    <div>
      <NavBarTwo setUser={setUser} />
      {user ? (
        <div>
          <h2 className="pb-5 mt-5 mb-4 text-4xl font-bold tracking-tighter text-center md:text-5xl text-coolGray-900">
            Your Paths&nbsp;
          </h2>
          {filteredPaths.map((path) => {
            return (
              <YourPathsCard
                handleDelete={handleDelete}
                setYourPaths={setYourPaths}
                path={path}
                key={path.id}
                id={path.id}
                yourPaths={yourPaths}
              />
            );
          })}
          {/* {pathCard} */}
        </div>
      ) : (
        <div>
          <h2 className="pb-5 mt-5 mb-4 text-4xl font-bold tracking-tighter text-center md:text-5xl text-coolGray-900">
            Your Paths&nbsp;
          </h2>
          <h3 className="pb-48 pt-32 mt-5 mb-4 text-2xl font-bold tracking-tighter text-center md:text-3xl text-gray-500">
            Hi there! Nothing to show yet. Sign In to create some potential paths and jump start your future!
          </h3>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default YourPaths;
