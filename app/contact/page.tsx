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

      <div className="h-[50vh] w-full overflow-hidden relative  rounded-b-5xl">
        <Navbar />
        <div className='relative overflow-hidden h-[900px] w-full'>
          <Image
            src="/contactNavbar.webp"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full z-0"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-7xl font-medium">Contact Us</h1>
        </div>
      </div>

      <div className='my-32'>
        <div className='flex flex-col md:flex-row mx-8 lg:mx-64 mb-32'>
          <div className='flex-1 mt-16 p-8 pl-0'>

            <div className='flex mb-8'>
              <h1 className='text-2xl bg-[#e2d1bf] text-[#936a45] p-3 px-6 rounded-5xl'>Get In Touch</h1>
            </div>

            <div className=' mb-4'>
              <h1 className='text-5xl font-semibold  mb-4'>
                Chat With Our Support Team
              </h1>
              <p className='text-2xl'>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
            </div>

            <div className='mt-8'>
              <ul className="numbered-list list-none space-y-6 mt-4">
                <li className="text-black text-2xl font-normal">Innovative solutions</li>
                <li className="text-black text-2xl font-normal">Successful projects</li>
                <li className="text-black text-2xl font-normal">24/7 support</li>
              </ul>
            </div>
          </div>

          <div className='flex-1 justify-center items-center my-16'>
            <div className='relative flex w-full h-full ml-8'>
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

      <div className='mx-64 my-32'>
        <FAQ />
      </div>

      <div className='mt-32'>
        <Footer />
      </div>



    </div>

  )
}

export default ContactPage