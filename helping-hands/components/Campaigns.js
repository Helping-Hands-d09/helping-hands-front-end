import useSWR from "swr";
import axios from "axios";
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/Auth'
import { useEffect, useState } from 'react'
import Image from 'next/image'


export default function Campaigns() {

  const { tokens, userInfo, refreshToken, isAuth } = useAuth()
  const [connections, setConnections] = useState([]);
  const [config, setConfig] = useState();

  const router = useRouter();

  let connectionURL = "https://helping-hands-api.herokuapp.com/api/v1/connection/"

  useEffect(() => {
    (async () => {
      const data = await axios.get(connectionURL);
      setConnections(data.data);
    })();
  }, []);

  const handleJoiningCampaign = async (e, key) => {
    e.preventDefault()

    // console.log(isAuth());

    if (!isAuth()) {
      await refreshToken()
  }

    if (tokens) {
      setConfig({
        headers: {
          'Authorization': `Bearer ${tokens.access}`
        }
      })

      let connection = {
        campaign: key,
        member: userInfo
      }
      axios.post(connectionURL, connection, config)
      // console.log(111111, e.target.text);
    }
    else {
      router.push('/login')
    }

  }

  const url = 'https://helping-hands-api.herokuapp.com/api/v1/campaign';
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);


  const { data, error } = useSWR(url, fetcher);
  // console.log(data)

  if (error) {
    return <p>Loading failed...</p>;
  }

  // Card placeholder
  if (!data) {
    return (
      <>
        <div
          role="status"
          class="m-10 p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div class="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              class="w-12 h-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
            </svg>
          </div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div class="flex items-center mt-4 space-x-3">
            <svg
              class="w-14 h-14 text-gray-200 dark:text-gray-700"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          class="m-10 p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div class="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              class="w-12 h-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
            </svg>
          </div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div class="flex items-center mt-4 space-x-3">
            <svg
              class="w-14 h-14 text-gray-200 dark:text-gray-700"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          class="m-10 p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div class="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              class="w-12 h-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
            </svg>
          </div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div class="flex items-center mt-4 space-x-3">
            <svg
              class="w-14 h-14 text-gray-200 dark:text-gray-700"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </>
    );
  }

  return (data && data.map(campaign => {

    let key = campaign.id
    let isMember = connections.filter(element => element.campaign === key && element.member === userInfo)[0]
    // console.log(isMember, isMember ? true : false);

    return (
      <div class="max-w-sm m-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={campaign.id} >
        <a href="#">
          <img src={"/image/hand-13.jpg"} alt="pic"></img>
          {/* <img src={campaign.image} alt="pic"></img> */}
        </a>

        <div class="p-5">
          <div class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
            <a href="#" class="hover:underline">
              <h2 class="text-2xl font-bold tracking-normal text-gray-800">
                {campaign.title}
              </h2>
            </a>
          </div>
          <hr class="border-gray-300" />
          <div class="p-1 bg-white-900 h-24 overflow-x-hidden overflow-y-auto text-justify">
            <p class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
              {campaign.description}
            </p>

          </div>
          <hr class="border-gray-300" />
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
              <span class="text-xs font-medium text-black-600 uppercase">
                Category: {campaign.category.title}
              </span></div>
            <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
              <span class="text-xs font-medium text-black-600 uppercase">
                location: {campaign.location.city_name}
              </span></div>
          </div>
          <div class="flex items-center justify-between">

            <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
              <span class="text-xs font-medium text-black-600 uppercase">
                Available_sets: {campaign.available_sets}
              </span></div>
            <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
              <span class="text-xs font-medium text-black-600 uppercase">
                Date: {campaign.date}
              </span></div>

          </div>


          <section class="px-4 py-2 mt-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center flex-1">

                <img
                  class="object-cover h-10 rounded-full"
                  src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
                  alt="Avatar"
                />
                <div class="flex flex-col mx-2">
                  <a
                    href=""
                    class="font-semibold text-gray-700 hover:underline"
                  >
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {campaign.organizer.username}
                    </p>
                  </a>

                </div>
              </div>

              {isMember ?
                <div
                  type="submit"
                  class="text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Joined
                </div>
                :
                <button
                  type="submit"
                  onClick={(e) => handleJoiningCampaign(e, key)}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Join
                </button>
              }



            </div>
          </section>
        </div>
      </div>
    );
  }))
}
