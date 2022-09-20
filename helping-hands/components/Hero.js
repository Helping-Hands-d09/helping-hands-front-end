// import Login from "../pages/login"
// import Signup from "../pages/signup"

import { useAuth } from '../contexts/Auth';
import { useRouter } from 'next/router'

export default function Hero() {

  const { tokens } = useAuth();
  const router = useRouter()

  return (
    <>
      <div class="relative overflow-hidden bg-white">
        <div class="mx-auto max-w-7xl">
          <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
              <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
              </div>
            </div>

            {/* main */}
            <div class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Welcome to Helping Hands
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <button
                    onClick={() => router.push('/login')}
                    class="px-8 py-3 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => router.push('/signup')}
                    class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="/image/card.jpg" alt="" />
        </div>
      </div>
    </>
  );
}