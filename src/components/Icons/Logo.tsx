import Link from 'next/link'
import React from 'react'

interface ILogoProps {}

const Logo: React.FC<ILogoProps> = (props) => {
    return (
        <Link href="/">
            <a className="flex border-primary dark:border-primaryDark border-2 w-14.5 h-14.5 max-h-14.5 cursor-pointer tilt motion-reduce:transform-none">
                <h1 className="text-4xl">
                    M<span className="relative -bottom-1">c</span>
                </h1>
                <span className="font-bold absolute right-2.5 animate-bounce motion-safe:animate-bounce">c</span>
            </a>
        </Link>
    )
}

export default Logo
