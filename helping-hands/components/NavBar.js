/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import Image from 'next/image'
// \image\hand-13.jpg
import { useAuth } from '../contexts/Auth'
import { useContext } from "react";
import { useState } from 'react'

import useSWR from "swr";
import axios from "axios";
import Router from "next/router";
// import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';





export default function Header(props) {
  const campaignUrl = 'https://helping-hands-api.herokuapp.com/api/v1/campaign/';
  const fetcher = async (campaignUrl) => await axios.get(campaignUrl).then((res) => res.data);
  const { data, error } = useSWR(campaignUrl, fetcher);
  // console.log(data)
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const { tokens, logout } = useAuth()

  const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data && data.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
 

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
  };


  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="\image\hand-13.jpg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            ></img>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Helping Hands
            </span>
  
          </a>
          <div className="flex md:order-2">
     
            <div className="relative inline-block "  value={wordEntered}   onChange={handleFilter}>
                <div className="searchIcon">
              {filteredData.length === 0 ? (
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
              ) : (
                <button  class="cursor-pointer" onClick={clearInput} />
              )}
            </div>
        
              <form action="/SearchModal" class="flex flex-wrap justify-between md:flex-row">
                 
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Campaigns"
                wtx-context="280DA549-C6B7-4D0E-84AA-AD2F93DE9FE2"
              ></input></form>
                        {/* <Dropdown>
                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                              </Dropdown.Toggle>
                        
                              <Dropdown.Menu>
                                <Dropdown.Item  href="#/action-1"> title</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"> value</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"> name</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown> */}
            
                {filteredData.length != 0 && (
                        <div>
                          {filteredData.slice(0,10).map((value, key) => {
                            return (
          
                              <a href={"/SelectedCampaign"}>
                                <span className="ml-3 text-sm text-gray-400">
                                  {value.category.title}
                                  </span>
                              </a>
                            );
                          })}
                        </div>
              )}
            </div> 

            {tokens &&
              <>
 

                <button
                  className='w-16 ml-8 bg-gray-300 rounded hover:bg-gray-200'
                  onClick={() => logout()}>
                  Logout
                </button>

              </>
            }

          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                wtx-context="635A6E11-48E4-417A-B027-B9071281EEBA"
              ></input>
            </div>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="About"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="Campaigns"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Campaigns
                </a>
              </li>
              {tokens &&
                <li>
                  <a
                    href="HomePage"
                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Profile
                  </a>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}