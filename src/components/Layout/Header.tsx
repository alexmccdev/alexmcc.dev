import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '@components/Icons/Logo'
import ThemeToggle from '@components/ThemeToggle'
import { DownloadIcon } from '@components/Icons/OtherIcons'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    const { pathname } = useRouter()

    return (
        <nav className="w-full flex p-4 align-middle justify-between mb-10">
            <div>
                <Logo />
            </div>
            <ul className="block text-right sm:flex text-base sm:text-2xl">
                <li className="mr-2 sm:mr-6 my-auto">
                    <span className={`${pathname === '/' && 'underline'} cursor-pointer`}>
                        <Link href="/">Home</Link>
                    </span>
                </li>
                <li className="mr-2 sm:mr-6 my-auto">
                    <span className={`${pathname === '/about' && 'underline'} cursor-pointer`}>
                        <Link href="/about">About</Link>
                    </span>
                </li>
                <li className="mr-2 sm:mr-6 my-auto">
                    <span className={`${pathname === '/projects' && 'underline'} cursor-pointer`}>
                        <Link href="/projects">Projects</Link>
                    </span>
                </li>
                <li className="my-auto mr-2 sm:mr-0">
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    )
}

export default Header
