import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { DecimalPoints } from '@/components/DecimalPoints'

import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const ProjectPage3 = () => {
  return (
    <div>
      <div className='relative h-[100vh] w-full overflow-hidden'>
        <div className='relative h-[1000px] w-full overflow-hidden'>
          <Navbar />
          <Image
            src="/project-2.jpg"
            alt='Background'
            layout='fill'
            objectFit='cover'
            className='absolute left-0 top-0 z-0 h-full w-full'
          />
        </div>

        <div className='absolute inset-0 bg-[#232323] bg-opacity-55'></div>

        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
          <h2 className='rounded-3xl bg-[#a26630] p-1 px-4 text-xl font-normal text-white duration-300 hover:bg-[#2c3b35]'>
            400 kWh
          </h2>
          <h1 className='mt-8 text-center text-5xl font-semibold text-white md:text-7xl'>
            Bharat Electronics Limited
          </h1>
          <p className='mt-10 w-[70%] text-center text-lg font-normal text-white md:w-[50%] md:text-xl'>
            A prestigious 400 kWh solar power system was expertly installed at Bharat Electronics Limited, showcasing one of our most significant and high-profile projects. This advanced solar solution integrates cutting-edge technology to enhance the facility&apos;s energy efficiency and sustainability, setting a high standard for excellence in solar energy deployment.
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
            The 400 kWh solar power system at Bharat Electronics Limited represents a landmark achievement in our portfolio. This high-profile installation exemplifies our capability to deliver top-tier solar solutions, integrating state-of-the-art technology to enhance energy efficiency and sustainability at one of the industry&apos;s leading companies. The project underscores our commitment to excellence and innovation in renewable energy.
          </p>
        </div>

        <div className='mt-12'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Key Project Goals:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Advanced Energy Solutions:'
              content="Deploying a 400 kWh solar system to significantly enhance the facility's energy efficiency and sustainability."
            />
            <DecimalPoints
              title='Sustainable Technology:'
              content='Utilizing cutting-edge solar technology to reduce the facility’s carbon footprint and support green energy practices.'
            />
            <DecimalPoints
              title='Operational Excellence:'
              content='Ensuring optimal performance and reliability with a sophisticated solar power system designed for high-demand environments.'
            />
            <DecimalPoints
              title='Leadership in Renewable Energy:'
              content='Demonstrating leadership and innovation in the integration of large-scale solar solutions within a major industry player.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Project Components:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='High-Capacity Solar Panels:'
              content="Installation of a 400 kWh array of advanced solar panels designed to maximize energy capture and efficiency."
            />
            <DecimalPoints
              title='Energy Storage Systems:'
              content='Incorporation of robust energy storage solutions to manage and utilize the solar power effectively, ensuring continuous energy supply.'
            />
            <DecimalPoints
              title='Integrated Control Systems:'
              content='Advanced control systems for monitoring and optimizing energy production, ensuring peak performance and system reliability.'
            />
            <DecimalPoints
              title='Comprehensive Support:'
              content='Ongoing maintenance and support to sustain system efficiency and address any technical requirements promptly.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Expected Outcomes:
          </h1>
          <ul className='mt-10 list-disc'>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              A transformative solar solution providing enhanced energy efficiency for Bharat Electronics Limited.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Significant reductions in energy costs and carbon emissions, highlighting the benefits of advanced solar technology.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Demonstrated excellence in implementing large-scale solar systems, setting a new standard for the industry.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Enhanced operational efficiency and reliability, showcasing our capability to handle complex and high-profile projects.
            </li>
          </ul>
          <p className='mt-8 text-2xl text-[#2e3c35]'>
            The 400 kWh solar power installation at Bharat Electronics Limited is a testament to our commitment to innovation and excellence in renewable energy. This project not only highlights our technical expertise but also reinforces our position as a leader in delivering impactful and high-quality solar solutions.
          </p>
        </div>
      </div>

      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectPage3
