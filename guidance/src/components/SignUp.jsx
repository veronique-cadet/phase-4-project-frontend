import React, {useState} from "react";

import { Link, useNavigate } from "react-router-dom";


function SignUp() {

const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [signUpEmail,setSignUpEmail] = useState('')
const [signUpPassword,setSignUpPassword] = useState('')
const navigate = useNavigate()

  const handleSignUp =(e)=>{
    e.preventDefault()
    console.log("clicked")

    fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name:firstName,
        last_name:lastName,
        email:signUpEmail, 
        password:signUpPassword 
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // setUser(data)
        console.log(data)
      
      })
      .then(navigate("/signin"))

    }

  return (
    <div>
      <section
        className="relative pt-16 pb-0 md:py-32 bg-white background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
        // className="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
      >
        <div className="container px-4 mx-auto mb-16">
          <div className="w-full md:w-3/5 lg:w-1/2">
            <div className="max-w-sm mx-auto">
              <div className="mb-6 text-center">
                <a className="inline-block mb-6" href="#">
                <Link to="/home">
                <img
                  className="h-16"
                  src="./booklogo.png"
                  alt=""
                />
                 </Link>
                </a>
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                  Create an Account
                </h3>
                <p className="text-lg font-medium text-coolGray-500">
                  Start your journey with Guidance
                </p>
              </div>
              <form action="">
                <div className="mb-6">
                  <label
                    className="block mb-2 font-medium text-coolGray-800"
                    htmlFor=""
                  >
                    First Name*
                  </label>
                  <input
                    className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="name"
                    placeholder="Hassan"
                    value = {firstName}
                    onChange = {(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-2 font-medium text-coolGray-800"
                    htmlFor=""
                  >
                    Last Name*
                  </label>
                  <input
                    className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="name"
                    placeholder="Razak"
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-2 font-medium text-coolGray-800"
                    htmlFor=""
                  >
                    Email*
                  </label>
                  <input
                    className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="name"
                    placeholder="student@guidance.edu"
                    value = {signUpEmail}
                    onChange = {(e) => setSignUpEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 font-medium text-coolGray-800"
                    htmlFor=""
                  >
                    Password*
                  </label>
                  <input
                    className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="password"
                    placeholder="************"
                    value = {signUpPassword}
                    onChange = {(e) => setSignUpPassword(e.target.value)}
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
                  className="inline-block w-full py-3 mb-4 text-base font-medium leading-6 text-center bg-green-500 rounded-md shadow-sm px-7 text-green-50 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  href="#"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                <a
                  className="inline-flex items-center justify-center w-full py-3 mb-6 text-base font-medium leading-6 text-center bg-white border rounded-md shadow-sm px-7 text-coolGray-500 border-coolGray-100 hover:border-coolGray-200"
                  href="#"
                >
                  <img
                    className="mr-2"
                    src="flex-ui-assets/elements/sign-up/google-icon-sign-up.svg"
                    alt=""
                  />
                  <span>Sign in with Google</span>
                </a>
                <p className="text-center">
                  <span className="text-xs font-medium">
                    Already have an account? 
                  </span>
                  <a
                    className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                    href="#"
                  > 
                    <Link to="/SignIn"> Log In</Link>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <img
          className="mx-auto md:absolute md:top-0 md:right-0 md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw0NHx8c3R1ZGVudHxlbnwwfHx8fDE2NzYzODk1NTI&ixlib=rb-4.0.3&q=80&w=1920"
          alt=""
        />
      </section>
    </div>
  );
}

export default SignUp;
