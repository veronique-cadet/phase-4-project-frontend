import React, {useState} from "react";
import SignUp from "./SignUp";
import { Link, Outlet } from "react-router-dom";

function SignIn() {

  const [user, setUser] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  
  const signIn =(e)=>{
    e.preventDefault()
    console.log("arjdg;joe")

    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        console.log(user)
      })
      .then()

    }
// console.log(user)
  return (
    <div>
      <section
        className="py-24 md:py-32 bg-white background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
        // style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <a className="inline-block mb-6" href="#">
                <Link to="/home">
                  <img className="h-16" src="./booklogo.png" alt="" />
                </Link>
              </a>
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Sign in to your account
              </h3>
              <p className="text-lg text-coolGray-500 font-medium">
                Continue your journey here
              </p>
            </div>
            <form action="">
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  placeholder="student@guidance.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="password"
                  placeholder="************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="w-full md:w-1/2">
                  <label className="relative inline-flex items-center">
                    <input
                      className="form-checkbox appearance-none"
                      type="checkbox"
                    />
                    <img
                      className="absolute top-1/2 transform -translate-y-1/2 left-0"
                      src="flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                      alt=""
                    />
                    <span className="ml-7 text-xs text-coolGray-800 font-medium">
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="w-full md:w-auto mt-1">
                  <a
                    className="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
                onClick={signIn}
              >
                Sign In
              </button>
              <p className="text-center">
                <span className="text-xs font-medium">
                  Don’t have an account?
                </span>
                <a
                  className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                  href="#"
                >
                  <Link to="/SignUp"> Sign Up</Link>
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
