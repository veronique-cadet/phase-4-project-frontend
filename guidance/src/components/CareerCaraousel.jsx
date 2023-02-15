import React from 'react'
import { Link } from "react-router-dom";

function CareerCaraousel({careers}) {
  // if (!careers[0]) return null 
  const showsInfo=(id)=>{
    console.log("showsinfo")
    console.log(careers[id])

  }
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
                        <h2 className="text-xl font-medium text-green-800">
                          {/* Coal Miner */}
                          {careers[0].name}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-2 lg:w-auto"></div>
                </div>
                <div className="flex flex-wrap px-4 py-6 -m-2 border-b border-coolGray-100">
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">

                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $4k */}
                        {`$` +
                          careers[0].avg_cost_edu
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}

                      </p>
                      <p className="text-xs font-medium text-coolGray-400">
                        Total Cost
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">

                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* 1 Year */}
                        {careers[0].time_to_complete + " years"}
                      </p>
                      <p
                        className="text-xs text-coolGray-400 font-medium"
                        // contentEditable="false"

                      >
                        Total Time
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">

                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $1,000,000 */}
                        {`$` +
                          careers[0].ave_salary
                            .toFixed(2)
 
                      </p>
                      <p className="text-xs font-medium text-coolGray-400">
                        Average Salary
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center p-6">
                  <div className="w-full p-2 lg:w-auto"></div>

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
                        <h2 className="text-xl font-medium text-green-800">
                          {/* Coal Miner */}
                          {careers[1].name}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-2 lg:w-auto"></div>
                </div>
                <div className="flex flex-wrap px-4 py-6 -m-2 border-b border-coolGray-100">
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">

                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $4k */}
                        {`$` +
                          careers[1].avg_cost_edu
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}

                      </p>
                      <p className="text-xs font-medium text-coolGray-400">
                        Total Cost
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">

                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* 1 Year */}
                        {careers[1].time_to_complete + " years"}
                      </p>
                      <p
                        className="text-xs text-coolGray-400 font-medium"
                        // contentEditable="false"

                      >
                        Total Time
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">
             <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $1,000,000 */}
                        {`$` +
                          careers[1].ave_salary
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
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

                    <button
                      className="flex flex-wrap justify-center w-full px-4 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button py-2"
                      onClick={() => showsInfo(0)}
                    >

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
                        <h2 className="text-xl font-medium text-green-800">
                          {/* Coal Miner */}
                          {careers[2].name}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-2 lg:w-auto"></div>
                </div>
                <div className="flex flex-wrap px-4 py-6 -m-2 border-b border-coolGray-100">
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">

                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $4k */}
                        {`$` +
                          careers[2].avg_cost_edu
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}

                      </p>
                      <p className="text-xs font-medium text-coolGray-400">
                        Total Cost
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">

                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* 1 Year */}
                        {careers[2].time_to_complete + " years"}
                      </p>
                      <p
                        className="text-xs text-coolGray-400 font-medium"
                        // contentEditable="false"

                      >
                        Total Time
                      </p>
                    </div>
                  </div>
                  <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div className="text-center">

                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $1,000,000 */}
                        {`$` +
                          careers[2].ave_salary
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}

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
          <button
                      className="flex flex-wrap justify-center w-full px-4 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button py-2"
                      onClick={() => showsInfo(0)}
                    >

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