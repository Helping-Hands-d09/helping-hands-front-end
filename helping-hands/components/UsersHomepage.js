import Feed from "./Feed";
export default function MyPosts() {
  return (
    <>
      <div class="flex justify-center w-screen h-screen px-4 text-gray-700">
        <div class="flex w-full max-w-screen-lg">
          <div class="flex flex-col w-64 py-4 pr-3">
            <a
              class="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
              href="#"
            >
              Home
            </a>
            <a
              class="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
              href="#"
            >
              Profile
            </a>
            <a
              class="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
              href="#"
            >
              Campaigns
            </a>
            <a
              class="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
              href="#"
            >
              Posts
            </a>
            <a
              class="flex px-3 py-2 mt-2 mt-auto text-lg rounded-sm font-medium hover:bg-gray-200"
              href="#"
            >
              <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
              <div class="flex flex-col ml-2">
                <span class="mt-1 text-sm font-semibold leading-none">
                  Username
                </span>
                <span class="mt-1 text-xs leading-none">@username</span>
              </div>
            </a>
          </div>

          

          {/*################# Changing component ##################*/}
          <Feed />
          {/*################# Changing component #########################*/}

          
          
          <div class="flex flex-col flex-shrink-0 w-1/4 py-4 pl-4">
            <div>
              <h3 class="mt-6 font-semibold">Section</h3>
              <div class="flex w-full py-4 border-b border-gray-300">
                <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                <div class="flex flex-col flex-grow ml-2">
                  <div class="flex text-sm">
                    <span class="font-semibold">Username</span>
                    <span class="ml-1">@username</span>
                  </div>
                  <p class="mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div class="flex w-full py-4 border-b border-gray-300">
                <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                <div class="flex flex-col flex-grow ml-2">
                  <div class="flex text-sm">
                    <span class="font-semibold w-full">Username</span>
                    <span class="ml-1">@username</span>
                  </div>
                  <p class="mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div class="flex w-full py-4 border-b border-gray-300">
                <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                <div class="flex flex-col flex-grow ml-2">
                  <div class="flex text-sm">
                    <span class="font-semibold">Username</span>
                    <span class="ml-1">@username</span>
                  </div>
                  <p class="mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}
