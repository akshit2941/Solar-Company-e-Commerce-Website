import { ClientStories } from '@/components/ClientStories'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <div className='relative h-[50vh] w-full overflow-hidden rounded-b-5xl'>
        <div className='relative h-[900px] w-full overflow-hidden'>
          <Navbar />
          <Image
            src='/contactNavbar.webp'
            alt='Background'
            layout='fill'
            objectFit='cover'
            className='absolute left-0 top-0 z-0 h-full w-full'
          />
        </div>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='absolute inset-0 z-10 flex items-center justify-center'>
          <h1 className='text-5xl font-semibold text-white lg:text-6xl xl:text-7xl'>
            Contact Us
          </h1>
        </div>
      </div>

      <div className='my-2 md:my-32'>
        <div className='mx-8 mb-8 flex flex-col md:mb-32 md:flex-row lg:mx-20 xl:mx-64'>
          <div className='mt-16 flex-1 p-8 pl-0'>
            <div className='mb-8 flex'>
              <h1 className='rounded-5xl bg-[#e2d1bf] p-3 px-6 text-2xl text-[#936a45]'>
                Get In Touch
              </h1>
            </div>

            <div className='mb-4'>
              <h1 className='mb-4 text-3xl font-semibold md:text-5xl'>
                Chat With Our Support Team
              </h1>
              <p className='text-xl md:text-2xl'>
                Our team is always ready to assist you with any questions, concerns, or inquiries you might have. Whether you're interested in learning more about our products and services, need technical support, or just want to chat about your project ideas, we're just a message away.
              </p>
            </div>

            <div className='mt-8'>
              <ul className='numbered-list mt-4 list-none space-y-6'>
                <li className='text-2xl font-normal text-black'>
                  Innovative solutions
                </li>
                <li className='text-2xl font-normal text-black'>
                  Successful projects
                </li>
                <li className='text-2xl font-normal text-black'>
                  24/7 support
                </li>
              </ul>
            </div>
          </div>

          <div className='my-6 flex-1 items-center justify-center md:my-16'>
            <div className='relative flex h-[300px] w-full md:ml-8 md:h-full md:w-full'>
              <Image
                src='/contactImage.webp'
                alt='Contact Image'
                layout='fill'
                objectFit='cover'
                className='rounded-3xl'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center bg-gray-100'>
        <ContactForm />
      </div>

      <div>
        <ClientStories />
      </div>

      <div className='my-12 md:my-32'>
        <FAQ />
      </div>

      <div className='md:mt-32'>
        <Footer />
      </div>
    </div>
  )
}

export default ContactPage
