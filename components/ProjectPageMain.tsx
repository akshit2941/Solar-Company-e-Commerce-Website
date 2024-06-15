import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

type ProjectPageContent = {
  imageUrl: string
  title: string
  subHeading: string
  buttonTitle: string
}

const ProjectPageMain = ({
  imageUrl,
  title,
  subHeading,
  buttonTitle
}: ProjectPageContent) => {
  return (
    <div>
      <div className='relative h-[100vh] w-full overflow-hidden'>
        <div className='relative h-[1000px] w-full overflow-hidden'>
          <Navbar />
          <Image
            src={imageUrl}
            alt='Background'
            layout='fill'
            objectFit='cover'
            className='absolute left-0 top-0 z-0 h-full w-full'
          />
        </div>

        <div className='absolute inset-0 bg-[#232323] bg-opacity-55'></div>

        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
          <h2 className='rounded-3xl bg-[#a26630] p-1 px-4 text-xl font-normal text-white duration-300 hover:bg-[#2c3b35]'>
            {buttonTitle}
          </h2>
          <h1 className='mt-8 text-center text-5xl font-semibold text-white md:text-7xl'>
            {title}
          </h1>
          <p className='mt-10 w-[70%] text-center text-lg font-normal text-white md:w-[50%] md:text-xl'>
            {subHeading}
          </p>
        </div>
      </div>

      <div className='mb-32 h-fit w-full bg-[#f6f6f9] md:h-[250px]'>
        <div className='mx-12 flex flex-row pt-16 md:flex-row lg:mx-32 xl:mx-64'>
          <div className='flex-1'>
            <h1 className='text-2xl font-semibold'>Client</h1>
            <p className='mt-4 text-xl font-medium'>Akshit</p>
          </div>
          <div className='flex-1'>
            <h1 className='text-2xl font-semibold'>Date</h1>
            <p className='mt-4 text-xl font-medium'>June 13, 2024</p>
          </div>
          <div className='flex-1'>
            <h1 className='text-2xl font-semibold'>Services</h1>
            <p className='mt-4 text-xl font-medium'>
              Design, Illustration, Art
            </p>
          </div>
          <div className='flex-1'>
            <h1 className='text-2xl font-semibold'>Share On</h1>
            <div className='mt-2'>
              <div className='flex space-x-4'>
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

      <div className='mx-12 mb-16 lg:mx-24 2xl:mx-64'>
        <div>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Project Overview:
          </h1>
          <p className='mt-2 text-xl text-[#2e3c35] md:mt-4 md:text-2xl'>
            The Solar-Powered Home Project is an initiative aimed at
            transforming a traditional residential property into an
            energy-efficient and sustainable home by integrating solar power
            systems. This project embodies our commitment to reducing carbon
            emissions, decreasing energy bills, and promoting renewable energy
            adoption in residential settings. Through this initiative, we aim to
            demonstrate the feasibility and benefits of solar energy for
            homeowners while contributing to a greener and more sustainable
            future.
          </p>
        </div>

        <div className='mt-12'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Key Project Goals:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Energy Independence:'
              content="By installing solar panels and associated technology, the project seeks to generate a significant portion of the home's electricity needs from renewable energy sources, reducing reliance on the grid."
            />
            <DecimalPoints
              title='Reduced Carbon Footprint:'
              content='The project aims to decrease the carbon footprint of the home by harnessing clean, solar energy, thus contributing to the reduction of greenhouse gas emissions.'
            />
            <DecimalPoints
              title='Cost Savings:'
              content='Demonstrating how solar energy systems can lead to long-term cost savings for homeowners through reduced energy bills and potential incentives or rebates.'
            />
            <DecimalPoints
              title='Education and Outreach:'
              content='The Solar-Powered Home Project also includes an educational component. We will document the installation process, system performance, and cost savings to provide valuable information to homeowners considering solar energy.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Project Components:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Solar Panel Installation:'
              content="The core of the project involves the installation of solar panels on the home's rooftop. These panels will capture sunlight and convert it into electricity."
            />
            <DecimalPoints
              title='Battery Energy Storage:'
              content='To store excess solar energy for use during the evenings or cloudy days, a battery energy storage system will be installed, increasing energy independence.'
            />
            <DecimalPoints
              title='Energy Monitoring System:'
              content='An advanced energy monitoring system will be integrated to track energy generation, consumption, and savings in real-time, providing valuable data for homeowners.'
            />
            <DecimalPoints
              title='Efficiency Upgrades:'
              content='In conjunction with the solar installation, the project may include energy-efficient upgrades to the home, such as LED lighting, improved insulation, and smart thermostats.'
            />
            <DecimalPoints
              title='Educational Materials:'
              content='Throughout the project, educational materials will be created, including videos, guides, and articles, to inform homeowners about the benefits of solar energy and the steps involved in installation.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='ext-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Expected Outcomes:
          </h1>

          <ul className='mt-10 list-disc'>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              A solar-powered home that showcases the practicality and benefits
              of renewable energy.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              A documented reduction in energy bills, illustrating the financial
              advantages of solar power.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Valuable data and insights for homeowners considering solar energy
              adoption.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Increased awareness of sustainable living practices and renewable
              energy among the community.
            </li>
          </ul>
          <p className='mt-8 text-2xl text-[#2e3c35]'>
            The Solar-Powered Home Project represents a significant step towards
            creating a greener and more sustainable future while providing a
            real-world example of how homeowners can benefit from solar energy.
            Through this initiative, we aim to inspire and empower individuals
            to embrace renewable energy solutions in their homes.
          </p>
        </div>
      </div>

      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectPageMain

type DecimalPointsContent = {
  title: string
  content: string
}

export const DecimalPoints = ({ title, content }: DecimalPointsContent) => {
  return (
    <div>
      <li className='custom-list-item mt-3 text-xl text-[#2e3c35] md:mt-6 md:text-2xl'>
        <span className='font-bold'>{title}</span>
        {content}
      </li>
    </div>
  )
}
