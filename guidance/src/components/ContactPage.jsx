import React from "react";
import NavBarTwo from "./NavBarTwo.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className="">
      <NavBarTwo />
      <section className="h-full w-full py-8 mb-10 bg-white background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;">
        <div className=" container px-4 mx-auto">
          <div className="mb-2 w-full h-full overflow-hidden">
            <div className="w-1/2 mb-10 lg:mb-0  mx-auto ">
              <div className="w-full mx-auto flex justify-center">
                <p className="px-2 mb-4 text-xs text-green-500 bg-green-100 font-medium uppercase rounded-9xl py-px text-center inline-block">
                  Contact
                </p>
              </div>

              <h3 className="mb-4 text-4xl md:text-5xl text-darkCoolGray-900 font-bold tracking-tighter leading-tight text-center">
                Let’s stay connected
              </h3>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium text-center">
                It's never been easier to get in touch with Flex. Call us, use
                our live chat widget or email and we'll get back to you as soon
                as possible!
              </p>
            </div>
          </div>

          <div className="h-full md:px-4 w-1/2 mx-auto">
            <div className="md:px-4 py-2 md:py-8 md:p-10 bg-coolGray-50 rounded-md mx-auto">
              <form>
                <div className="mb-6">
                  <label
                    className="block mb-2 text-coolGray-800 font-medium leading-6"
                    for=""
                  >
                    Email
                  </label>
                  <input
                    className="block w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="email"
                    placeholder="dev@shuffle.dev"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-2 text-coolGray-800 font-medium leading-6"
                    for=""
                  >
                    Message
                  </label>
                  <textarea
                    className="block h-32 md:h-52 w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 placeholder-coolGray-200 resize-none"
                    type="text"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="block w-full py-4 px-6 text-lg leading-6 text-coolGray-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;
