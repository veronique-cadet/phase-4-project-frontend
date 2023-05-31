import React from "react";
import NavBar from "./NavBar.jsx";
import Features from "./Features.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="bg-tarnsparent">
        <NavBar />
        <div className="py-2 md:py-10 lg:py-12 xl:py-8">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4 xl:items-center">
              <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
                <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Unlock the Full Potential of Your Education
                </h1>
                <p className="mb-8 text-lg font-medium text-gray-500 md:text-xl">
                  See how long your education investment will take to pay off
                  and plan for a secure financial path.
                </p>
                <div className="flex flex-wrap">
                  <div className="w-full py-1 md:w-auto md:py-0 md:mr-4">
                    <a
                      className="inline-block w-full py-5 text-base font-medium leading-4 text-center bg-green-500 border border-green-500 rounded-md shadow-sm px-7 md:text-lg text-green-50 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      href="#"
                    >
                      <Link to="/signup"> Sign up For Free</Link>
                    </a>
                  </div>
                  <div className="w-full py-1 md:w-auto md:py-0">
                    <a
                      className="inline-block w-full py-5 text-base font-medium leading-4 text-center bg-white border border-gray-200 rounded-md shadow-sm px-7 md:text-lg text-coolGray-800 hover:bg-gray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50"
                      href="#"
                    >
                      <Link to="/signin"> Log In</Link>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
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
                      src="/grad2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
