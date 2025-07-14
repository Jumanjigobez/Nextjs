
import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-blue-500 w-screen pt-5 pb-5 flex justify-around items-center lg:flex-row max-[800px]:flex-col">
        <div className="logo_part">
            <h1 className="text-4xl font-extrabold">ProJokes</h1>
        </div>
        <nav>
            <ul className="flex items-center justify-center gap-5 text-2xl">
                <li>
                    <Link href="/" className="hover:text-gray-700">
                        Home
                    </Link>
                </li>

                 <li>
                    <Link href="/signup" className="hover:text-gray-700">
                        Signup
                    </Link>
                </li>

                 <li>
                    <Link href="/signin" className="hover:text-gray-700">
                        Signin
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header