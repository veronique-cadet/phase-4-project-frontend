import React from 'react'
import SignUp from './SignUp'
import { Link, Outlet } from "react-router-dom";


function SignIn() {
  return (
    <div>
      SignIn
      <Link to='/Home'>
      Go home</Link>
      </div>
  )
}

export default SignIn
