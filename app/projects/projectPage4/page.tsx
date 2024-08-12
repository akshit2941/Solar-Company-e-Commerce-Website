import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const ProjectPage4 = () => {
  return (
    <div>
      <div className='relative h-[100vh] w-full overflow-hidden'>
        <div className='relative h-[1000px] w-full overflow-hidden'>
          <Navbar />
          <Image
            src="/project-4.jpg"
            alt='Background'
            layout='fill'
            objectFit='cover'
            className='absolute left-0 top-0 z-0 h-full w-full'
          />
        </div>

        <div className='absolute inset-0 bg-[#232323] bg-opacity-55'></div>

        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
          <h2 className='rounded-3xl bg-[#a26630] p-1 px-4 text-xl font-normal text-white duration-300 hover:bg-[#2c3b35]'>
            1.8mWh
          </h2>
          <h1 className='mt-8 text-center text-5xl font-semibold text-white md:text-7xl'>
            Delhi Mumbai Expressway
          </h1>
          <p className='mt-10 w-[70%] text-center text-lg font-normal text-white md:w-[50%] md:text-xl'>
            A 1.8 MWh solar power system was implemented along the Delhi-Mumbai Expressway. This solar highway solution integrates advanced solar panels and energy storage to convert a major transportation route into a significant renewable energy source, enhancing sustainability and energy efficiency across the corridor.
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
            The Delhi-Mumbai Expressway project marks a monumental achievement as one of our largest and most ambitious solar installations to date. This groundbreaking initiative integrates a 1.8 MWh solar highway solution, setting a new benchmark in sustainable infrastructure. By harnessing solar energy across a major transportation corridor, the project not only demonstrates our commitment to innovative green technology but also paves the way for future advancements in solar-powered infrastructure.
          </p>
        </div>

        <div className='mt-12'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Key Project Goals:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Innovative Solar Integration:'
              content="Deploying a 1.8 MWh solar solution on the expressway to transform a major highway into a powerful renewable energy asset."
            />
            <DecimalPoints
              title='Sustainable Infrastructure:'
              content='Enhancing the sustainability of one of India’s key transport routes through cutting-edge solar technology.'
            />
            <DecimalPoints
              title='Significant Energy Generation:'
              content='Generating substantial amounts of clean energy to support nearby urban and rural areas, reducing reliance on conventional energy sources.'
            />
            <DecimalPoints
              title='Pioneering Green Technology:'
              content='Setting a precedent for future projects with a focus on integrating renewable energy into large-scale infrastructure.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Project Components:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Solar Panel Arrays:'
              content="Installation of high-efficiency solar panels along the expressway to capture and convert solar energy into electricity."
            />
            <DecimalPoints
              title='Energy Storage Systems:'
              content='Advanced energy storage solutions to manage and utilize the harvested solar energy effectively, ensuring a steady power supply.'
            />
            <DecimalPoints
              title='Grid Integration:'
              content='Seamless integration with existing power grids to distribute the generated energy efficiently to surrounding areas.'
            />
            <DecimalPoints
              title='Comprehensive Monitoring:'
              content='State-of-the-art monitoring systems to track performance, optimize energy production, and ensure operational efficiency.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Expected Outcomes:
          </h1>
          <ul className='mt-10 list-disc'>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              A landmark achievement in solar infrastructure, demonstrating the potential of integrating renewable energy with large-scale transportation projects.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Significant reduction in carbon emissions and energy consumption through the deployment of advanced solar technology.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Enhanced energy resilience and sustainability for the expressway and adjacent areas, providing a model for future green infrastructure projects.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Valuable insights into the integration of solar power with transportation infrastructure, setting new standards for innovative and sustainable solutions.
            </li>
          </ul>
          <p className='mt-8 text-2xl text-[#2e3c35]'>
            The 1.8 MWh solar highway solution on the Delhi-Mumbai Expressway stands as a testament to our pioneering spirit in renewable energy. This monumental project not only enhances the expressway’s environmental sustainability but also sets a groundbreaking example for integrating solar technology into large-scale infrastructure. The success of this initiative is expected to inspire similar projects and drive the future of green infrastructure.
          </p>
        </div>
      </div>





      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectPage4

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
