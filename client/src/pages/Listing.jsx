import React from "react";
import css from "./css.css";
import { useNavigate } from "react-router-dom";

const Listing = () => {

  const navigate=useNavigate();

  return (
    <>
      <div className=" bg-background2 bg-cover">
        <div className="min-h-[90.6vh]">
        <div className="pt-4 text-center text-5xl  text-gray-400 ">
            Start Learning
          </div>
          <div className="pt-4 text-center font-thinaaa text-5xl  text-gray-400 ">
            What are you Intrested in?
          </div>
          {/* <div className="  flex justify-center  bg-[url('https://source.unsplash.com/1600x400/?home')] bg-cover  ">
                    <div className="flex justify-center w-4/5">
                        <input
                            type="text"
                            className="my-16 w-9/12  sm:h-20 rounded-xl px-4 outline-none "
                            placeholder="Search here..."
                        // onChange={(e) => searchtags(e)}
                        />
                        
                    </div>

                </div> */}
          <div className=" flex  grid min-h-[90.6vh] grid-cols-4 justify-center     gap-y-8 gap-x-5 px-3 before:hidden after:hidden">
            <div className="py-4">
              <div className="content-div bg-car group container mx-auto  flex max-w-sm  items-center justify-center rounded-md bg-white  shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Vehicle & Engines
                  </span>
                  <div className="pt-8 text-center">
                    <button
                    onClick={() => {
                      navigate("/models", {
                        state: { item_tag: "Vehicles" },
                      });
                    }}
                     className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700"
                    
                    >
                      View Models
                    </button>
                    </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div bg-arch content-div1 group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    archtechture
                  </span>
                  <div className="pt-8 text-center">
                    <button
                    onClick={() => {
                      navigate("/models", {
                        state: { item_tag: "Archtechture" },
                      });
                    }}

                    className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      View Models
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div content-div2 bg-human group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Human Anatomy
                  </span>
                  <div className="pt-8 text-center">
                    <button
                    onClick={() => {
                      navigate("/models", {
                        state: { item_tag: "Human" },
                      });
                    }}
                    className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      View Models
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div content-div3 bg-electronics group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Electronics & Gadget
                  </span>
                  <div className="pt-8 text-center">
                    <button 
                    onClick={() => {
                      navigate("/models", {
                        state: { item_tag: "Electronics" },
                      });
                    }}
                    className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      View Models
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div content-div4 bg-music group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Music Instruments
                  </span>
                  <div className="pt-8 text-center">
                    <button 
                    onClick={() => {
                      navigate("/models", {
                        state: { item_tag: "Electronics" },
                      });
                    }}
                    className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      View Models
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div content-div5 bg-bio group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    BioTech Machines
                  </span>
                  <div className="pt-8 text-center">
                    <button
                    onClick={() => {
                      navigate("/models", {
                        state: { item_tag: "BioTech" },
                      });
                    }}
                    className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      View Models
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div content-div6 bg-weapon group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Weapons
                  </span>
                  <div className="pt-8 text-center">
                    <button
                    onClick={() => {
                      navigate("/models", {
                        state: { item_tag: "Weapon" },
                      });
                    }}
                    className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      View Models
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="content-div content-div7 bg-robot group container  mx-auto flex  max-w-sm items-center justify-center rounded-md  bg-white shadow-lg">
                <div>
                  <div className="image-cover w-full rounded-t-md ">
                    {/* <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                    </div> */}
                  </div>
                  {/* <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                    <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div> */}
                </div>
                <div className="fd-sh absolute opacity-0 group-hover:opacity-100">
                  <span className="font-sans text-3xl font-bold leading-relaxed tracking-wider text-white">
                    Robotics
                  </span>
                  <div className="pt-8 text-center">
                    <button 
                    onClick={() => {
                      navigate("/models", {
                        state: { item_tag: "Robotics" },
                      });
                    }}
                    className="rounded-lg bg-white p-4 text-center  text-lg font-bold text-gray-700">
                      View Models
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Listing;
