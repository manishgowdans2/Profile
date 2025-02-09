import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";

function App()
{
  return(
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
  );
}

export default App;