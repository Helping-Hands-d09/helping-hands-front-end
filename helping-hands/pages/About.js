import FAQ from "../components/FAQ";
import Head from "next/head";
import { bodyStreamToNodeStream } from "next/dist/server/body-streams";

export default function About() {
  return (
    <>
      {/* <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div class="mt-4 md:mt-0">
            <h2 class="  mb-4 text-4xl tracking-tight font-extrabold text-blue-600 dark:text-white">
              About Helping Hands
            </h2>
            <p class="  mb-6 text-dark-500 md:text-xl dark:text-dark-400">
              Find The Best Volunteer opportunities in the world! we <p></p>
              offer a nonprofits platform that help you to find project <p></p>
              and to find the best compnies to collab with, With more
              <p></p> volunteers and more volunteer opportunities than any
              <p></p> other service, Helping Hands is how good people and{" "}
              <p></p>
              good causes get connected you can Register, search,<p></p>
              post and find whatever you want.
            </p>
            <a
              href="#"
              class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <img
            class="w-90 dark:hidden"
            src="/image/about.jpg"
            alt="dashboard image"
          ></img>
          <img
            class="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          ></img>
        </div>

        <section class="bg-white dark:bg-gray-900">
          <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              class=" pt-6 w-full dark:hidden"
              src="/image/about2.jpg"
              alt="dashboard image"
            ></img>
            <img
              class="w-full hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
              alt="dashboard image"
            ></img>
            <div class="mt-4 md:mt-0">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"></h2>
              <p class=" mb-6  text-dark-500 md:text-xl dark:text-dark-400">
                For us, volunteering is one of the things that bring us
                happiness in life as it gives us a sense of belonging, and
                through it, we receive love and encouragement from my community.
                we encourage young people to volunteer because its a way to gain
                the skills and experiences needed to build your professional
                path..
              </p>
              <a
                href="#"
                class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  class="ml-2 -mr-1 w-6 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </section>
      <FAQ /> */}

      <section class="text-black-600 body-font px-11 w-full">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Find The Best Volunteer opportunities in the world! we offer a
                  nonprofits platform that help you to find project and to find
                  the best compnies to collab with, With more volunteers and
                  more volunteer opportunities than any
                  other service, Helping Hands is how good people and
                  <p></p>
                  good causes get connected you can Register, search,<p></p>
                  post and find whatever you want.
                </p>
              </div>
            </div>
            <img
              className="w-45 h-72"
              src="/image/about.jpg"
              alt="about image"
            ></img>

            <img
              class="w-45 w-45 h-72"
              src="/image/about2.jpg"
              alt="dashboard image"
            ></img>

            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  For us, volunteering is one of the things that bring us
                  happiness in life as it gives us a sense of belonging, and
                  through it, we receive love and encouragement from my
                  community. we encourage young people to volunteer because its
                  a way to gain the skills and experiences needed to build your
                  professional path..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
