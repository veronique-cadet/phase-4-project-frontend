import React, { useState, useEffect } from "react";
import NavBarTwo from "./NavBarTwo";
import Footer from "./Footer.jsx";
import DataTable from "./DataTable";
import { useLocation } from "react-router-dom";

function CareerData({ careerId, yourPaths, setYourPaths, user }) {
  // console.log(careerId);
  const career = useLocation();
  const { from } = career.state?.from;
  //don't delete the below console log
  console.log(career.state?.from.id);
  const id = career.state?.from.id;

  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [interest, setInterest] = useState(0);
  const [currentCareer, setCurrentCareer] = useState({});
  const [isClicked, setIsCLicked] = useState(true);
  // const [currentCareer, setCurrentCareer] = useState({});

  useEffect(() => {
    fetch(`/careers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentCareer(data);
        // console.log(data);
        // console.log("???");
        // console.log(currentCareer);
      });
  }, []);

  const handleSubmit = () => {
    console.log(yourPaths);
    console.log(newPath);
    fetch("/paths", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPath),
    })
      .then((response) => response.json())
      .then(() => {
        setYourPaths([...yourPaths, newPath]);
        console.log(yourPaths);
      });
  };

  const newPath = {
    priority: 1,
    loan_amt: amount,
    interest_rate: interest,
    loan_term: term,
    user_id: user.id,
    career_id: currentCareer.id,
  };
  if (!currentCareer.name) return null;
  if (!career.state?.from.id) return null;
  // console.log(currentCareer)

  return (
    <div>
      <NavBarTwo />
      <div className="">
        <body className="antialiased bg-body text-body font-body">
          <div className="pl-40 pr-40">
            <section className="mt-10 transition duration-200 bg-white rounded-md hover:bg-white">
              <div className="flex flex-wrap items-center m-2 mb-5">
                <div className="w-full p-2 md:w-1/2">
                  <div className="flex flex-wrap -m-2 ">
                    <div className="w-auto">
                      <img
                        src="flex-ui-assets/images/dashboard/pages/flex-ui-green-circle.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ">
                      <h2 className="mb-2 text-4xl font-semibold text-black ">
                        {currentCareer.name}
                      </h2>
                      <p className="pb-1 text-lg text-gray-500">
                        {" "}
                        {currentCareer.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 md:w-1/2">
                  <div className="flex flex-wrap justify-end -m-2">
                    <div className="w-full p-2 md:w-auto">
                      {}
                      <button className="flex flex-wrap items-center justify-center w-full px-4 py-3 text-base font-medium text-gray-500 bg-white border border-gray-200 rounded-md hover:bg-gray-100 shadow-button">
                        <a
                          href="https://www.google.com/"
                          className="hover:bg-gray-100"
                          target="_blank"
                        >
                          Learn More 
                        </a>
                      </button>
                    </div>
                    <div className="w-full p-2 md:w-auto">
                      {isClicked ? (
                        <button
                          onClick={() => {
                            handleSubmit();
                            setIsCLicked(!isClicked);
                          }}
                          className="flex flex-wrap items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-green-500 rounded-md hover:bg-green-600 shadow-button"
                        >
                          <svg
                            className="mr-2"
                            width="20"
                            height="20"
                            viewbox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18V18ZM14 9H11V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5C9.73479 5 9.48043 5.10536 9.2929 5.29289C9.10536 5.48043 9 5.73478 9 6V9H6C5.73479 9 5.48043 9.10536 5.2929 9.29289C5.10536 9.48043 5 9.73478 5 10C5 10.2652 5.10536 10.5196 5.2929 10.7071C5.48043 10.8946 5.73479 11 6 11H9V14C9 14.2652 9.10536 14.5196 9.2929 14.7071C9.48043 14.8946 9.73479 15 10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14V11H14C14.2652 11 14.5196 10.8946 14.7071 10.7071C14.8946 10.5196 15 10.2652 15 10C15 9.73478 14.8946 9.48043 14.7071 9.29289C14.5196 9.10536 14.2652 9 14 9Z"
                              fill="#D5DAE1"
                            ></path>
                          </svg>
                          <span>Add to Paths</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setIsCLicked(!isClicked);
                          }}
                          className="flex flex-wrap items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-green-500 rounded-md hover:bg-green-600 shadow-button"
                        >
                          <svg
                            className="mr-2"
                            width="20"
                            height="20"
                            viewbox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18V18ZM14 9H11V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5C9.73479 5 9.48043 5.10536 9.2929 5.29289C9.10536 5.48043 9 5.73478 9 6V9H6C5.73479 9 5.48043 9.10536 5.2929 9.29289C5.10536 9.48043 5 9.73478 5 10C5 10.2652 5.10536 10.5196 5.2929 10.7071C5.48043 10.8946 5.73479 11 6 11H9V14C9 14.2652 9.10536 14.5196 9.2929 14.7071C9.48043 14.8946 9.73479 15 10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14V11H14C14.2652 11 14.5196 10.8946 14.7071 10.7071C14.8946 10.5196 15 10.2652 15 10C15 9.73478 14.8946 9.48043 14.7071 9.29289C14.5196 9.10536 14.2652 9 14 9Z"
                              fill="#D5DAE1"
                            ></path>
                          </svg>
                          <span>Added!</span>
                        </button>
                      )}
                    </div>
                    <div className="w-full md:w-auto"></div>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0 ">
              <div className="w-full px-4 mt-5 transition duration-200 rounded-lg mb-7 md:w-1/2 md:mb-0 hover:bg-white hover:shadow-2xl">
                <h2 className="pt-2 pb-3 mb-4 text-3xl font-bold leading-tight tracking-tighter text-center  text-darkgray-900">
                  Education
                </h2>

                <p className="mb-4 text-base text-center">
                  Minimum Education Required:{" "}
                  <p className="font-bold">{currentCareer.min_edu_req}</p>
                </p>
                <section
                  className=" bg-white pt-7"
                  style={{
                    backgroundImage:
                      "url('flex-ui-assets/elements/pattern-white.svg')",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap pb-5 -mx-4 text-center justify-evenly">
                      <div className="w-full px-4 mb-8  lg:w-1/4 lg:mb-0 ">
                        <h2 className="mb-2 text-xl font-bold tracking-tighter text-green-500 ">
                          $
                          {(
                            currentCareer.avg_cost_edu /
                            currentCareer.time_to_complete
                          )

                            .toFixed(0)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        </h2>
                        <p className="text-md font-medium text-gray-500 ">
                          Average Tuition Per Year
                        </p>
                      </div>
                      <div className="w-full px-4 mb-8 md:w-1/3 lg:w-1/4 lg:mb-0">
                        <h2 className="mb-2 text-xl font-bold tracking-tighter text-gray-900 ">
                          {currentCareer.time_to_complete} years
                        </h2>
                        <p className="text-md font-medium text-gray-500 ">
                          Average time 
                        </p>
                      </div>
                      <div className="w-full px-4 mb-8 md:w-1/3 lg:w-1/4 lg:mb-0">
                        <h2 className="mb-2 text-xl font-bold tracking-tighter text-green-500">
                          $
                          {currentCareer.avg_cost_edu
                            .toFixed(0)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        </h2>
                        <p className="text-md font-medium text-gray-500 text-center">
                          Total Tuition
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <img
                  className="content-center ml-auto mr-auto h-25 w-25 rounded-7xl"
                  src="./booklogo.png"
                  alt=""
                />
              </div>
              <div className="w-full px-4 mt-5 mb-4 transition rounded-lg duration-5 ration-200 md:w-1/2 md:mb-0 hover:bg-white hover:shadow-2xl">
                <h2 className="pt-2 mb-4 text-3xl font-bold leading-tight tracking-tighter text-center  text-darkgray-900">
                  Salary
                </h2>

                <p className="text-base text-center mb-2">
                  How much do {currentCareer.name}s make?
                </p>

                <section className="pb-4 bg-gray-50">
                  <div className="container px-4 mx-auto">
                    <div className="h-full p-6 pb-0 mx-auto overflow-hidden bg-white border border-gray-100 rounded-md shadow-dashboard">
                      <div className="flex flex-col items-center justify-between -m-2 overflow-scroll">
                        <div className="w-auto p-2">
                          <h2 className="text-md text-center font-semibold text-gray-900">
                            Average Salary : $
                            {currentCareer.ave_salary
                              .toFixed(0)
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                          </h2>
                        </div>
                        <div className="w-full md:max-2xl:w-full xl:w-auto md:p-2">
                          <DataTable
                            currentCareer={currentCareer}
                            setCurrentCareer={setCurrentCareer}
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="chart-graph7-stacked"></div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="w-full px-4 mt-5 transition duration-200 rounded-lg mb-7 md:w-1/2 md:mb-0 hover:bg-white hover:shadow-2xl">
                <h2 className="pt-2 font-bold leading-tight tracking-tighter text-center text-3xl text-darkgray-900 mb-5">
                  Loans
                </h2>

                <p className="px-6 mb-6 text-base text-center">
                  We understand that loans can be a complex and daunting topic
                  for many people. That’s why we’re here to help.{" "}
                  <a
                    className="text-green-500 font-bold"
                    target="_blank"
                    href="https://studentaid.gov/understand-aid/types/loans"
                  >
                    Click here{" "}
                  </a>
                  to learn more about loans and how we can assist you in
                  navigating the borrowing process. 
                </p>

                <div className="mb-6">
                  <label
                    className="block mb-2 font-medium text-gray-800"
                    for=""
                  >
                    Loan Amount
                  </label>
                  <input
                    className="w-full px-4 py-3 leading-tight text-gray-500 placeholder-gray-500 border border-gray-200 rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="number"
                    name="field-name"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.valueAsNumber)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block mb-2 font-medium text-gray-800"
                    for=""
                  >
                    Loan Term
                  </label>
                  <input
                    className="w-full px-4 py-3 leading-tight text-gray-500 placeholder-gray-500 border border-gray-200 rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="number"
                    name="field-name"
                    placeholder="Enter Amount"
                    value={term}
                    onChange={(e) => setTerm(e.target.valueAsNumber)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block mb-2 font-medium text-gray-800"
                    for=""
                  >
                    Interest Rate
                  </label>
                  <input
                    className="w-full px-4 py-3 leading-tight text-gray-500 placeholder-gray-500 border border-gray-200 rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="number"
                    name="field-name"
                    placeholder="Enter Amount"
                    value={interest}
                    onChange={(e) => setInterest(e.target.valueAsNumber)}
                  />
                </div>
              </div>
              <div className="w-full px-4 mt-5 mb-4 rounded-lg ration-200 mgtransition md:w-1/2 md:mb-0 hover:bg-white hover:shadow-2xl">
                <h2 className="pt-2 mb-5 text-3xl font-bold leading-tight tracking-tighter text-center  text-darkgray-900">
                  Summary
                </h2>

                <p className="px-10 text-base text-center ">
                  Investing
                  <span className="font-bold text-green-500">
                    {" "}
                    $
                    {currentCareer.avg_cost_edu
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
                  </span>
                  and{" "}
                  <span className="font-bold">
                    {currentCareer.time_to_complete} years{" "}
                  </span>
                  of education to become a Nurse Technician may seem like a
                  significant commitment, but the potential long-term financial
                  benefits are worth considering. Based on the average total
                  salary of{" "}
                  <span className="font-bold text-green-500">
                    {" "}
                    $
                    {currentCareer.ave_salary
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
                  </span>
                  per year, you can expect to break even on your investment
                  within approximately{" "}
                  <span className="font-bold">
                    {(
                      currentCareer.avg_cost_edu / currentCareer.ave_salary
                    ).toFixed(2)}{" "}
                    years
                  </span>
                  .
                </p>

                <section
                  className="bg-white"
                  style={{
                    backgroundImage:
                      "url('flex-ui-assets/elements/pattern-white.svg')",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap pb-5 -mx-4 text-center justify-evenly pt-12">
                      <div className="w-full px-4 mb-8  lg:w-1/4 lg:mb-0">
                        <h2 className="mb-2 text-xl font-bold tracking-tighter text-green-500 ">
                          $
                          {currentCareer.avg_cost_edu
                            .toFixed(0)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        </h2>
                        <p className="text-md font-medium text-gray-500 ">
                          Total Education Cost
                        </p>
                      </div>
                      <div className="w-full px-4 mb-8  lg:w-1/4 lg:mb-0">
                        <h2 className="mb-2 text-xl font-bold tracking-tighter text-green-500 ">
                          $
                          {currentCareer.ave_salary
                            .toFixed(0)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        </h2>
                        <p className="text-md font-medium text-gray-500 ">
                          Potential Salary
                        </p>
                      </div>
                      <div className="w-full px-4 mb-8  lg:w-1/4 lg:mb-0">
                        <h2 className="mb-2 text-xl font-bold tracking-tighter text-gray-900 ">
                          {(
                            currentCareer.avg_cost_edu /
                            currentCareer.ave_salary
                          )
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
                          years
                        </h2>
                        <p className="text-md font-medium text-gray-500 ">
                          Breakeven
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <form action="#" method="post">
              <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                <div className="w-full px-4 mb-4 md:w-1/3 md:mb-0">
                  <div className="mb-6"></div>
                </div>
                <div className="w-full px-4 mb-4 md:w-1/3 md:mb-0"></div>
              </div>
            </form>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
          <script src="js/charts-demo.js"></script>
        </body>
      </div>
      <Footer />
    </div>
  );
}

export default CareerData;
