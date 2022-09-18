/* eslint-disable react/jsx-key */
import useSWR from "swr";
import axios from "axios";
export default function CampaignsAsPosts() {
  const url = 'https://helping-hands-api.herokuapp.com/api/v1/campaign';
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);


  const { data, error } = useSWR(url, fetcher);
  // console.log(data)

  if (error) <p>Loading failed...</p>;3
  if (!data) <h1>Loading...</h1>;

  
  return (data && data.map(campaign => {
    return (
        <div class="flex w-full p-8 border-b border-gray-300">
          <span class="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
          <div class="flex flex-col flex-grow ml-4">
            <div class="flex">
              <span class="font-semibold"> {campaign.organizer.username}</span>
              
              {/* <span class="ml-auto text-sm">Just now</span> */}
            </div>
         
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {campaign.title}
            </h5>
        
            <p class="mt-1">
            {campaign.description}.{" "}
           
            </p>
            {/* <div class="flex items-center justify-center h-64 mt-2 bg-gray-200"> */}
              <span class="font-semibold text-gray-500">

        
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {campaign.date}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {campaign.location.city_name}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {campaign.available_sets}
          </p>


                
              </span>
            {/* </div> */}
            <div class="flex mt-2">
              <button class="text-sm font-semibold">Like</button>
              <button class="ml-2 text-sm font-semibold">Reply</button>
              <button class="ml-2 text-sm font-semibold">Share</button>
            </div>
          </div>
      </div>
    );
  }))
}
