import React from "react";
import css from "./css.css";
import { Flowbite } from "flowbite-react";
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";

const image1 = require("../Images/laptop.jpg");
const image2 = require("../Images/lap.jpg");
const Reward = () => {
    return (
        <>
            <div className=" bg-gradient-to-tr from-purple-200 via-purple-400 to-purple-800">
                <div className="h-[60vh]  ">
                <Carousel

                    slideInterval={5000}


                >
                    <div >
                        <img className=" mx-auto rounded-3xl" src="https://source.unsplash.com/1000x350/?cup" alt="" />
                        
                    </div>
                    <div className="">
                        <img className="mx-auto rounded-3xl" src="https://source.unsplash.com/1000x350/?laptop" alt="" />
                        {/* <div className=" text-center mb-[3vh] text-3xl italic font-semibold ">Bagpack</div> */}
                    </div>
                    <div className="">
                        <img className="mx-auto rounded-3xl" src="https://source.unsplash.com/1000x350/?shirt" alt="" />
                        {/* <div className=" text-center mb-[3vh] text-3xl italic font-semibold ">Dell inspiron 1540 2in1 Laptop</div> */}
                    </div>
                    <div className="">
                        <img className="mx-auto rounded-3xl" src="https://source.unsplash.com/1000x350/?giftcard" alt="" />
                        {/* <div className=" text-center mb-[3vh] text-3xl italic font-semibold ">I Pad air 5</div> */}
                    </div>
                </Carousel></div>
                <div class="grid overflow-hidden grid-cols-3 grid-rows-4 gap-2 py-2 before:hidden after:hidden">
                    <div class="box row-span-3 rounded-3xl">
                        <div className="block rounded-lg">
                            <img className=" w-[462px] h-[300px] rounded-lg" src={image2} alt="" />
                            <div className=" text-center text-slate-600 text-xl font-bold">Dell inspiron 1540 2in1 Laptop</div>
                            <div className=" text-center">9999 Coins</div>

                        </div>
                    </div>

                    <div class="box col-start-2 col-span-2 py-7">
                        <div className=" flex justify-center text-2xl  italic font-semibold"> Get Amazon Gift Cards Worth of 500 INR</div>
                        <div className=" text-2xl text-slate-400 font-semibold text-center ">for only 499 coins</div>

                    </div>
                    <div class="box row-span-2 col-start-2 text-5xl font-bold italic flex justify-center items-center flex-col "><div className="">EduCapture</div><div className=" text-lg">(Get Best AR Experience)</div></div>
                    <div class="box row-span-3 rounded-lg">
                    <div className="block rounded-lg">
                            <img className=" w-[462px] h-[300px] rounded-lg" src={image1} alt="" />
                            <div className=" text-center text-slate-200 font-thin text-2xl "> HP X360 1540 2in1 Laptop</div>
                            <div className=" text-center text-lg">9999 Coins</div>

                        </div>
                    </div>
                    <div class="box col-span-2 py-7">
                        <div className=" flex justify-center text-2xl  italic font-semibold"> Get Amazon Gift Cards Worth of 500 INR</div>
                        <div className=" text-2xl text-slate-400 font-semibold text-center ">for only 499 coins</div>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Reward;