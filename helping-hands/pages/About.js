import FAQ from "../components/FAQ";
import Head from "next/head";
import { bodyStreamToNodeStream } from "next/dist/server/body-streams";

export default function About() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
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
      <FAQ />
    </>
  );
}
