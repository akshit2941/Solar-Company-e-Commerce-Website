import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex h-fit items-center justify-center rounded-t-[50px] bg-[#2d3d33] text-white'>
      <div className='text-center'>
        {/* Left */}
        <div className='mb-4'>
          <div className='mt-2 flex justify-center'>
            <Image src='/logo.png' alt='logo' width={220} height={50} />
          </div>
          <h1 className='mx-4 mt-2 text-xl text-white'>
            &quot;Go Green, Go Solar&quot;
          </h1>
        </div>
        <div className='mt-4 flex items-center justify-center text-center'>
          <Image src='/mail.svg' alt='mail' width={30} height={35} />
          <h1 className='ml-2 text-xl text-white'>sales@aldexenergies.com</h1>
        </div>

        <div className='flex justify-center'>
          <ul className='flex w-full flex-row justify-center'>
            <li className='footer-li'>
              <Link href='/home'>Home</Link>
            </li>
            <li className='footer-li'>
              <Link href='/about'>About</Link>
            </li>
            <li className='footer-li'>
              <Link href='/projects'>Project</Link>
            </li>
            <li className='footer-li'>
              <Link href='/solutions' >Solutions</Link></li>
            <li className='footer-li'>
              <Link href='/services'>Services</Link>
            </li>
            <li className='footer-li'>
              <Link href='/products'>Products</Link>
              {/* Products */}
            </li>
          </ul>
        </div>

        <div className='mt-4 w-full border-t border-white'></div>

        <div className='my-2'>
          <p>CopyRight © 2022</p>
        </div>
      </div>
    </div>
  )
}
