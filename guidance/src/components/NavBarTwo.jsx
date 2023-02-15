import React from 'react'
import { Link } from "react-router-dom";

function NavBarTwo() {
 
  return (
    <div className="bg-white">
    <nav className="flex justify-between p-6 px-4">
      <div className="flex items-center justify-between w-full">
        <div className="xl:w-1/3">
          <a className="block max-w-max" href="#">
   <img className="h-14" src="./logo.png" alt="logo"/>
          </a>
        </div>
        <div className="hidden xl:block xl:w-1/3">
          <ul className="flex justify-center">

            <li className="mr-12"><a className="font-medium text-coolGray-500 hover:text-coolGray-900" href="#" contenteditable="false"></a></li>
            <Link to="/explore"><li className="mr-12"><a className="font-medium text-gray-500 hover:text-green-500" href="#" contenteditable="false">Browse Careers</a></li></Link>
            <Link to="/yourpaths"><li className="mr-12"><a className="font-medium text-gray-500 hover:text-green-500" href="#" contenteditable="false">Your Paths</a></li></Link>
            <li><a className="font-medium text-grey-500 hover:text-coolGray-900" href="#" contenteditable="false"></a></li>
          </ul>
        </div>
        <div className="hidden xl:block xl:w-1/3">
          <div className="flex items-center justify-end"><Link to="/editprofile"><a className="inline-block px-4 py-2 mr-2 font-medium leading-5 text-gray-500 bg-transparent rounded-md hover:text-green-500" contenteditable="false">Edit Profile</a></Link><Link to="/home"><a className="inline-block px-4 py-2 text-sm font-medium leading-5 bg-green-500 rounded-md text-green-50 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" href="#" contenteditable="false">Log Out</a></Link></div>

        </div>
      </div>
      <button className="self-center navbar-burger xl:hidden">
        <svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className="text-gray-50" width="32" height="32" rx="6" fill="currentColor"></rect>
          <path className="text-gray-500" d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z" fill="currentColor"></path>
        </svg>
      </button>
    </nav>
    <div className="fixed top-0 left-0 z-50 hidden w-full h-full bg-opacity-50 navbar-menu bg-coolGray-900">
      <div className="fixed top-0 bottom-0 left-0 w-4/6 w-full max-w-xs bg-white">
        <nav className="relative h-full p-6 overflow-y-auto">
          <div className="flex flex-col justify-between h-full">
            <a className="inline-block" href="#">
              <img className="h-8" src="flex-ui-assets/logos/flex-ui-green-light.svg" alt=""/>
            </a>
            <ul className="py-6">
              <li><a className="block px-4 py-3 font-medium rounded-md text-coolGray-500 hover:text-coolGray-900 hover:bg-coolGray-50" href="#">Product</a></li>
              <li><a className="block px-4 py-3 font-medium rounded-md text-coolGray-500 hover:text-coolGray-900 hover:bg-coolGray-50" href="#">Features</a></li>
              <li><a className="block px-4 py-3 font-medium rounded-md text-coolGray-500 hover:text-coolGray-900 hover:bg-coolGray-50" href="#">Pricing</a></li>
              <li><a className="block px-4 py-3 font-medium rounded-md text-coolGray-500 hover:text-coolGray-900 hover:bg-coolGray-50" href="#">Resources</a></li>
            </ul>
            <div className="flex flex-wrap">
              <div className="w-full mb-2">  <a className="inline-block w-full px-4 py-2 text-sm font-medium leading-5 text-center bg-transparent rounded-md text-coolGray-500 hover:text-coolGray-900" href="#">Log In</a></div>
              <div className="w-full"><a className="inline-block w-full px-4 py-2 text-sm font-medium leading-5 text-center text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" href="#">Sign Up</a></div>
            </div>
          </div>
        </nav>
        <a className="absolute p-4 navbar-close top-5 right-3" href="#">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z" fill="#556987"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export default NavBarTwo