'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../public/logo.png'
import { IoMdClose } from 'react-icons/io'
import { CiMenuFries } from 'react-icons/ci'

import Button from './Button'
import Link from 'next/link'

export const Navbar_black = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className='relative z-20 h-40 w-full text-black'>
            <div className='md:t-2 mt-1 flex h-full w-full items-center justify-between px-1 2xl:px-16'>
                <Image
                    src='/logo-color.png'
                    alt='Logo'
                    width={400}
                    height={100}
                    className='cursor-pointer mt-4'
                    priority
                />
                <div className='z-20 hidden lg:flex'>
                    <ul className='hidden space-x-6 text-black md:flex'>
                        <li className='navbar-ul-class-black'>
                            <Link href='/home'>Home</Link>
                        </li>
                        <li className='navbar-ul-class-black'>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className='navbar-ul-class-black'>
                            <Link href='/projects'>Projects</Link>
                        </li>
                        <li className='navbar-ul-class-black'>
                            <Link href='/solutions'>
                                Solutions
                            </Link>
                        </li>
                        <li className='navbar-ul-class-black'>
                            <Link href='/services'>Services</Link>
                        </li>
                        <li className='navbar-ul-class-black'>
                            <Link href='/products'>Products</Link></li>
                    </ul>
                </div>

                <button className='navbar-btn mr-12 hidden border-black text-black lg:flex'>
                    <Link href='/contact'>Contact Us</Link>
                </button>

                <div onClick={handleNav} className='cursor-pointer mr-5 lg:hidden'>
                    <CiMenuFries size={25} />
                </div>
            </div>

            <div
                className={`fixed top-0 ${menuOpen ? 'left-0' : 'left-[-100%]'} h-screen w-[65%] md:w-[45%] bg-[#feffff] p-2 text-black duration-500 ease-in lg:hidden`}
            >
                <div className='flex flex-row'>
                    <div className='flex justify-center'>
                        <Image
                            src='/logo-color.png'
                            alt='Logo'
                            width={400}
                            height={100}
                            className='cursor-pointer'
                            priority
                        />
                    </div>

                    <div className='flex w-full items-center justify-end'>
                        <div className='mr-3 cursor-pointer' onClick={handleNav}>
                            <IoMdClose size={28} />
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <ul className='flex flex-col'>
                        <li className='navbar-ul-class-menue'>
                            <Link href='/home'>Home</Link>
                        </li>
                        <li className='navbar-ul-class-menue'>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className='navbar-ul-class-menue'>
                            <Link href='/projects'>Projects</Link>
                        </li>
                        <li className='navbar-ul-class-menue'><Link href='/solutions'>
                            Solutions
                        </Link></li>
                        <li className='navbar-ul-class-menue'>
                            <Link href='/services'>Services</Link>
                        </li>
                        <li className='navbar-ul-class-menue'> <Link href='/products'>Products</Link></li>
                    </ul>
                </div>
                <div className='ml-2 mt-5'>
                    <Link href='/contact'>
                        <Button title='Contact Us' variant='btn_black' />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar_black
