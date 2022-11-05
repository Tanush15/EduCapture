import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Listing from "./pages/Listing";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";



function App() {
  return (
    <>
    <Navbar/> 
    <Routes>
    <Route path="/" element={<LandingPage />} />      
    <Route path="/listing" element={<Listing/>} />        
    <Route path="/profile" element={<Profile/> } />        
    <Route path="/singin" element={<Signin/> } />        
   </Routes>                                                       
    </>
  );
}

export default App;
