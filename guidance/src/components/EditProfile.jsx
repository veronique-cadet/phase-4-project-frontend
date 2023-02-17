import React, {useState} from 'react'
import NavBarTwo from './NavBarTwo'
import Footer from "./Footer.jsx"
import { Link } from "react-router-dom";

function EditProfile({user}) {

  const [first, setFirst] = useState(user.first_name)
  const [last, setLast] = useState(user.last_name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")
console.log(user)
  
  return (
    <div>
      <NavBarTwo />
      <section className="py-4 bg-white">
  <div className="container p-16 px-4 mx-auto">
    <div className="h-full overflow-hidden bg-white rounded-md">
      <div className="pb-6 border-b border-coolGray-100">
        <div className="flex flex-wrap items-center justify-between -m-2">
          <div className="w-full p-2 md:w-auto">
            <h2 className="text-lg font-semibold text-coolGray-900" contenteditable="false">Personal info</h2>
            <p className="text-xs font-medium text-coolGray-500" contenteditable="false">Edit Information Here</p>
          </div>
          <div className="w-full p-2 md:w-auto">
            <div className="flex flex-wrap justify-between -m-1.5">
              <div className="w-full md:w-auto p-1.5">
              <Link to="/explore"><button className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-md text-coolGray-500 hover:text-gray-600 hover:border-coolgray-300 shadow-button">
                  <p>Cancel</p>
                </button></Link>
              </div>
              <div className="w-full md:w-auto p-1.5">
                <button className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-green-500 rounded-md hover:bg-green-600 shadow-button">
                  <p>Save</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-sm font-semibold text-coolGray-800">Name</p>
            </div>
            <div className="w-full p-3 md:w-1/3">
              <input value={first} onChange={(e) => setFirst(e.target.value)} className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="John"/>
            </div>
            <div className="w-full p-3 md:w-1/3">
              <input value={last} onChange={(e) => setLast(e.target.value)}className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="Doe"/>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-sm font-semibold text-coolGray-800">Email address</p>
            </div>
            <div className="w-full p-3 md:flex-1">
              <input value={email} onChange={(e) => setEmail(e.target.value)}className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="johndoe@flex.co"/>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-sm font-semibold text-coolGray-800" contenteditable="false">Password</p>
            </div>
            <div className="w-full p-3 md:flex-1">
              <input value={password} onChange={(e) => setPassword(e.target.value)}className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="password"/>
            </div>
          </div>
        </div>
      </div>





    </div>
  </div>
</section>
    <Footer />
    </div>
  )
}

export default EditProfile