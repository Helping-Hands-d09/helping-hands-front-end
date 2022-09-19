import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/Auth';


export default function Campaigns() {


  // const userURL= "https://helping-hands-api.herokuapp.com/api/v1/users/"
  const Url = 'https://helping-hands-api.herokuapp.com/api/v1/campaign/';

  const router = useRouter();
  const { tokens } = useAuth();
  const [camData, setData] = useState();




  const onClick = (e) => {
    e.preventDefault()
    // alert("Please login to your account");
    if (tokens) {

     

      router.push("/Campaigns")
  } else {
      router.push('/login')
  }
  }

  const fetcher = async (Url) => await axios.get(Url).then((res) => res.data);
  const { data, error } = useSWR(Url, fetcher);
   console.log(data)

  if (error) <p>Loading failed...</p>; 
  if (!data) <h1>Loading...</h1>;
  console.log(data)


  return (data && data.map(campaign => {
    

    return (
      
      <div class="max-w-sm m-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" >
        <a href="#">
          <img src={"/image/hand-13.jpg"} alt="pic"></img>
          {/* <img src={campaign.image} alt="pic"></img> */}
        </a>

        <div class="p-5">
          <div class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
            <a  class="hover:underline">
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
                    href="/PersonalInfo.js"
                    class="font-semibold text-gray-700 hover:underline"
                  >
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {campaign.organizer.username}
                    </p>
                  </a>

                </div>
              </div>
              <button type="submit" onClick={onClick} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join</button>

            </div>
          </section>
        </div>
      </div>
   
    );
  }))
}
