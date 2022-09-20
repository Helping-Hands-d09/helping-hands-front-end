// import Login from "../pages/login"
// import Signup from "../pages/signup"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
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
            <svg
              class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
              <div class="relative px-4 pt-6 sm:px-6 lg:px-8"></div>
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
                    onClick={() => router.push("/login")}
                    class="px-8 py-3 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => router.push("/signup")}
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
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="/image/card.jpg"
            alt=""
          />
        </div>
      </div>

      {/* heading */}

      <div className="m-20">
        <div className="flex justify-center">
          <h2 class="text-4xl font-extrabold dark:text-white">
            Volunteer Work
          </h2>
        </div>
        <div className="flex justify-center">
          <p class="my-4 text-lg text-gray-500 text-center">
            Volunteerism is defined as an unpaid activity for people to assist
            institutions, non-profit organizations, or individuals.
            <br /> The importance of volunteering is to enhance your social
            skills while helping others. <br /> These volunteer opportunities
            allow you to create new relationships and contacts, continuously
            meet people from multiple cultural backgrounds, and enable you to
            take on new activities and work that you would like to try out.
            <br />
            Volunteer options vary; some are online, such as volunteering in the
            fields of writing or design. Other volunteer opportunities are on
            site with an organization or conducting fieldwork in the same city
            or in several cities. The Helping Hands platform provides
            opportunities for many local volunteer opportunities in Jordan, all
            of which provide participants with valuable experience that they can
            benefit from in the future.
          </p>
        </div>
      </div>

      {/* features section */}

      <div class="my-20 bg-white py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              A better way to volunteer
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Find the campaigns for volunteering
            </p>
          </div>
          <div className="flex">
            <div className="m-10">
              <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                  <img
                    class="rounded-lg "
                    src="/image/petra.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                  <p>Find campaigns in Jordan</p>
                </figcaption>
              </figure>
            </div>
            <div className="m-10">
              <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                  <img
                    class="rounded-lg"
                    src="/image/volunteer.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                  <p>Join volunteering campaigns</p>
                </figcaption>
              </figure>
            </div>
            <div className="m-10">
              <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                  <img
                    class="rounded-lg"
                    src="/image/helping.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                  <p>Help others and make a difference</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* slider component */}

      {/* Install pure-react-carousel using -> npm i pure-react-carousel */}
      <div className="">
        <div className="flex items-center justify-between h-full w-full absolute z-0">
          <div className="w-1/3 bg-white h-full" />
          <div className="w-4/6 ml-16 bg-gray-100 h-full" />
        </div>
        <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={2}
          >
            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
              Volunteers make a
              <br />
              <span className="text-blue-500">
                <strong>DIFFERENCE</strong>
              </span>
            </h1>
            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
              Volunteers make a{" "}
              <span className="text-blue-500">
                <strong>DIFFERENCE</strong>
              </span>
            </h1>
            <Slider>
              <Slide index={0} tabIndex="null">
                <div className="flex">
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <img
                        src="/image/martinKing.jpg"
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          Life's most persistent and urgent question is, What
                          are you doing for others?
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600"></p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          -Martin Luther King. Jr.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div
                  className="flex relative"
                  style={{ transform: "translateX(0%)" }}
                >
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <img
                        src="/image/elizabeth.jpg"
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          Volunteers do not necessarily have the time; they just
                          have the heart.
                        </h1>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          -Elizabeth Andrew
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <div className="flex items-center mt-8">
              <ButtonBack
                className="cursor-pointer "
                role="button"
                aria-label="previous slide"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                  alt="previous"
                />
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="next slide"
                className="cursor-pointer ml-2"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                  alt="next"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}