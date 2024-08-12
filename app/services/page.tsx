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

      <div className='mx-4 mt-12 flex flex-col lg:mx-12 lg:gap-2 2xl:mx-64'>
        <div className='flex flex-col 2xl:mt-14 md:flex-row'>
          <div className='service-navigator-common-class'>
            <Link href='/services/service1'>
              <ServiceNavigator
                title='Solar Engineering'
                content='Designing cutting-edge solar solutions that drive efficiency and innovation.'
                img='/service-1.svg'
              />
            </Link>
          </div>
          <div className='service-navigator-common-class'>
            <Link href='/services/service2'>
              <ServiceNavigator
                title='Solar Procurement'
                content='Streamlining procurement to ensure top-quality solar equipment and materials.'
                img='/service-2.svg'
              />
            </Link>
          </div>
          <div className='service-navigator-common-class'>
            <Link href='/services/service3'>
              <ServiceNavigator
                title='Solar Construction'
                content='Optimizing construction processes for efficient and reliable solar installations.'
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
                content='Assessing energy use to uncover opportunities for cost savings and efficiency.'
                img='/service-4.svg'
              />
            </Link>
          </div>
          <div className='service-navigator-common-class'>
            <Link href='/services/service5'>
              <ServiceNavigator
                title='Solar Operations & Maintenance'
                content='Ensuring the long-term performance and reliability of solar power systems.'
                img='/service-5.svg'
              />
            </Link>
          </div>
          <div className='service-navigator-common-class'>
            <Link href='/services/service6'>
              <ServiceNavigator
                title='Rain Water Harvesting'
                content='Implementing systems to capture and utilize rainwater efficiently.'
                img='/service-7.svg'
              />
            </Link>
          </div>
        </div>
      </div>


      <div className='my-32 flex justify-center bg-[#f6f7f9]'>
        <div className='mx-12 flex w-full flex-col items-center md:flex-row md:mx-6 lg:mx-14 2xl:mx-64'>
          <div className='flex-1 flex-col'>
            <h1 className='text-3xl font-semibold lg:text-5xl'>
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
            <div className='mt-14 md:mt-6 lg:mt-14 flex items-center'>
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
