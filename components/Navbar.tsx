"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../public/logo.png'
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

import Button from './Button'
import Link from 'next/link'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='relative w-full h-24 text-white z-20'>
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <Image
                    src={Logo}
                    alt='Logo'
                    width={205}
                    height={75}
                    className='cursor-pointer'
                    priority
                />
                <div className='hidden sm:flex'>
                    <ul className="hidden md:flex space-x-6 text-white">
                        <li className='navbar-ul-class'>
                            <Link href='/home'>
                                Home
                            </Link>
                        </li>
                        <li className='navbar-ul-class'>
                            <Link href='/about'>
                                About us
                            </Link>
                        </li>
                        <li className='navbar-ul-class'>
                            <Link href='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li className='navbar-ul-class'>Solutions</li>
                        <li className='navbar-ul-class'>
                            <Link href='/services'>
                                Services
                            </Link>
                        </li>
                        <li className='navbar-ul-class'>Products</li>
                    </ul>
                </div>

                <button className="hidden md:flex navbar-btn text-white mr-12 border-white">
                    <Link href='/contact'>
                        Contact Us
                    </Link>
                </button>

                <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
                    <CiMenuFries size={25} />
                </div>
            </div>

            <div className={`fixed top-0 ${menuOpen ? 'left-0' : 'left-[-100%]'} w-[65%] sm:hidden h-screen bg-[#feffff] text-black p-2 ease-in duration-500`}>
                <div className='flex flex-row'>
                    <div className='flex justify-center'>
                        <Image
                            src='/logo-color.png'
                            alt='Logo'
                            width={400}
                            height={100}
                            className='cursor-pointer '
                            priority
                        />
                    </div>

                    <div className='flex w-full items-center justify-end'>
                        <div className='cursor-pointer mr-3' onClick={handleNav}>
                            <IoMdClose size={28} />
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <ul className='flex flex-col'>
                        <li className='navbar-ul-class'>
                            <Link href='/home'>
                                Home
                            </Link>
                        </li>
                        <li className='navbar-ul-class'>
                            <Link href='/about'>
                                About us
                            </Link>
                        </li>
                        <li className='navbar-ul-class'>
                            <Link href='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li className='navbar-ul-class'>Solutions</li>
                        <li className='navbar-ul-class'>
                            <Link href='/services'>
                                Services
                            </Link>
                        </li>
                        <li className='navbar-ul-class'>Products</li>
                    </ul>
                </div>
                <div className='mt-5 ml-2'>
                    <Button
                        title='Contact Us'
                        variant='btn_black'
                    />
                </div>
            </div>
        </nav>
    )
}


export default Navbar