import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../contexts/Auth'
import { useContext } from 'react';


export default function Login(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isUncorrect, setIsUncorrect] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    let check = await login(e.target.email.value, e.target.password.value);

    // console.log(check);

    if (check) {
      router.push('/Profile');
    }
    else {
      setIsUncorrect(true)
    }

  }

  return (

    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form onSubmit={handleLogin} class="space-y-4 md:space-y-6" action="#">
                <div>
                  {isUncorrect &&
                    <p className='text-center text-red-500 mb-8'>The email or password is incorrect, please try again.</p>
                  }
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  ></input>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  ></input>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
              </form>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <button
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  onClick={() => router.push('/signup')}
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}