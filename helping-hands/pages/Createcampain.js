import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/Auth'

export default function Createdcampiagn() {
    const router = useRouter();
    const { tokens, userInfo, refreshToken, isAuth } = useAuth();

    // console.log(tokens);

    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);

    const [config, setConfig] = useState();

    const categoriesURL = "https://helping-hands-api.herokuapp.com/api/v1/campaign/category/"
    const locationsURL = "https://helping-hands-api.herokuapp.com/api/v1/campaign/location/"
    const createCampaignURL = "https://helping-hands-api.herokuapp.com/api/v1/campaign/"
    const connectionInfoURL = "https://helping-hands-api.herokuapp.com/api/v1/connection/"


    useEffect(() => {
        (async () => {

            const categoriesData = await axios.get(categoriesURL);
            const locationsData = await axios.get(locationsURL);

            setCategories(categoriesData.data);
            setLocations(locationsData.data);

        })();
    }, []);
    // console.log(config);

    async function handleCreateCampaign(e) {
        e.preventDefault();

        // console.log(isAuth());

        if (!isAuth()) {
            await refreshToken()
        }

        setConfig({
            headers: {
                'Authorization': `Bearer ${tokens.access}`
            }
        })

        let userInput = {
            organizer_name: parseInt(userInfo),
            category_name: parseInt(e.target.category.value),
            location_name: parseInt(e.target.location.value),
            title: e.target.title.value,
            description: e.target.description.value,
            date: e.target.date.value,
            available_sets: parseInt(e.target.available_seats.value),
            image: null
        }

        console.log(userInput);
        axios.post(createCampaignURL, userInput, config)
            .then(response => axios.post(connectionInfoURL, { campaign: response.data.id, member: parseInt(userInfo) }, config))

        // router.push('/HomePage');
    }

    return (
        <>
            <div className="mx-20 my-10 p-10 rounded border border-gray-300">
                <form onSubmit={handleCreateCampaign} wtx-context="4DA1B68B-6F73-461A-81F0-6A3B7316A0EE">
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        {/* <div>
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
                        </div> */}
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
                        {/* <div>
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
                        </div> */}
                        <div>
                            <label
                                for="description"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Description
                            </label>
                            <input
                                type="textarea"
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
                            <select
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="location"
                                name="location"
                            >
                                {locations.map(item => {
                                    return (
                                        <option value={item.id}>{item.city_name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <label
                                for="category"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Category
                            </label>
                            <select
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="category"
                                name="category"
                            >
                                {categories.map(item => {
                                    return (
                                        <option value={item.id}>{item.title}</option>
                                    )
                                })}
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        <div>
                            <label
                                for="available_seats"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Available Seats
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
                            Date
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
    )
}
