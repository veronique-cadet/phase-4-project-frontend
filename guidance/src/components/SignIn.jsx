import React, {useState} from "react";
import SignUp from "./SignUp";
import { Link, Outlet, useNavigate } from "react-router-dom";

function SignIn({user,setUser}) {

  // const [user, setUser] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  const signIn =(e)=>{
    e.preventDefault()

    fetch(`/login`, {
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
        navigate("/explore");
      })
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
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Sign in to your account
              </h3>
              <p className="text-lg font-medium text-coolGray-500">
                Continue your journey here
              </p>
            </div>
            <form action="">
              <div className="mb-6">
                <label
                  className="block mb-2 font-medium text-coolGray-800"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  placeholder="student@guidance.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 font-medium text-coolGray-800"
                  htmlFor=""
                >
                  Password
                </label>
                <input
                  className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
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
                      className="appearance-none form-checkbox"
                      type="checkbox"
                    />
                    <img
                      className="absolute left-0 transform -translate-y-1/2 top-1/2"
                      src="flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                      alt=""
                    />
                    <span className="text-xs font-medium ml-7 text-coolGray-800">
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="w-full mt-1 md:w-auto">
                  <a
                    className="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button
                className="inline-block w-full py-3 mb-6 text-base font-medium leading-6 text-center bg-green-500 rounded-md shadow-sm px-7 text-green-50 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
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