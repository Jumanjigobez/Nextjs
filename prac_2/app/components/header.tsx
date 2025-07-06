

import Link from "next/link";
const Header = () =>{
    return(
        <header className="w-100%">
            <nav className="main_menu flex gap-10 items-center pt-10">
                <li>
                    <Link href="/" className="hover:text-blue-500">
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/about" className="hover:text-blue-500">
                        About
                    </Link>
                </li>

                <li>
                    <Link href="/Team" className="hover:text-blue-500">
                        Team
                    </Link>
                </li>
            </nav>
        </header>
    );
}

export default Header;