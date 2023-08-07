import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './LogIn/LogIn';
import SignUp from './LogIn/SignUp';

const LoginModal = () => {
  return (
    <LogIn />
    <SignUp />
  )
}

export default LoginModal
