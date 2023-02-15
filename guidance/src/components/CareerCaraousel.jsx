import React from 'react'

function CareerCaraousel({careers}) {
  // if (!careers[0]) return null 
  const showsInfo=(id)=>{
    console.log("showsinfo")
    console.log(careers[id])

  }
  return (
    <div>
      <section className="bg-coolGray-50 py-4">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                <div className="flex flex-wrap items-center p-6 pb-4 -m-2 border-b border-coolGray-100 justify-center">
                  <div className="w-full lg:w-auto p-2">
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
                  <div className="w-full lg:w-auto p-2"></div>
                </div>
                <div className="flex flex-wrap px-4 py-6 border-b border-coolGray-100 -m-2">
                  <div className="w-full md:w-1/2 p-2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $4k */}
                        {`$` +
                          careers[0].avg_cost_edu
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      </p>
                      <p className="text-xs text-coolGray-400 font-medium">
                        Total Cost
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-2 lg:w-1/3">
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
                  <div className="w-full md:w-1/2 p-2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $1,000,000 */}
                        {`$` +
                          careers[0].ave_salary
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      </p>
                      <p className="text-xs text-coolGray-400 font-medium">
                        Average Salary
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap p-6 justify-center">
                  <div className="w-full lg:w-auto p-2"></div>
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

            <div className="w-full md:w-1/3 p-3">
              <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                <div className="flex flex-wrap items-center p-6 pb-4 -m-2 border-b border-coolGray-100 justify-center">
                  <div className="w-full lg:w-auto p-2">
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
                  <div className="w-full lg:w-auto p-2"></div>
                </div>
                <div className="flex flex-wrap px-4 py-6 border-b border-coolGray-100 -m-2">
                  <div className="w-full md:w-1/2 p-2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $4k */}
                        {`$` +
                          careers[1].avg_cost_edu
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      </p>
                      <p className="text-xs text-coolGray-400 font-medium">
                        Total Cost
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-2 lg:w-1/3">
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
                  <div className="w-full md:w-1/2 p-2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $1,000,000 */}
                        {`$` +
                          careers[1].ave_salary
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      </p>
                      <p className="text-xs text-coolGray-400 font-medium">
                        Average Salary
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap p-6 justify-center">
                  <div className="w-full lg:w-auto p-2"></div>
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

            <div className="w-full md:w-1/3 p-3">
              <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                <div className="flex flex-wrap items-center p-6 pb-4 -m-2 border-b border-coolGray-100 justify-center">
                  <div className="w-full lg:w-auto p-2">
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
                  <div className="w-full lg:w-auto p-2"></div>
                </div>
                <div className="flex flex-wrap px-4 py-6 border-b border-coolGray-100 -m-2">
                  <div className="w-full md:w-1/2 p-2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $4k */}
                        {`$` +
                          careers[2].avg_cost_edu
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      </p>
                      <p className="text-xs text-coolGray-400 font-medium">
                        Total Cost
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-2 lg:w-1/3">
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
                  <div className="w-full md:w-1/2 p-2 lg:w-1/3">
                    <div className="text-center">
                      <p className="mb-1 text-xs text-green-500 font-semibold">
                        {/* $1,000,000 */}
                        {`$` +
                          careers[2].ave_salary
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      </p>
                      <p className="text-xs text-coolGray-400 font-medium">
                        Average Salary
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap p-6 justify-center">
                  <div className="w-full lg:w-auto p-2"></div>
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