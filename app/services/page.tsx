import Button from '@/components/Button'
import ClientDetails from '@/components/ClientDetails'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ServiceNavigator } from '@/components/ServiceNavigator'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServicePage = () => {
  return (
    <div>
      <div className='relative h-[50vh] w-full overflow-hidden rounded-b-5xl'>
        <Navbar />
        <Image
          src='/serviceNavbar.webp'
          alt='Background'
          layout='fill'
          objectFit='cover'
          className='absolute left-0 top-0 z-0 h-full w-full'
        />

        <div className='absolute inset-0 rounded-lg bg-black bg-opacity-50'></div>
        <div className='absolute inset-0 z-10 flex items-center justify-center'>
          <h1 className='text-4xl font-medium text-white md:text-7xl'>
            Services
          </h1>
        </div>
      </div>

      <div className='mx-4 mt-12 flex flex-col lg:mx-12 lg:gap-2 xl:mx-64'>
        <div className='flex flex-col md:mt-14 md:flex-row'>
          <div className='service-navigator-common-class'>
            <Link href='/services/service1'>
              <ServiceNavigator
                title='Energy Storage Solutions'
                content='We believe that technology design are revolutionizing brand experiences.'
                img='/service-1.svg'
              />
            </Link>
          </div>
          <div className='service-navigator-common-class'>
            <Link href='/services/service2'>
              <ServiceNavigator
                title='Solar Panel Installation'
                content='We believe that human-centered design are revolutionizing brand experiences.'
                img='/service-2.svg'
              />
            </Link>
          </div>
          <div className='service-navigator-common-class'>
            <Link href='/services/service3'>
              <ServiceNavigator
                title='Wind Turbine Installation'
                content='Reduce your capital and operating costs, while modernizing your IT.'
                img='/service-3.svg'
              />
            </Link>
          </div>
        </div>
        <div className='flex flex-col md:flex-row lg:mt-32 xl:mt-14'>
          <div className='service-navigator-common-class'>
            <Link href='/services/service4'>
              <ServiceNavigator
                title='Energy Audits'
                content='We believe that technology design are revolutionizing brand experiences.'
                img='/service-4.svg'
              />
            </Link>
          </div>
          <div className='service-navigator-common-class'>
            <Link href='/services/service5'>
              <ServiceNavigator
                title='Renewable Energy 
                                Consult'
                content='Process of designing, creating, deploying and maintaining software.'
                img='/service-5.svg'
              />
            </Link>
          </div>
          <div className='service-navigator-common-class'>
            <Link href='/services/service6'>
              <ServiceNavigator
                title='Shredding Services'
                content='Protect networks, devices and data from attacks or unauthorized access.'
                img='/service-6.svg'
              />
            </Link>
          </div>
        </div>
        <div className='flex flex-col md:mt-14 md:flex-row'>
          <div className='service-navigator-common-class'>
            <Link href='/services/service7'>
              <ServiceNavigator
                title='Cardboard & Paper Recycling'
                content='See to the integrity and security of your records.'
                img='/service-7.svg'
              />
            </Link>
          </div>
          <div className='service-navigator-common-class'>
            <Link href='/services/service8'>
              <ServiceNavigator
                title='Solutions for Scrap Metal'
                content='See to the integrity and security of your records.'
                img='/service-8.svg'
              />
            </Link>
          </div>
          <div className='service-navigator-common-class'>
            <Link href='/services/service9'>
              <ServiceNavigator
                title='Commercial Plastics Recycling'
                content='See to the integrity and security of your records.'
                img='/service-9.svg'
              />
            </Link>
          </div>
        </div>
      </div>

      <div className='my-32 flex justify-center bg-[#f6f7f9]'>
        <div className='mx-12 flex w-full flex-col items-center md:flex-row lg:mx-14 xl:mx-64'>
          <div className='flex-1 flex-col'>
            <h1 className='text-3xl font-semibold md:text-5xl'>
              Eco-Advantages: What You Gain By Choosing Us
            </h1>
            <ul className='mt-14 list-inside list-disc space-y-2'>
              <li className='service-list'>
                Expertise in Sustainability Solutions
              </li>
              <li className='service-list'>
                Circular Economy, Reduced Footprint
              </li>
              <li className='service-list'>
                Measurable Impact, Lasting Change
              </li>
            </ul>
            <div className='mt-14 flex items-center'>
              <Button title='View Projects' variant='btn_black' />
            </div>
          </div>

          <div className='relative my-12 h-[1000px] w-full flex-1 justify-end overflow-hidden rounded-3xl md:h-[500px]'>
            <Image
              src='/serviceContainer.webp'
              alt='Service Image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>

      <div>
        <ClientDetails />
      </div>

      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  )
}

export default ServicePage
