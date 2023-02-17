import React, { useState } from 'react'
import { Link } from "react-router-dom";
import CarouselCard from './CarouselCard';

function CareerCaraousel({careers, careerId, setCareerId}) {
  const showsInfo=(id)=>{
    console.log("showsinfo")
    console.log(id)
    setCareerId(careerId)
  }
  const [threeCareers, setThreeCareers] = useState(careers.slice(0,3))

  const random = careers[Math.floor(Math.random() * careers.length)]
  console.log("look")
  console.log(random)
  
  return (
    <div>
      <section className="py-4 bg-coolGray-50">
        <div className="container flex px-4 mx-auto justify-evenly">
                <div className="flex flex-wrap -m-3">

          {threeCareers.map((career)=>{
            return <CarouselCard key={career.id} career={career} showsInfo={showsInfo} careerId={careerId}/>

          })}              
              </div>
        </div>
      </section>
    </div>
  );
}

export default CareerCaraousel