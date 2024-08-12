import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { DecimalPoints } from '@/components/DecimalPoints'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const ProjectPage5 = () => {
  return (
    <div>
      <div className='relative h-[100vh] w-full overflow-hidden'>
        <div className='relative h-[1000px] w-full overflow-hidden'>
          <Navbar />
          <Image
            src="/project-3.jpg"
            alt='Background'
            layout='fill'
            objectFit='cover'
            className='absolute left-0 top-0 z-0 h-full w-full'
          />
        </div>

        <div className='absolute inset-0 bg-[#232323] bg-opacity-55'></div>

        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
          <h2 className='rounded-3xl bg-[#a26630] p-1 px-4 text-xl font-normal text-white duration-300 hover:bg-[#2c3b35]'>
            250Kwh
          </h2>
          <h1 className='mt-8 text-center text-5xl font-semibold text-white md:text-7xl'>
            Metro Valley Projects Private Ltd.
          </h1>
          <p className='mt-10 w-[70%] text-center text-lg font-normal text-white md:w-[50%] md:text-xl'>
            A 250 kWh solar mini grid was deployed for Metro Valley Projects Private Ltd. This setup provides a robust and scalable energy solution, integrating solar power with localized distribution to ensure stable and efficient energy supply for the facility. The mini grid enhances operational reliability and supports sustainable energy practices, reducing dependency on conventional energy sources.
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
            The Metro Valley Projects Private Ltd. project involved the implementation of a 250 kWh solar mini grid. This system is strategically designed to enhance the facility’s energy autonomy by integrating solar power with localized energy distribution. The project highlights our commitment to delivering sustainable and scalable energy solutions that reduce dependency on traditional power sources and support the facility&apos;s operational efficiency.
          </p>
        </div>

        <div className='mt-12'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Key Project Goals:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Energy Independence:'
              content="Establishing a 250 kWh mini grid to enhance energy self-sufficiency and minimize reliance on external power sources."
            />
            <DecimalPoints
              title='Scalable Energy Solutions:'
              content='Deploying a flexible mini grid system that can be scaled to meet future energy demands and support sustainable practices.'
            />
            <DecimalPoints
              title='Cost Efficiency:'
              content='Reducing operational costs through effective solar energy utilization and localized energy management.'
            />
            <DecimalPoints
              title='Operational Reliability:'
              content='Providing a reliable and efficient energy solution with a mini grid that ensures consistent power supply for the facility.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Project Components:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Solar Mini Grid Setup:'
              content="Installation of a 250 kWh solar mini grid, featuring a distributed network of solar panels to optimize energy distribution."
            />
            <DecimalPoints
              title='Energy Storage Solutions:'
              content='Incorporation of energy storage systems to manage excess power and ensure availability during non-sunny periods.'
            />
            <DecimalPoints
              title='Advanced Control Systems:'
              content='Integration of control systems to monitor and manage energy flow, ensuring efficient operation of the mini grid.'
            />
            <DecimalPoints
              title='Ongoing Support:'
              content='Provision of maintenance and technical support to sustain system performance and reliability.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Expected Outcomes:
          </h1>
          <ul className='mt-10 list-disc'>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Enhanced energy autonomy for Metro Valley Projects Private Ltd. with a robust 250 kWh solar mini grid.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Increased cost efficiency and reduced reliance on traditional power sources through effective solar integration.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Reliable and scalable energy infrastructure capable of adapting to future energy needs.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Demonstration of advanced mini grid technology and its benefits for other commercial and industrial applications.
            </li>
          </ul>
          <p className='mt-8 text-2xl text-[#2e3c35]'>
            The 250 kWh solar mini grid at Metro Valley Projects Private Ltd. exemplifies an innovative approach to energy management, showcasing the advantages of localized solar power solutions. This project not only improves energy efficiency but also sets a benchmark for scalable and sustainable energy practices in commercial settings.
          </p>
        </div>
      </div>




      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectPage5
