import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const image1=require("../Images/ld.png");
const image2=require("../Images/ss2.jpg");
const image3=require("../Images/ss3.jpg");
const image4=require("../Images/ss.jpg");

const LandingPage = () => {
  const navigate= useNavigate();

  return (
    <>
      {/* <h1>Hello</h1>

      <div className="h-[90.6vh] w-[100%]  bg-no-repeat">
        <Carousel
          leftControl="L"
          rightControl="R"
          slideInterval={5000}
          slide=""
          className="pt-0 "
        >
          <div className=" mt-0 h-[92vh] bg-background bg-cover bg-no-repeat object-fill pt-0 text-center text-white">
            <div className="flex justify-center">
              <div className=" pt-[15vh] text-center text-5xl font-bold">
                {" "}
                Kickstart Learning
              </div>
            </div>
            <div className=" mr-[35vw] flex flex-row-reverse">
              <div className="  ml-[10vw] text-center text-5xl italic">
                <Lottie options={defaultOptions} height={400} width={400} />
              </div>
              
              <button className="my-[24vh] w-52 rounded-full bg-purple-700 bg-opacity-50 px-[] text-lg font-bold"><a href="/home">
                Kickstart</a>
              </button>
            </div>
          </div>

          <div className=" bg-gradient-to-br  bg-slate-600 text-white h-[91vh] ">
            <div className=" text-center align-middle italic text-3xl ">
              get all you need in 1 place 
            </div>
            <Lottie options={defaultOptions} height={400} width={400} />
           <div className=" text-xl text-center">
            get all you want to learn in one place. learn from great mentors and get your dream job by making connections in big mncs.
           </div>

          </div>
          
          
        </Carousel>
      </div> */}
      
      <div className=" min-h-[120vh] bg-background bg-cover">
        <div className="flex justify">
        <div className="">
       <div className=" text-5xl text-white w-[50vw] ml-28 pt-40 font-thin">GET 3D AND AR VISULIZATION LEARNING</div>
       <div className=" text-slate-300 text-xl ml-28 pt-5 w-[50vw] font-thin">Thinking of what's inside a steam engine or how our bodies function?
Join our community and get access to various Bluprints that will quench your thirst for knowledge.
</div>
<div className=" text-slate-300 text-xl ml-28 pt-5 w-[50vw] font-bold">Learn Build Teach Earn Cool Rewards</div>
       <button  onClick={() => {
                      navigate("/listing");
                    }} className=" bg-transparent border-white  py-5 px-7 text-xl text-white border-[2px] hover:bg-white hover:text-black transition hover:duration-500 ease-in-out  font-bold rounded-md ml-28 mt-5">Get Started</button>


      </div>
      <div className=""><img className=" mt-[15vh] mr-[15vw] w-[45vw]" src={image1} alt="" /></div>
      </div>
      </div>
      <div className=" absolute top-[100vh] h-[60vh] bg-white w-[80vw] left-[9vw] rounded-xl">
        <div className=" text-center text-xl text-red-700 mt-3">Checkout The Features</div>
        <div className="text-center text-5xl text-black mt- font-bold">Immersive Learning Platform</div>
        <div className="flex justify-evenly mt-[10vh] relative">
          <div className="bg-white text-center text-green-500 text-3xl absolute top-[5vh] w-[18vw] py-[8vh] font-bold">Rewards</div>
          <img className="w-[20vw]" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/illustrations/5a8c3999109b60b087129b3795aafcde-v2.svg" alt="" />
          <img className="w-[20vw]" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/illustrations/5a8c3999109b60b087129b3795aafcde-v2.svg" alt="" />
          <img className="w-[20vw]" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/illustrations/162073e57ccb0cf07a5dcf7d591cfb1b-v2.svg" alt="" />
        </div>
      </div>
      
      <div className="min-h-[65vh] pb-[6vh] bg-gradient-to-b from-gray-900 to-gray-600  ">
        <div className=" text-center">frd</div>
        <div className="mt-[40vh] w-[90vw] h-[95vh] bg-slate-300 mx-auto">
      <div className=" text-center text-xl text-green-700 pt-[5vh] ">Checkout App Interface</div>
      <div className="text-center text-5xl text-black mt- font-bold">App Preview</div>
      <div className="mt-[5vh] flex justify-evenly">
        <div className="h-[70vh] bg-white w-[20vw] rounded-3xl">
          <img className=" m-auto mt-3 w-[18vw] h-[65vh]" src={image2} alt="" />
        </div>
        <div className="h-[70vh] bg-white w-[20vw] rounded-3xl">
        <img className=" m-auto mt-3 w-[18vw] h-[65vh]" src={image3} alt="" />
        </div>
        <div className="h-[70vh] bg-white w-[20vw] rounded-3xl">
        <img className=" m-auto mt-3 w-[18vw] h-[65vh]" src={image4} alt="" />
        </div>
      </div>
      </div>
      <div className=" absolute left-[52vw] top-[245vh] bg-arrow h-[40vh] w-[20vw] bg-cover"></div>
      <a href="https://drive.google.com/uc?export=download&id=1TNnA2oZBQDIWlyPq3gMPaMb5Od0bnqt3"><button  className=" bg-black border-white  py-5 px-7 text-xl text-white border-[2px] hover:bg-white hover:text-black transition hover:duration-500 ease-in-out  font-bold rounded-md ml-[42vw] mt-10">Download Apk</button></a>
      </div>



    </>
  );
};
export default LandingPage;
