'use client';
import React, { useState } from 'react'
import Link from 'next/link';

function Hamburger() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (

        <div>
            <div className="fixed top-0 left-0 w-full bg-yellow-400 text-blue-600 z-50">
                <div className="container flex justify-between items-end  py-4 md:flex-nowrap">
                    <div className=' md:ml-48'>
                        <Link href="/" className="text-xl font-bold">24hr Iphone Screen Repair</Link>
                    </div>
                    <div className=' sm: hidden md:flex md:justify-end '   >
                        <nav className=' md:flex md:items-center md:space-x-6 md:justify-end'>
                            <Link href="/" className="text-base hover:text-gray-200">Home</Link>
                            <Link href="/About" className="text-base hover:text-gray-200">About Us</Link>
                            <Link href="/Prices" className="text-base hover:text-gray-200 ">Prices</Link>
                        </nav>
                    </div>
                    <button onClick={toggleMenu} className="md:hidden block focus:outline-none">
                        <svg
                            className="h-6 w-6 text-blue-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-blue-800 text-white pt-4">
                        <ul className="space-y-2 px-4">
                            <li>
                                <Link href="/" onClick={toggleMenu} className="text-base block py-2 hover:text-gray-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/About" onClick={toggleMenu} className="text-base block py-2 hover:text-gray-200">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/Prices" onClick={toggleMenu} className="text-base block py-2 hover:text-gray-200">
                                    Repair Prices
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Hamburger