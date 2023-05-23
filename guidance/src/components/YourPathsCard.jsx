import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function YourPathsCard({ yourPaths, path, setYourPaths, id, handleDelete }) {
  const [priority, setPriority] = useState(path.priority);
  const [bgColor, setBgColor] = useState("");

const career = path?.career
  
  useEffect(() => {
    setBgColor(getBgColor(priority));
  }, [priority]);

  const refresh = () => {
    fetch("/paths")
      .then((response) => response.json())
      .then((data) => {
        setYourPaths(data);
        console.log(data);
      });
  };

  const handlePriority = (newPriorityValue) => {
    const newPriority = {
      priority: newPriorityValue,
    };

    console.log(newPriorityValue);
    fetch(`/paths/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPriority),
    })
      .then((response) => response.json())
      .then(() => {
        setPriority(newPriorityValue);
        console.log("help");
        refresh();
      });
  };

  const loanTotal = path.loan_amt * path.interest_rate * path.loan_term;
  const totalEdu = loanTotal + path.career.avg_cost_edu;
  const breakEven = parseFloat(totalEdu / path.career.ave_salary);

  const getBgColor = (priorityValue) => {
    let color;
    if (priorityValue === 1) {
      color = "bg-green-400";
    } else if (priorityValue === 2) {
      color = "bg-yellow-400";
    } else if (priorityValue === 3) {
      color = "bg-orange-400";
    } else if (priorityValue === 4) {
      color = "bg-red-400";
    } else {
      color = "bg-gray-400";
    }
    return color;
  };

  return (
    <section className="transition duration-200 rounded-md bg-gray-50">
     
      <div className="bg-white">
        <div className="content-center pt-10 pb-8 mb-10 ml-5 mr-5 overflow-hidden transition duration-200 bg-white border-2 border-green-500 rounded-md shadow-dashboard hover:bg-white hover:shadow-2xl">
          <div className="overflow-x-scroll md:overflow-x-auto">
            <table className="w-full transition duration-200 rounded-md border-none ">
              <tbody className="">
                <tr
                  className={`${bgColor} xl:max-2xl:whitespace-nowrap sm:max-xl:whitespace-normal h-11 bg-opacity-80  `}
                >
                  <th className="pl-3 sm:text-sm text-xs font-medium text-left text-white  uppercase  w-0 sm:max-md:pr-10 ">
                    CAREER
                  </th>
                  <th className="sm:text-sm text-xs font-medium text-center text-white uppercase  w-0 sm:max-md:pr-10 ">
                    AVG COST OF&nbsp; TUITION
                  </th>
                  <th className="sm:text-sm text-xs font-medium text-center text-white uppercase  w-0 sm:max-lg:pr-10 ">
                    TIME TO COMPLETE
                  </th>
                  <th className="sm:text-sm text-xs font-medium text-center text-white uppercase w-0 sm:max-md:pr-10 ">
                    AVG SALARY
                  </th>
                  <th className="sm:text-sm text-xs font-medium text-center text-white uppercase  w-0 sm:max-md:pr-10">
                    LOAN INTEREST
                  </th>
                  <th className="sm:text-sm text-xs font-medium text-center text-white uppercase  w-0 sm:max-md:pr-10">
                    EST TOTAL COST OF EDUCATION
                  </th>
                  <th className="sm:text-sm text-xs font-medium text-center text-white uppercase w-0 sm:max-md:pr-10">
                    BREAK EVEN
                  </th>
                  <th className="sm:text-sm text-xs font-medium text-center text-white uppercase  w-0 sm:max-md:pr-10">
                    PRIORITY
                  </th>
                  <th className="sm:text-sm text-xs font-medium text-center text-white uppercase  w-0 sm:max-md:pr-10">
                    Remove
                  </th>
                </tr>
                <tr className=" h-18">
                  <th className="py-2 text-left bg-white max-w-0 pr-32 ">
                  <Link to="/careerdata" state={{ from: career }}>
                    <div className="flex items-center w-48 break-words">
                      <div className="w-auto p-1 sm:p-2">
                        <div className="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 text-xs sm:text-base font-medium rounded-md">
                          <img src="./career.png" alt="Career" />
                        </div>
                      </div>
                      <div className="p-2 w-35">
                        <p className="text-gray-800 break-words text-sm sm:text-sm ">
                          {path.career.name}
                        </p>
                      </div>
                    </div>
                    </Link>
                  </th>
                  <th className="px-8 md:px-16 lg:px-16 text-xs sm:text-sm text-center text-green-500 whitespace-nowrap ">
                    $
                    {path.career.avg_cost_edu
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </th>
                  <th className="text-gray-800 px-4 text-xs sm:text-sm text-center whitespace-nowrap">
                    {path.career.time_to_complete}&nbsp;years
                  </th>
                  <th className="px-4 text-xs sm:text-sm text-center text-green-500 whitespace-nowrap">
                    $
                    {path.career.ave_salary
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </th>
                  <th className="px-4 text-xs sm:text-sm text-center text-green-500 whitespace-nowrap ">
                    $
                    {loanTotal
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </th>
                  <th className="px-4 text-xs sm:text-sm text-center text-green-500 whitespace-nowrap">
                    $
                    {totalEdu
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </th>
                  <th className="text-gray-800 px-4 text-xs sm:text-sm text-center whitespace-nowrap">
                    {breakEven.toFixed(2)} years
                  </th>
                  <th className="text-gray-800 px-4 text-xs sm:text-sm text-center whitespace-nowrap">
                    <select
                      name="cars"
                      id="cars"
                      value={priority}
                      onChange={(e) => {
                        const newPriorityValue = parseInt(e.target.value);
                        const newBgColor = getBgColor(newPriorityValue);
                        setPriority(newPriorityValue);
                        setBgColor(newBgColor);
                        handlePriority(newPriorityValue);
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4"> 4 </option>
                    </select>
                  </th>
                  <th className="px-4 text-lg text-center text-gray-800 bg-white whitespace-nowrap md:text-xl">
                    <img
                      onClick={() => handleDelete(id)}
                      src="./garbage.png"
                      className="object-contain ml-auto mr-auto  w-6 h-6"
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </section>
  );
}

export default YourPathsCard;
