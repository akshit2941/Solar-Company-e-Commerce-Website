import AboutPage from '@/app/about/page'
import Home from '@/app/home/page'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-[#2d3d33] text-white rounded-t-[50px] h-fit flex justify-center items-center'>
      <div className='text-center'>
        {/* Left */}
        <div className='mb-4'>
          <div className='flex justify-center mt-2'>
            <Image src='/logo.png' alt="logo" width={220} height={50} />
          </div>
          <h1 className='text-white text-xl mt-2 mx-4'>&quot;Go Green, Go Solar&quot;</h1>
        </div>
        <div className='flex justify-center items-center text-center mt-4'>
          <Image src="/mail.svg" alt='mail' width={30} height={35} />
          <h1 className='text-white ml-2 text-xl'>sales@aldexenergies.com</h1>
        </div>

        <div className='flex justify-center '>
          <ul className='flex w-full flex-row justify-center'>
            <li className='footer-li'>
              <Link href="/home">
                Home
              </Link>
            </li>
            <li className='footer-li'>
              <Link href="/about">
                About
              </Link>
            </li>
            <li className='footer-li'>
              <Link href='/projects'>
                Project
              </Link>

            </li>
            <li className='footer-li'>Solutions</li>
            <li className='footer-li'>
              <Link href='/services'>
                Services
              </Link>

            </li>
            <li className='footer-li'>Products</li>
          </ul>
        </div>

        <div className='border-t border-white w-full mt-4'></div>

        <div className=' my-2'>
          <p>CopyRight © 2022</p>
        </div>

      </div>
    </div>
  )
}
