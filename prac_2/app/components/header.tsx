

import Link from "next/link";
const Header = () =>{
    return(
        <header className="bg-green-500 w-100">
            <nav>
                <li>
                    <Link href="/" className="text-blue">
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>

                <li>
                    <Link href="/Team">
                        Team
                    </Link>
                </li>
            </nav>
        </header>
    );
}

export default Header;