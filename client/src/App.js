import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Listing from "./pages/Listing";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Testimonials from "./pages/Testimonials";
import Models from "./pages/Models";
import Reward from "./pages/Rewards";


function App() {
  return (
    <>
    <Navbar/> 
    <Routes>
    <Route path="/" element={<LandingPage />} />      
    <Route path="/listing" element={<Listing/>} />        
    <Route path="/profile" element={<Profile/> } />        
    <Route path="/singin" element={<Signin/> } />  
    <Route path="/testimonials" element={<Testimonials/> } />       
    <Route path="/models" element={<Models/> } />    
    <Route path="/reward" element={<Reward/> } />  
   </Routes>                                                       
    </>
  );
}

export default App;
