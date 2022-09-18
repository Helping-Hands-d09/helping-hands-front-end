
export default function Createdcampiagn() {
    return (
        <>
        <div className="mx-20 my-10 p-10 rounded border border-gray-300">
          <form wtx-context="4DA1B68B-6F73-461A-81F0-6A3B7316A0EE">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Campaign Organizer Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required=""
                  wtx-context="FCF22158-A726-4FBB-8769-8359E51CA10E"
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Campaign Organizer Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john_doe@example.com"
                  required=""
                  wtx-context="989EB4D2-AAFB-44DE-B82E-61CE5E9ED1C4"
                ></input>
              </div>
              <div>
                <label
                  for="title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="campaign title"
                  required=""
                  wtx-context="C0728200-6944-4ABD-8232-7B84ABFF0B40"
                ></input>
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required=""
                  wtx-context="BABF454A-A79B-41A8-9DAA-9C28A2E1C556"
                ></input>
              </div>
              <div>
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  description
                </label>
                <input
                  type="url"
                  id="description"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="volunteering"
                  required=""
                  wtx-context="E9FABCE7-1355-4516-9295-F7044D9BDD16"
                ></input>
              </div>
              <div>
                <label
                  for="location"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="location"
                  required="true"
                  wtx-context="BABF454A-A79B-41A8-9DAA-9C28A2E1C556"
                ></input>
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  category
                </label>
                <input
                  type="url"
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="category"
                  required=""
                  wtx-context="E9FABCE7-1355-4516-9295-F7044D9BDD16"
                ></input>
              </div>
              <div>
                <label
                  for="available_seats"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  available seats
                </label>
                <input
                  type="number"
                  id="available_seats"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                  required=""
                  wtx-context="6BF45CD0-F2D6-4281-84B2-DE808939B323"
                ></input>
              </div>
            </div>
            <div class="mb-6">
              <label
                for="date"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                date
              </label>
              <input
                type="date"
                id="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required="true"
                wtx-context="CAC5BF9D-43E6-4DAA-855A-9F18CD2208DA"
              ></input>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Campaign
            </button>
          </form>
        </div>
      </>
    );
  }
  