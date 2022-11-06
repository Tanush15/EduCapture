import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
        <div class="bg-gray-700">
          <div class="container mx-auto p-5 py-5">
            <div class="flex-nowrap md:-mx-2 md:flex ">
              {/* <!-- Left Side --> */}
              <div class="w-full md:mx-2 md:w-3/12 ">
                {/* <!-- Profile Card --> */}
                <div class=" border-t-4 border-green-400 bg-black bg-opacity-30  p-3 text-white shadow-lg shadow-slate-900">
                  <div class="image overflow-hidden">
                    <img
                      class="mx-auto h-auto w-full"
                      src={user.picture}
                      alt=""
                    />
                  </div>
                  <h1 class="my-1 text-xl font-bold leading-8 text-gray-100">
                    {user.name}
                  </h1>

                  <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                    {/* <li class="flex items-center py-3">
                      <span>Status</span>
                      <span class="ml-auto">
                        <span class="rounded bg-green-500 py-1 px-2 text-sm text-white">
                          Teacher
                        </span>
                      </span>
                    </li> */}
                    <li class="flex items-center py-3">
                      <span>Number of Models Listed</span>
                      <span class="ml-auto">5</span>
                    </li>
                  </ul>
                </div>
                {/* <!-- End of profile card --> */}
                <div class="my-4"></div>
                {/* <!-- Friends card --> */}
                {/* <div class="bg-white p-3 hover:shadow">
                                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                        <span class="text-green-500">
                                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </span>
                                        <span>Similar Profiles</span>
                                    </div>
                                    <div class="grid grid-cols-3">
                                        <div class="text-center my-2">
                                            <img class="h-16 w-16 rounded-full mx-auto"
                                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                                alt=""/>
                                                <a href="#" class="text-main-color">Kojstantin</a>
                                        </div>
                                        <div class="text-center my-2">
                                            <img class="h-16 w-16 rounded-full mx-auto"
                                                src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                                                alt=""/>
                                                <a href="#" class="text-main-color">James</a>
                                        </div>
                                        <div class="text-center my-2">
                                            <img class="h-16 w-16 rounded-full mx-auto"
                                                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                                alt=""/>
                                                <a href="#" class="text-main-color">Natie</a>
                                        </div>
                                        <div class="text-center my-2">
                                            <img class="h-16 w-16 rounded-full mx-auto"
                                                src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                                                alt=""/>
                                                <a href="#" class="text-main-color">Casey</a>
                                        </div>
                                    </div>
                                </div> */}
                {/* <!-- End of friends card --> */}
              </div>
              {/* <!-- Right Side --> */}
              <div class="mx-2 w-full md:w-9/12 ">
                {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <div class="rounded-sm bg-black bg-opacity-30 p-3  text-white shadow-lg shadow-slate-900">
                  <div class="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                    <span class="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide text-white">About</span>
                  </div>
                  <div class="text-white">
                    <div class="grid text-sm before:hidden after:hidden md:grid-cols-2">
                      <div class="flex">
                        <div class="w-[50%] px-4 py-2 font-semibold">Name</div>
                        <div class="w-[50%] px-4 py-2">Tanush</div>
                      </div>
                      <div class="flex">
                        <div class="w-[50%] px-4 py-2 font-semibold">
                          Nationality
                        </div>
                        <div class="w-[50%] px-4 py-2">Indian</div>
                      </div>
                      <div class="flex">
                        <div class="w-[50%] px-4 py-2 font-semibold">
                          Gender
                        </div>
                        <div class="w-[50%] px-4 py-2">Prefer Not to Say</div>
                      </div>
                      <div class="flex">
                        <div class="w-[50%] px-4 py-2 font-semibold">
                          College.
                        </div>
                        <div class="w-[50%] px-4 py-2">
                          Delhi Technological University
                        </div>
                      </div>
                      <div class="flex">
                        <div class="w-[50%] px-4 py-2 font-semibold">State</div>
                        <div class="w-[50%] px-4 py-2">New Delhi</div>
                      </div>
                      <div class="flex">
                        <div class="w-[50%] px-4 py-2 font-semibold">
                          Email.
                        </div>
                        <div class="w-[50%] px-4 py-2">
                          <a
                            class="text-blue-800"
                            href="mailto:jane@example.com"
                          >
                            chaudharytanush15@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                

                <div class="my-4"></div>

                
              
                    

                  
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Profile