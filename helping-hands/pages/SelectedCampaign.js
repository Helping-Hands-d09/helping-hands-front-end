import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/Auth';

export default function SelectedCampaign() {
  const router = useRouter();
  const data=router.query
   console.log(11,data)

  const [items, setItems] = useState([]);
  const [category, setcategory] = useState([]);
  const [location, setlocation] = useState([]);
  const [userInfo, setuserInfo] = useState([]);

  // let location=items.location.city_name

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
    setItems(items);
    setcategory(items.category);
    setlocation(items.location)
    setuserInfo(items.organizer)
    }
  }, []);

  console.log(9999999999,items)
  console.log(1001010111,category)
  console.log(1111111111,location)
  console.log(1222222222,userInfo)

      return (
        
        <div class="max-w-sm m-5 justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-blue-800 dark:border-blue-700" >
           <a href="#">
          <img src={"https://www.sickchirpse.com/wp-content/uploads/2015/02/Amazing-Forest-BaVARIA.jpg"} alt="pic"></img>
          {/* <img src={campaign.image} alt="pic"></img> */}
        </a>
  
          <div class="p-5">
            <div class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
              <a  class="hover:underline">
                <h2 class="text-2xl font-bold tracking-normal text-gray-800">
                  {items.title}
                </h2>
              </a>
            </div>
            <hr class="border-gray-300" />
            <div class="p-1 bg-white-900 h-24 overflow-x-hidden overflow-y-auto text-justify">
              <p class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                {items.description}
              </p>
  
            </div>
            <hr class="border-gray-300" />
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                <span class="text-xs font-medium text-black-600 uppercase">
                  Category:
                  {category.title}
                </span></div>
              <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                <span class="text-xs font-medium text-black-600 uppercase">
                  location: 
                  {location.city_name}
                  
                </span></div>
            </div>
            <div class="flex items-center justify-between">
  
              <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                <span class="text-xs font-medium text-black-600 uppercase">
                  Available_seats: {items.available_sets}
                </span></div>
              <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                <span class="text-xs font-medium text-black-600 uppercase">
                  Date: {items.date}
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
                        {userInfo.username}
                      </p>
                    </a>
  
                  </div>
                </div>
  
              </div>
            </section>
          </div>
        </div>
 
     );

}
