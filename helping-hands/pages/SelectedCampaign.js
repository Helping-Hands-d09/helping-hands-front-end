import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/Auth";

export default function SelectedCampaign() {
  const router = useRouter();
  const data = router.query;

  const [items, setItems] = useState([]);
  const [category, setcategory] = useState([]);
  const [location, setlocation] = useState([]);
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
      setcategory(items.category);
      setlocation(items.location);
      setuserInfo(items.organizer);
    }
  }, []);

  return (
    <div class="max-w-sm m-5 justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-blue-800 dark:border-blue-700 ">
     

        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {items.title}
          </h5>
       
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {items.description}
          </p>

          <div class=" ">

          <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
            <span class="text-xs font-medium text-black-600 uppercase">
              Category:
              {category.title}
            </span>
          </div>

          <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
            <span class="text-xs font-medium text-black-600 uppercase">
              location:
              {location.city_name}
            </span>
          </div>


          <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
            <span class="text-xs font-medium text-black-600 uppercase">
              Available_seats: {items.available_sets}
            </span>
          </div>

          <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
            <span class="text-xs font-medium text-black-600 uppercase">
              Date: {items.date}
            </span>

          </div>
         
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
