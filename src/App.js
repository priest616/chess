import React from "react";
import Body from "./components/mainScreen/Body";
import LoginModal from "./components/loginModal/LoginModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/loginModal/LogIn/LogIn";
import SignUp from "./components/loginModal/LogIn/SignUp";
import Header from "./components/nav/Header";
import Home from "./components/home/Home";
import Footer from "./components/nav/Footer";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/play" element={<Body />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
