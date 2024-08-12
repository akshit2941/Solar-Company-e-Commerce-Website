import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { DecimalPoints } from '@/components/DecimalPoints'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const ProjectPage6 = () => {
  return (
    <div>
      <div className='relative h-[100vh] w-full overflow-hidden'>
        <div className='relative h-[1000px] w-full overflow-hidden'>
          <Navbar />
          <Image
            src="/energy-3.jpg"
            alt='Background'
            layout='fill'
            objectFit='cover'
            className='absolute left-0 top-0 z-0 h-full w-full'
          />
        </div>

        <div className='absolute inset-0 bg-[#232323] bg-opacity-55'></div>

        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
          <h2 className='rounded-3xl bg-[#a26630] p-1 px-4 text-xl font-normal text-white duration-300 hover:bg-[#2c3b35]'>
            Government Project
          </h2>
          <h1 className='mt-8 text-center text-5xl font-semibold text-white md:text-7xl'>
            PM Ghar Yojna
          </h1>
          <p className='mt-10 w-[70%] text-center text-lg font-normal text-white md:w-[50%] md:text-xl'>
            The PM Ghar Yojna project involved installing solar power systems across 150 houses under a prominent government initiative. This project aims to enhance the quality of life for beneficiaries by providing sustainable and reliable solar energy solutions, reflecting a commitment to improving energy access and promoting green energy practices at the grassroots level.
          </p>
        </div>
      </div>

      <div className='mb-8 h-fit w-full bg-[#f6f6f9] md:h-[250px]'>
        <div className='mx-12 flex flex-row pt-16 md:flex-row lg:mx-32 xl:mx-64'>
          <div className='flex-1 justify-center text-center'>
            <h1 className='text-2xl font-semibold'>Share On</h1>
            <div className='mt-2'>
              <div className='flex space-x-4 text-center justify-center'>
                <div className='rounded-full bg-[#decbbf] p-4'>
                  <FaFacebookF className='h-6 w-6 text-[#a56d4c]' />
                </div>
                <div className='rounded-full bg-[#decbbf] p-4'>
                  <FaInstagram className='h-6 w-6 text-[#a56d4c]' />
                </div>
                <div className='rounded-full bg-[#decbbf] p-4'>
                  <FaTwitter className='h-6 w-6 text-[#a56d4c]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-12 mt-16 mb-16 lg:mx-24 2xl:mx-64'>
        <div>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Project Overview:
          </h1>
          <p className='mt-2 text-xl text-[#2e3c35] md:mt-4 md:text-2xl'>
            The PM Ghar Yojna project stands out as a significant government-led initiative, involving the deployment of solar power systems for 150 houses. This endeavor reflects our dedication to supporting government schemes aimed at enhancing energy access and sustainability. By integrating solar technology into residential settings, the project promotes cleaner energy solutions and helps reduce energy poverty in underserved communities.
          </p>
        </div>

        <div className='mt-12'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Key Project Goals:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Energy Access Improvement:'
              content="Facilitating access to reliable and sustainable solar energy for 150 households, thereby improving their quality of life."
            />
            <DecimalPoints
              title='Support for Government Initiatives:'
              content='Aligning with government objectives to promote renewable energy and provide energy solutions to underserved communities.'
            />
            <DecimalPoints
              title='Environmental Benefits:'
              content='Reducing carbon emissions and fostering a greener environment through widespread adoption of solar energy in residential areas.'
            />
            <DecimalPoints
              title='Community Empowerment:'
              content='Empowering local communities with the tools and technology to achieve energy self-sufficiency and sustainability.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Project Components:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Residential Solar Panels:'
              content="Installation of solar panels on 150 homes, each designed to capture and utilize solar energy effectively."
            />
            <DecimalPoints
              title='Inverter Systems:'
              content='High-efficiency inverters to convert solar energy into usable electricity for residential needs.'
            />
            <DecimalPoints
              title='Energy Storage:'
              content='Incorporation of storage solutions to ensure power availability during non-sunny periods.'
            />
            <DecimalPoints
              title='Training and Support:'
              content='Providing training and ongoing support to residents to maximize the benefits of their new solar systems.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Expected Outcomes:
          </h1>
          <ul className='mt-10 list-disc'>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Enhanced energy access for 150 households, significantly improving their energy independence and quality of life.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Contributing to the reduction of energy poverty and promoting sustainability through widespread solar adoption.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Environmental improvements with a reduction in carbon emissions and reliance on non-renewable energy sources.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Strengthened community resilience and empowerment through access to reliable and clean energy solutions.
            </li>
          </ul>
          <p className='mt-8 text-2xl text-[#2e3c35]'>
            The PM Ghar Yojna project underscores our commitment to supporting government initiatives and enhancing energy access for underserved communities. By providing solar power solutions to 150 households, this project not only delivers tangible benefits to its beneficiaries but also contributes to broader sustainability goals.
          </p>
        </div>
      </div>

      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectPage6
