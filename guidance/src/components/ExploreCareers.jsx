import React, { useState, useEffect }  from 'react'
import CareerCaraousel from './CareerCaraousel'
import NavBarTwo from './NavBarTwo';

function ExploreCareers() {
  const [careers, setCareers] = useState
  ([])
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  const [search, setSearch] = useState("")
  // const displayedCareers = careers.filter((career) =>
  //   career.name.toLowerCase().includes(search.toLowerCase())
  // );

useEffect(() => {
    fetch("http://localhost:3000/careers")
      .then((res) => res.json())
      .then((data) => {
        setCareers(data);
        console.log(careers);
      });
  }, []);
  if (!careers[0]) return null 
    console.log(careers);
    // console.log(search)

    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord); 
      const newFilter = careers.filter((value)=>{
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
        console.log(value.name)
      })
      if (searchWord === "") {
        setFilteredData([]); 
  
      } else {
        setFilteredData(newFilter)
      }
    }
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };


  return (
    <div>
      {/* <NavBarTwo /> */}
      <section className="bg-gray-50 py-4">
        <div className="container px-4 mx-auto">
          <h1 className="mb-4 text-2xl md:text-5xl leading-tight text-darkgray-900 font-bold tracking-tighter">
            Hi, Future Student!{" "}
          </h1>
          <div className="p-6 h-full border border-gray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
            <div className="pb-6 border-b border-gray-100">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-full md:w-auto p-2">
                  <h2 className="text-gray-900 text-lg font-semibold">
                    Explore Career Paths Below.{" "}
                  </h2>
                </div>
                <div className="w-full md:w-auto p-2">
                  <div className="flex flex-wrap justify-between -m-1.5">
                    <div className="w-full md:w-auto p-1.5"></div>
                    <div className="w-full md:w-auto p-1.5">
                      <button className="flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                        <p>Search</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-6 border-b border-gray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-gray-800 font-semibold">
                      Enter and Select Job Title{" "}
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Frontend Developer"
                      value={wordEntered}
                      // onChange={(e) => setSearch(e.target.value)}
                      onChange={handleFilter}
                    />
                    {filteredData.length != 0 && (
                      <div className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-200 rounded-lg shadow-input">
                        {filteredData.slice(0, 15).map((value, key) => {
                          return (
                            <a
                              className="w-full px-1 py-1 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-200 rounded-lg shadow-input"
                              href={value.link}
                              target="_blank"
                            >
                              <p>{value.name} </p>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="py-6 border-b border-gray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-gray-800 font-semibold">
                      Enter and Select Job Title{" "}
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <div className="relative">
                      <svg
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z"
                          fill="#8896AB"
                        ></path>
                      </svg>
                      <select className="appearance-none w-full py-2.5 px-4 text-gray-900 text-base font-normal bg-white border outline-none border-gray-200 focus:border-green-500 rounded-lg shadow-input">
                        <option>LumberJack</option>
                        <option>Doctor</option>
                        <option>Plumber</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <p className="mb-4 text-lg md:text-xl text-gray-500 font-medium py-10">
            Investing in education can be one of the biggest decisions you make
            in your life. With our website, you can calculate exactly how long
            it will take to recoup your investment based on your career path and
            earnings potential. Get a clear understanding of the financial
            benefits of your education and make informed decisions about your
            future.
          </p>
          <h3
            className="mb-4 text-xl md:text-3xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter"
            // contentEditable="false"
          >
            Looking for inspo? Check out the options below:{" "}
          </h3>
        </div>
      </section>
      <CareerCaraousel careers={careers} />
    </div>
  );
}

export default ExploreCareers