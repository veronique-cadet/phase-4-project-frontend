import React from 'react';
import Footer from './Footer';
import NavBarTwo from './NavBarTwo';

function NotFound404(props) {
    return (
      <div>
        <NavBarTwo />
        <div className="w-full px-4 ">
          <div className="h-full p-8 text-center transition duration-200 rounded-md hover:bg-white hover:shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-white bg-green-500 rounded-lg mb-7">
              <img src="./money.png" />
            </div>
            <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
              404 Not Found: Oops! The page you are looking for does not exist
            </h3>
            
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default NotFound404;