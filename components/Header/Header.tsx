"use client"
import Link from 'next/link'
import css from "./Header.module.css";
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
    const [active, setActive] = useState<string>("");

    const handleClick = (route: string) => {
        setActive(route);
    };

    return (
        <header className={css.header}>
                <Link href="/" className={css.logo}>
                    <Image
                        src="/Logo.svg"
                        alt="Travel Truck Logo"
                        width={136}
                        height={16}
                    />
                </Link>
            <nav className={css.navbar}>
                <ul className={css.navigation}>
                    <li className='p-main-bold'>
                        <Link
                            className={active === "/" ? css.active : ""}
                            href="/"
                            onClick={() => handleClick("/")}>
                            Home
                        </Link>
                    </li>
                    <li className='p-main-bold'>
                        <Link
                            className={active === "/catalog" ? css.active : ""}
                            href="/catalog"
                            onClick={() => handleClick("/catalog")}>
                            Catalog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header