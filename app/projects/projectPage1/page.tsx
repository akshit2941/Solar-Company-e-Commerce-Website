import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { DecimalPoints } from '@/components/DecimalPoints'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const ProjectPage1 = () => {
  return (
    <div>
      <div className='relative h-[100vh] w-full overflow-hidden'>
        <div className='relative h-[1000px] w-full overflow-hidden'>
          <Navbar />
          <Image
            src="/p-1.jpeg"
            alt='Background'
            layout='fill'
            objectFit='cover'
            className='absolute left-0 top-0 z-0 h-full w-full'
          />
        </div>

        <div className='absolute inset-0 bg-[#232323] bg-opacity-55'></div>

        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
          <h2 className='rounded-3xl bg-[#a26630] p-1 px-4 text-xl font-normal text-white duration-300 hover:bg-[#2c3b35]'>
            300Kwh
          </h2>
          <h1 className='mt-8 text-center text-5xl font-semibold text-white md:text-7xl'>
            Holister Medical, Bawal
          </h1>
          <p className='mt-10 w-[70%] text-center text-lg font-normal text-white md:w-[50%] md:text-xl'>
            A 300 kWh solar power system was installed at Holister Medical, Bawal. This ground-mounted system is engineered to optimize energy output and efficiency, providing a reliable and sustainable power solution for the facility.
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
            The installation of a 300 kWh solar power system at Holister Medical in Bawal represents a significant step towards enhancing energy efficiency and sustainability. This ground-mounted system has been designed to meet the facility&apos;s substantial energy needs while reducing reliance on conventional energy sources. The project underscores our commitment to providing reliable, renewable energy solutions that contribute to lower operational costs and support environmental sustainability.
          </p>
        </div>

        <div className='mt-12'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Key Project Goals:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Enhanced Energy Efficiency:'
              content="Deploying a 300 kWh solar system to significantly reduce Holister Medical's dependence on traditional power sources and lower energy costs."
            />
            <DecimalPoints
              title='Sustainable Energy Use:'
              content='Utilizing solar energy to decrease the facility&apos;s carbon footprint and support environmentally responsible energy practices.'
            />
            <DecimalPoints
              title='Cost Reduction:'
              content='Providing long-term financial benefits through reduced energy expenses and potential savings from solar incentives.'
            />
            <DecimalPoints
              title='Operational Reliability:'
              content='Ensuring a stable and consistent energy supply with a robust, ground-mounted solar power system designed for durability and performance.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Project Components:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Ground-Mounted Solar Panels:'
              content="Installation of a 300 kWh solar array, mounted on the ground to optimize sunlight exposure and energy generation."
            />
            <DecimalPoints
              title='Inverter Systems:'
              content='High-efficiency inverters to convert the solar power generated into usable electricity for the facility.'
            />
            <DecimalPoints
              title='Performance Monitoring:'
              content='Advanced systems to monitor energy production and usage, providing real-time data and insights for efficient energy management.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Expected Outcomes:
          </h1>
          <ul className='mt-10 list-disc'>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              A substantial reduction in energy costs for Holister Medical through the use of solar power.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Lower carbon emissions and enhanced environmental sustainability due to the shift to renewable energy.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Increased energy reliability and performance with a state-of-the-art ground-mounted solar system.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Valuable data and insights to further optimize energy use and inform future solar projects.
            </li>
          </ul>
          <p className='mt-8 text-2xl text-[#2e3c35]'>
            The 300 kWh solar power installation at Holister Medical highlights the effectiveness of large-scale solar solutions in enhancing energy efficiency and reducing operational costs. This project not only demonstrates the benefits of solar energy but also sets a precedent for sustainable practices in the medical sector.
          </p>
        </div>
      </div>


      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectPage1


