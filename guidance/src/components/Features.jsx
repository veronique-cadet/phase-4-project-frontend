import React from "react";

function Features() {
  return (
    <div>
      <section
        className="py-24 bg-white md:py-28"
        style={{
          backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/3">
              <div className="h-full p-8 text-center transition duration-200 rounded-md hover:bg-white hover:shadow-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-white bg-green-500 rounded-lg mb-7">
                  <img src="./education.png" />
                </div>
                <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
                  Education Analytics
                </h3>
                <p className="font-medium text-coolGray-500">
                  Determine the cost and duration of the education required for
                  a specific career path
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <div className="h-full p-8 text-center transition duration-200 rounded-md hover:bg-white hover:shadow-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-white bg-green-500 rounded-lg mb-7">
                  <img src="./money.png" />
                </div>
                <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
                  Career Information
                </h3>
                <p className="font-medium text-coolGray-500">
                  Estimate potential career earnings and the duration needed to
                  recoup education costs
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <div className="h-full p-8 text-center transition duration-200 rounded-md hover:bg-white hover:shadow-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-white bg-green-500 rounded-lg mb-7">
                  <img src="./career.png" />
                </div>
                <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
                  Compare Different Paths
                </h3>
                <p className="font-medium text-coolGray-500">
                  Easily compare all career options with clear data by having
                  them organized in one place
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
