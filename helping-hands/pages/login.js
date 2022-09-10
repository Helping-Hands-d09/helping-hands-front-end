import Link from 'next/link'



export default function Login() {



    return (
        <>
            <div className="pb-2 mx-auto bg-gray-100 shadow-2xl rounded-2xl md:w-1/2 ">
                <div className="flex flex-col p-10 my-20">
                    <form >
                 
                    email  <input name="email" type="email" className="inputField" />
                   
                    password      <input type="password" name="password" className="inputField" />
                     
                        <div className="btnContainer">
                            <button type="submit" className="btn" >
                                Log In
                            </button>

                            <p> Not register yet!   <Link href="/signup">
                            signup
                </Link>
                </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}