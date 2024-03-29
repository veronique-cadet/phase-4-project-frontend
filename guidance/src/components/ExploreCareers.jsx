import React, { useState, useEffect, useReducer } from "react";
import CareerCaraousel from "./CareerCaraousel";
import NavBarTwo from "./NavBarTwo";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function ExploreCareers({ careerId, setCareerId, user, setUser }) {
  const [careers, setCareers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [career, setCareer] = useState([]);
  const [search, setSearch] = useState("");
  const [itemClicked, setItemClicked] = useState(false);

  useEffect(() => {
    fetch("/careers")
      .then((res) => res.json())
      .then((data) => {
        setCareers(data);
      });
  }, []);
  if (!careers[0]) return null;

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    setItemClicked(false);

    const newFilter = careers.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      <NavBarTwo setUser={setUser}/>
      <section className="py-4 bg-gray-50">
        <div className="container px-4 mx-auto">
          {user ? (
            <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tighter md:text-5xl text-darkgray-900">
              Hello, {user.first_name}!
            </h1>
          ) : (
            <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tighter md:text-5xl text-darkgray-900">
              Hello, Future Student!
            </h1>
          )}
          <div className="h-full p-6 overflow-hidden bg-white border border-gray-100 rounded-md shadow-dashboard">
            <div className="pb-6 border-b border-gray-100">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-full p-2 md:w-auto">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Explore Career Paths Below.{" "}
                  </h2>
                </div>
                <div className="w-full p-2 md:w-auto">
                  <div className="flex flex-wrap justify-between -m-1.5">
                    <div className="w-full md:w-auto p-1.5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-gray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full p-3 md:w-1/3">
                    <p className="text-sm font-semibold text-gray-800">
                      Enter and Select Job Title{" "}
                    </p>
                  </div>
                  <div className="w-full p-3 md:flex-1">
                    <input
                      className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Frontend Developer"
                      value={wordEntered}
                      onChange={handleFilter}
                    />
                    {filteredData.length != 0 && !itemClicked && (
                      <div className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-200 rounded-lg shadow-input">
                        {filteredData.slice(0, 15).map((value, key) => {
                          return (
                            <a
                              className="w-1/2 px-1 py-1 text-base font-normal text-green-900 borderrounded-lg outline-none focus:border-green-500 shadow-input break-after-all"
                              href={value.link}
                              target="_blank"
                              onClick={() => {
                                setWordEntered(value.name);
                                setCareer(value);
                                setItemClicked(true);
                              }}
                            >
                              <p>{value.name} </p>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-auto p-1.5">
                    <Link to="/careerdata" state={{ from: career }}>
                      <button className="flex flex-wrap justify-center w-full px-6 py-4 text-sm font-medium text-white bg-green-500 border border-green-500 rounded-md hover:bg-green-600 shadow-button">
                        <p>Search</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="py-10 mb-4 text-lg font-medium text-gray-600 md:text-xl">
            Investing in education can be one of the biggest decisions you make
            in your life. With our website, you can calculate exactly how long
            it will take to recoup your investment based on your career path and
            earnings potential. Get a clear understanding of the financial
            benefits of your education and make informed decisions about your
            future.
          </p>
          <h3
            className="mb-4 text-xl font-bold leading-tight tracking-tighter md:text-3xl text-darkCoolGray-900"
            // contentEditable="false"
          >
            Looking for inspo? Check out the options below:{" "}
          </h3>
        </div>
      </section>
      <CareerCaraousel
        careers={careers}
        careerId={careerId}
        setCareerId={setCareerId}
      />
      <Footer />
    </div>
  );
}

export default ExploreCareers;
