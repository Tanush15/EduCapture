import React from "react";


const LandingPage = () => {
  

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
       <div className=" text-5xl text-white w-[60vw] ml-28 pt-40 font-thin">GET 3D AND AR VISULIZATION LEARNING</div>
       <div className=" text-slate-300 text-xl ml-28 pt-5 w-[50vw] font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint explicabo minus doloribus temporibus possimus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iusto molestias vitae consequuntur repellat voluptas.</div>
       <button className=" bg-transparent border-white  py-5 px-7 text-xl text-white border-[2px] hover:bg-white hover:text-black transition hover:duration-500 ease-in-out  font-bold rounded-md ml-28 mt-5">Get Started</button>
      </div>
      <div className=" absolute top-[100vh] h-[60vh] bg-white w-[80vw] left-[9vw] rounded-xl">
        <div className=" text-center text-xl text-red-700 mt-3">Checkout The Features</div>
        <div className="text-center text-5xl text-black mt- font-bold">Immersive Learning Platform</div>
      </div>
      
      <div className="min-h-[65vh] pb-[6vh] bg-lime-300 ">
        <div className=" text-center">frd</div>
        <div className="mt-[40vh] w-[90vw] h-[95vh] bg-slate-300 mx-auto">
      <div className=" text-center text-xl text-green-700 pt-[5vh] ">Checkout App Interface</div>
      <div className="text-center text-5xl text-black mt- font-bold">App Preview</div>
      <div className="mt-[5vh] flex justify-evenly">
        <div className="h-[70vh] bg-white w-[20vw] rounded-3xl"></div>
        <div className="h-[70vh] bg-white w-[20vw] rounded-3xl"></div>
        <div className="h-[70vh] bg-white w-[20vw] rounded-3xl"></div>
      </div>
      </div>
      <div className=" absolute left-[52vw] top-[245vh] bg-arrow h-[40vh] w-[20vw] bg-cover"></div>
      <button className=" bg-black border-white  py-5 px-7 text-xl text-white border-[2px] hover:bg-white hover:text-black transition hover:duration-500 ease-in-out  font-bold rounded-md ml-[42vw] mt-10">Download Apk</button>
      </div>



    </>
  );
};
export default LandingPage;
