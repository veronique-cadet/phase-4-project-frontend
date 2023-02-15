import React from 'react'
import { Link } from "react-router-dom";

function CareerCaraousel() {
  return (
    <div>
      <section className="py-4 bg-coolGray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <div className="bg-white border rounded-md border-coolGray-100 shadow-dashboard">
                <div className="flex flex-wrap items-center justify-center p-6 pb-4 -m-2 border-b border-coolGray-100">
                  <div className="w-full p-2 lg:w-auto">
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-auto p-2">
                        <img
                          src="flex-ui-assets/images/dashboard/cards/avatar.png"
                          alt=""
                        />
                      </div>
                      <div className="w-auto">
                        <h2 className="text-sm font-medium text-coolGray-900">
                          Coal Miner
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-2 lg:w-auto"></div>
                </div>
                <div className="flex flex-wrap px-4 py-6 -m-2 border-b border-coolGray-100">
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold text-coolGray-900">
                        $4k
                      </p>
                      <p className="text-xs font-medium text-coolGray-400">
                        Total Cost
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold text-coolGray-900">
                        1 Year
                      </p>
                      <p
                        className="text-xs font-medium text-coolGray-400"
                        contenteditable="false"
                      >
                        Total Time
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold text-coolGray-900">
                        $1,000,000
                      </p>
                      <p className="text-xs font-medium text-coolGray-400">
                        Average Salary
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center p-6">
                  <div className="w-full p-2 lg:w-auto"></div>
                  <div className="w-full lg:w-auto">
                  <Link to="/careerdata"><button className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-green-500 rounded-md hover:bg-green-600 shadow-button">
                      <p>Show More Info</p>
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-3 md:w-1/3">
              <div className="bg-white border rounded-md border-coolGray-100 shadow-dashboard">
                <div className="flex flex-wrap items-center justify-center p-6 pb-4 -m-2 border-b border-coolGray-100">
                  <div className="w-full p-2 lg:w-auto">
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-auto p-2">
                        <img
                          src="flex-ui-assets/images/dashboard/cards/avatar.png"
                          alt=""
                        />
                      </div>
                      <div className="w-auto">
                        <h2 className="text-sm font-medium text-coolGray-900">
                          Gym Teacher
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-2 lg:w-auto"></div>
                </div>
                <div className="flex flex-wrap px-4 py-6 -m-2 border-b border-coolGray-100">
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold text-coolGray-900">
                        $24k
                      </p>
                      <p className="text-xs font-medium text-coolGray-400">
                        Total Cost
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold text-coolGray-900">
                        6 Years
                      </p>
                      <p
                        className="text-xs font-medium text-coolGray-400"
                        contenteditable="false"
                      >
                        Total Time
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold text-coolGray-900">
                        $84k
                      </p>
                      <p className="text-xs font-medium text-coolGray-400">
                        Average Salary
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center p-6">
                  <div className="w-full p-2 lg:w-auto"></div>
                  <div className="w-full lg:w-auto">
                    <button className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-green-500 rounded-md hover:bg-green-600 shadow-button">
                      <p>Show More Info</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-3 md:w-1/3">
              <div className="bg-white border rounded-md border-coolGray-100 shadow-dashboard">
                <div className="flex flex-wrap items-center justify-center p-6 pb-4 -m-2 border-b border-coolGray-100">
                  <div className="w-full p-2 lg:w-auto">
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-auto p-2">
                        <img
                          src="flex-ui-assets/images/dashboard/cards/avatar.png"
                          alt=""
                        />
                      </div>
                      <div className="w-auto">
                        <h2 className="text-sm font-medium text-coolGray-900">
                          Lumberjack
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-2 lg:w-auto"></div>
                </div>
                <div className="flex flex-wrap px-4 py-6 -m-2 border-b border-coolGray-100">
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold text-coolGray-900">
                        $24k
                      </p>
                      <p className="text-xs font-medium text-coolGray-400">
                        Total Cost
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold text-coolGray-900">
                        6 Years
                      </p>
                      <p
                        className="text-xs font-medium text-coolGray-400"
                        contenteditable="false"
                      >
                        Total Time
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs font-semibold text-coolGray-900">
                        $84k
                      </p>
                      <p className="text-xs font-medium text-coolGray-400">
                        Average Salary
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center p-6">
                  <div className="w-full p-2 lg:w-auto"></div>
                  <div className="w-full lg:w-auto">
                    <button className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-green-500 rounded-md hover:bg-green-600 shadow-button">
                      <p>Show More Info</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareerCaraousel