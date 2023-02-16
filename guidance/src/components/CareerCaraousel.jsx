import React, { useState } from 'react'
import { Link } from "react-router-dom";
import CarouselCard from './CarouselCard';

function CareerCaraousel({careers}) {
  const showsInfo=(id)=>{
    console.log("showsinfo")
    console.log(careers[id])
  }
  const [threeCareers, setThreeCareers] = useState(careers.slice(0,3))
  return (
    <div>
      <section className="py-4 bg-coolGray-50">
        <div className="container px-4 mx-auto flex justify-evenly">
                <div className="flex flex-wrap -m-3">

          {threeCareers.map((career)=>{
            return <CarouselCard key={career.id} career={career} />

          })}              
              </div>
        </div>
      </section>
    </div>
  );
}

export default CareerCaraousel