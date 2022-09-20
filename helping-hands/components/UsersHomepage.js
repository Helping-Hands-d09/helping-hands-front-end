import Feed from "./Feed";
import PersonalInfo from "./PersonalInfo";
import Campaigns from "./Campaigns";
import CampaignsAsPosts from "./CampaignsAsPosts";
import { useAuth } from '../contexts/Auth'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function MyPosts() {

  const { userInfo } = useAuth();
  const userInfoURL = "https://helping-hands-api.herokuapp.com/api/v1/users/"
  const connectionInfoURL = "https://helping-hands-api.herokuapp.com/api/v1/connection/"

  // console.log("0000000", userInfo);

  const [userData, setUserData] = useState();

  useEffect(() => {
    (async () => {
      const data = await axios.get(userInfoURL + userInfo);
      setUserData(data.data);
    })();
  }, []);

  console.log(userData);

  return (
    <>
      {/* Left Section */}
      <div class="flex justify-center h-screen px-4 text-gray-700">
        <div class="flex w-full max-w-screen-lg">

          {/*################# Changing component ##################*/}

          {/* if the user clicks the home button on the left we will display the feed component
            and if the user clicks the campaigns component we will display the campaignsAsPosts component
          */}

          <div class="flex flex-col flex-grow border-l border-r border-gray-300">
            <div class="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
              <h1 class="text-xl font-semibold">Feed Title</h1>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <button class="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">
                  <a href="Createcampain">Create Post</a>
                </button>
                <button class="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">
                  <a href="Createcampain">Create Campaign</a>
                </button>
              </div>
            </div>

            <div class="flex-grow h-0 overflow-auto">

              {userData && 
              <div class="flex w-full p-8 border-b border-gray-300 mt-28">
                <div class="relative flex w-full">
                  {/* <!-- Avatar --> */}
                  <div class="flex flex-col">
                    <div style={{ marginTop: '-5rem' }}>
                      <div style={{ height: '9rem', width: '9rem' }} class="md rounded-full relative avatar">
                        
                          {/* if(userData != ''){
                            <img style={{ height: '9rem', width: '9rem' }} class="md rounded-full relative border-4 border-gray-900" src={userData.image} alt="" />
                          }
                          else{
                            <img style={{ height: '9rem', width: '9rem' }} class="md rounded-full relative border-4 border-gray-900" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&usqp=CAU" alt="" />
                          } */}
                          <img style={{ height: '9rem', width: '9rem' }} class="md rounded-full relative border-4 border-gray-900" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&usqp=CAU" alt="" />
                        
                        <div class="absolute"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-1">
                    {/* <!-- Profile info --> */}
                    <div class="space-y-2 justify-center w-full ml-3">
                      {/* <!-- User basic--> */}
                      <div>
                        {/* <h2 class="text-xl leading-6 font-bold text-white">ℜ??????ℜ??????.dev</h2> */}
                        <p class="text-sm leading-5 font-medium text-gray-600">@{userData.username}</p>
                      </div>
                      {/* <!-- Description and others --> */}
                      <div class="mt-3">
                        <p class="text-black leading-tight mb-2">Description</p>
                        <div class="text-gray-600 flex">
                          <span class="flex mr-2">{userData.location}</span>
                          <span class="flex mr-2"><svg viewBox="0 0 24 24" class="h-5 w-5 paint-icon"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg> <span class="leading-5 ml-1">Joined December, 2019</span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>}

              <CampaignsAsPosts />
              {/* <Feed /> */}
            </div>
          </div>

          {/* if the user clicks on the profile button we will display the personal info component */}
          {/* <PersonalInfo/> */}

          {/*################# Changing component #########################*/}

          {/* Right */}
          <div class="flex flex-col flex-shrink-0 w-1/4 py-4 pl-4">
            <div>
              <h3 class="mt-6 font-bold">My Campaigns</h3>

              <h4 class="mt-6 font-semibold">Created <span><a href="/" className="text-blue-400 hover:text-blue-600">see more</a></span> </h4>

              <div class="flex w-full py-4 border-b border-gray-300">
                <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full">
                  <img src="/image/hand-13.jpg"></img>
                </span>
                <div class="flex flex-col flex-grow ml-2">
                  <div class="flex text-sm">
                    <span class="font-semibold">Campaign</span>
                    <span class="ml-1">Date</span>
                  </div>
                  <p class="mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div class="flex w-full py-4 border-b border-gray-300">
                <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                <div class="flex flex-col flex-grow ml-2">
                  <div class="flex text-sm">
                    <span class="font-semibold">Username</span>
                    <span class="ml-1">@username</span>
                  </div>
                  <p class="mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>

              <h4 class="mt-6 font-semibold">Joined <span><a href="/" className="text-blue-400 hover:text-blue-600">see more</a></span> </h4>

              <div class="flex w-full py-4 border-b border-gray-300">
                <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                <div class="flex flex-col flex-grow ml-2">
                  <div class="flex text-sm">
                    <span class="font-semibold">Username</span>
                    <span class="ml-1">@username</span>
                  </div>
                  <p class="mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div class="flex w-full py-4 border-b border-gray-300">
                <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                <div class="flex flex-col flex-grow ml-2">
                  <div class="flex text-sm">
                    <span class="font-semibold">Username</span>
                    <span class="ml-1">@username</span>
                  </div>
                  <p class="mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
