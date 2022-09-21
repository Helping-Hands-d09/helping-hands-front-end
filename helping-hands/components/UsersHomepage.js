import Feed from "./Feed";
import PersonalInfo from "./PersonalInfo";
import Campaigns from "./Campaigns";
import CampaignsAsPosts from "./CampaignsAsPosts";
import { useAuth } from '../contexts/Auth'
import axios from 'axios';
import { useState, useEffect } from 'react';
import PostInput from "./PostInput";

export default function MyPosts() {

  const { userInfo } = useAuth();
  const userInfoURL = "https://helping-hands-api.herokuapp.com/api/v1/users/"
  const connectionInfoURL = "https://helping-hands-api.herokuapp.com/api/v1/connection/"

  const [userData, setUserData] = useState();

  useEffect(() => {
    (async () => {
      const data = await axios.get(userInfoURL + userInfo);
      setUserData(data.data);
    })();
  }, [userInfo]);

  console.log('User info here', userData);

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
            {/* <div class="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
              <h1 class="text-xl font-semibold">Feed Title</h1>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <PostInput/>
                <button class="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">
                  <a href="Createcampain">Create Campaign</a>
                </button>
              </div>
            </div> */}
            {userData && 
            <div class="flex-grow h-0 overflow-auto">
              {/* Personal info here  */}

              <div class="rounded-3xl overflow-hidden shadow-xl w-auto my-3  bg-gradient-to-t from-blue-400 via-blue-200 to-white  ">
                <div class="flex justify-center mt-10">
                  {/* image here is a link from google  */}
                    <img src="https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?pid=ImgDet&rs=1" class="rounded-full border-solid border-white border-2 -mt-3 w-32 h-32"/>		
                </div>
                <div class="text-center px-3 pb-6 pt-2 ">

                  <h3 class="text-black text-lg bold font-sans"> {userData.username}</h3>
                  <p class="mt-2 font-sans font-light text-black"> {userData.location}</p>
                </div>
                <div class="flex justify-center pb-3 text-black">
                  <div class="text-center mr-3 border-r pr-3">
                    <h2>5</h2>
                    <span>Joined Campaigns</span>
                  </div>
                  <div class="text-center">
                    <h2>3</h2>
                    <span>Created Campaigns</span>
                  </div>
                </div>
            </div>

               {/* Personal info here  */}
             
              <CampaignsAsPosts />
              {/* <Feed /> */}
            </div>
            }
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
      <br></br>
      <br></br>
    </>
  );
}
