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
import Upload_form from "./pages/Upload_form"


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
    <Route path="/upload" element={<Upload_form/> } /> 
   </Routes>                                                       
    </>
  );
}

export default App;
