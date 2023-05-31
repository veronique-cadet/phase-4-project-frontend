import React from 'react';
import Footer from './Footer';
import NavBarTwo from './NavBarTwo';

function NotFound404(props) {
    return (
      <div>
        <NavBarTwo />
        OOps! The page you are looking for does not exist. 
        <Footer/>
      </div>
    );
}

export default NotFound404;