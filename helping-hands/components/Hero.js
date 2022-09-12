export default function Hero() {
    return (
      <>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                Welcome to Helping Hands
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                {/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem/> */}
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  href="login"
                  class="px-8 py-3 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </a>
                <a
                  href="signup"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Register
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128  hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="/image/card.jpg"
                alt=""
                className="object-contain rounded h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>
      </>
    );
}