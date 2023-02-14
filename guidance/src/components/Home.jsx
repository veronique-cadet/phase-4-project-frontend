import React from 'react'
import NavBar from "./NavBar.jsx"
import Features from './Features.jsx'
import Footer from "./Footer.jsx"
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="bg-tarnsparent">
      <NavBar />
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                Unlock the Full Potential of Your Education
              </h1>
              <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                See how long your education investment will take to pay off and
                plan for a securce financial path.
              </p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                    href="#"
                  >
                    Sign Up for Free
                  </a>
                </div>
                <div className="w-full md:w-auto py-1 md:py-0">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                    href="#"
                  >
                    Log In
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <Link to="/explore">
                <img
                  className="absolute z-10 -left-14 -top-12 w-18"
                  src="./circle1-yellow.svg"
                  alt=""
                />
                <img
                  className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                  src="./dots3-blue.svg"
                  alt=""
                />
                <img
                  className="relative rounded-7xl"
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwxMjV8fHNjaG9vbCUyMG1vbmV5fGVufDB8fHx8MTY3NjMzMDY1Mg&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                  alt=""
                />

                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Home