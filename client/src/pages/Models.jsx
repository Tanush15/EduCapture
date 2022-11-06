import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Models()  {
  const [Data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const CallAboutPage = async () => {
    setIsFetching(true);
    console.log("Call about");
    try {
      console.log("tried");
      const res = await fetch("/db", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const object = await res.json();
      //    setUserData(object);
      console.log(object);
      filterr(object);
      // setData(object);
      // console.log(Data);

      setIsFetching(false);
      if (!res.status === 201) {
        const error = new Error(res.error);
        alert(
          "There seems to be some issue with your credentials. We are working on it."
        );
        throw error;
      }
    } catch (err) {
      console.log(err);
      console.log("caught error");
      setIsFetching(false);
      // navigate("/signin");
    }
  };

  useEffect(() => {
    CallAboutPage();
    // console.log(Data);
    // filtertags();
  }, []);


    const navigate= useNavigate();
    const location = useLocation();
    console.log(location.state.item_tag);

    // const [Data, setData] = useState();
    const [dat, setdat] = useState();

    const filterr = (Data) => {
        // console.log(dat);
        console.log(Data);
        const res = Data.map((element) => {
          return {
            ...element,
            list: element.list.filter((currentVal) => {
              console.log(currentVal.item_tag);
              return currentVal.item_tag == location.state.item_tag;
            }
            ),
          }
        });
        setdat(res);
        console.log(res);
      }

      

      

    //   useEffect(() => {
    //     filterr();
       
    //   }, []);
    
    if(isFetching)
    {return(
      <>
      </>
    )
    }
    else{
  return (
    <div className=' bg-slate-700'>
         <div className=" text-white text-5xl font-thin pt-5 pl-5"> {location.state.item_tag} Models</div>
         <div className=""></div>
         <div className=" flex  grid min-h-[90.6vh] grid-cols-4 justify-center     gap-y-8 gap-x-5 px-3 before:hidden after:hidden">
            <div className="py-4">
              <div className="">
              {dat.map((dataa) => {
              return (<>
                {dataa.list.map((listt) => {
                  return (
                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-3">
                      <button
                        className=" text-left"
                        onClick={() => {
                          navigate("/knowmore", {
                            state: { item_id: listt.item_id },
                          });
                        }}
                      >
                        <img
                          className=" rounded-tl-3xl rounded-br-3xl object-cover w-[350px] h-[300px]"
                          src={listt.item_immage}
                          alt=""
                        />
                        <div className=" text-xl text-white font-bold text-center">
                            {listt.item_name}
                        </div>
                      </button>
                    </div>
                  )
                })}
              </>
              )
            })}
              </div>
            </div>
            </div>
    </div>

   
  )
}}

export default Models