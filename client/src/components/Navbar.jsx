import React from "react";
import { NavLink } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import { useState, useEffect } from "react";
// import Menu from "./Menu";
import "flowbite";
import { Navbar } from "flowbite-react/lib/esm/components/Navbar";
import { Dropdown } from "flowbite-react/lib/esm/components/Dropdown";
import { Avatar } from "flowbite-react/lib/esm/components/Avatar";

const Navabr = () => {
  //   // const [isMenuOpen, SetMenu] = useState(false);
  //   const [userdata,setUserData] =useState();
  // const CallAboutPage= async()=>
  // {
  //   console.log("Call about")
  //       try{
  //       console.log("tried");
  //       const res=await fetch('/profilec',{
  //           method:"GET",
  //           headers:{
  //               Accept:"application/json",
  //               "Content-Type":"application/json"
  //           },
  //           credentials:"include"
  //       });
  //       const object= await res.json();
  //   //    setUserData(object);
  //       console.log(object);
  //       setUserData(object);
  //       console.log(userdata);
  //       if(!res.status===200)
  //       {
  //           const error= new Error (res.error);
  //           alert('There seems to be some issue with your credentials. We are working on it.');
  //           throw error;
  //       }
  //   }
  //   catch(err){
  //       console.log(err);
  //       console.log("caught error");
  //      }
  // };
  //   useEffect(()=>{
  //       CallAboutPage();
  //   },[])

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();


  return (
    <div className="dark ">
      <Navbar fluid={true} rounded={false}>
        <div className=" sm:absolute">
          <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              EduCapture
            </span>
          </Navbar.Brand>
        </div>
        <div className="flex  md:order-2 ">
        {isAuthenticated ? (
            <>
              <div className=" text-slate-300 mt-2 mr-3 font-bold"> {user.name} </div>
            
        
            <NavLink
            to="/profile"
            active={true}
            className=" text-lg text-neutral-400 hover:text-neutral-200"
          >
            <img className=" rounded-full w-10" src= {user.picture} alt="" />
          </NavLink>
          </>
          
          ):(

<NavLink
            to="/profile"
            active={true}
            className=" text-lg text-neutral-400 hover:text-neutral-200"
          >
            <img className=" rounded-full w-10" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
          </NavLink>
          

          )}
          <Navbar.Toggle />
        </div>
        {/* <div className="lg:m-auto"> */}
        <Navbar.Collapse
        className="pl-[20vw]">
          <NavLink
            to="/listing"
            active={true}
            className=" text-lg text-neutral-400 hover:text-neutral-200"
          >
            Home
            </NavLink>
          <NavLink
            to="/Reward"
            className="text-lg text-neutral-400 hover:text-neutral-200"
          >
            Rewards
          </NavLink>
          
          <NavLink
            to="/testimonials"
            className="text-lg text-neutral-400 hover:text-neutral-200"
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/form"
            active={true}
            className=" text-lg text-neutral-400 hover:text-neutral-200"
          >
            Post Item
          </NavLink>
          
          <div className="text-lg text-neutral-400 hover:text-neutral-200"> 

{isAuthenticated ? (
            <li>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}</div>
        </Navbar.Collapse>
        {/* </div> */}
      </Navbar>
          

    </div>
  );
};

export default Navabr;