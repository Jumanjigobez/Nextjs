

import Link from "next/link";
const Header = () =>{
    return(
        <header className="w-screen bg-green-200">
            <nav className="main_menu flex gap-10 items-center justify-center p-10 text-3xl">
                <li>
                    <Link href="/" className="hover:text-blue-500 active:text-blue-500">
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/about" className="hover:text-blue-500 active:text-blue-500">
                        About
                    </Link>
                </li>

                <li>
                    <Link href="/Team" className="hover:text-blue-500 active:text-blue-500">
                        Team
                    </Link>
                </li>
            </nav>
        </header>
    );
}

export default Header;