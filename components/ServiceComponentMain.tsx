import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import FAQ from './FAQ'
import { Footer } from './Footer'

type ServiceProp = {
  title: string
  imageUrl: string
  serviceTitle: string
  serviceContent: string
}

const ServiceComponentMain = ({ title, imageUrl, serviceTitle, serviceContent }: ServiceProp) => {
  return (
    <div>
      <div className='relative h-[50vh] w-full overflow-hidden rounded-b-5xl'>
        <Navbar />
        <Image
          src={imageUrl}
          alt='Background'
          layout='fill'
          objectFit='cover'
          className='absolute left-0 top-0 z-0 h-full w-full'
        />

        <div className='absolute inset-0 bg-black bg-opacity-50'></div>

        <div className='absolute inset-0 z-10 flex items-center justify-center text-center'>
          <h1 className='text-4xl font-semibold text-white lg:text-6xl 2xl:text-7xl'>
            {title}
          </h1>
        </div>
      </div>

      <div className='mx-5 my-32 lg:mx-12 2xl:mx-64'>
        <div>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-4xl text-center mb-8'>
            {serviceTitle}
          </h1>
          <p className='mt-4 text-xl text-[#2e3c35] md:text-2xl'>
            {serviceContent}
          </p>
        </div>


        <div className='mt-8 text-xl text-[#2e3c35] md:text-2xl'>
          <p>
            At Aldex Energy, we&apos;re dedicated to making the transition to
            solar energy a smooth and rewarding experience. From initial
            assessment and system design to installation and post-installation
            support, we&apos;re with you every step of the way. Together,
            let&apos;s make a brighter, greener future. Contact us today to
            schedule a consultation and take the first step towards clean energy
            independence.
          </p>
        </div>
      </div>

      <div>
        <FAQ />
      </div>

      <div className='mt-36'>
        <Footer />
      </div>
    </div>
  )
}

export default ServiceComponentMain

type ReusableProp = {
  title: string
  content: string
}

export const ResusableDecimalPoints = ({ title, content }: ReusableProp) => {
  return (
    <div className='mt-8'>
      <h1 className='text-3xl font-semibold text-[#2e3c34] lg:text-4xl 2xl:text-5xl'>
        {title}
      </h1>
      <p className='mt-8 text-xl text-[#2e3c34] md:text-2xl'>{content}</p>
    </div>
  )
}
