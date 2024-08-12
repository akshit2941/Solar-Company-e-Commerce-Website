import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const ProjectPage2 = () => {
  return (
    <div>
      <div className='relative h-[100vh] w-full overflow-hidden'>
        <div className='relative h-[1000px] w-full overflow-hidden'>
          <Navbar />
          <Image
            src="/project-1.jpg"
            alt='Background'
            layout='fill'
            objectFit='cover'
            className='absolute left-0 top-0 z-0 h-full w-full'
          />
        </div>

        <div className='absolute inset-0 bg-[#232323] bg-opacity-55'></div>

        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
          <h2 className='rounded-3xl bg-[#a26630] p-1 px-4 text-xl font-normal text-white duration-300 hover:bg-[#2c3b35]'>
            320Kwh
          </h2>
          <h1 className='mt-8 text-center text-5xl font-semibold text-white md:text-7xl'>
            MITS Gwalior
          </h1>
          <p className='mt-10 w-[70%] text-center text-lg font-normal text-white md:w-[50%] md:text-xl'>
            A 320 kWh solar power system was installed on the rooftop of Mits Gwalior. This rooftop installation is designed to maximize energy generation and efficiency, delivering a dependable and sustainable energy solution for the facility.
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
            The Mits Gwalior project features the installation of a 320 kWh solar power system on the facility's rooftop. This initiative enhances the building's energy efficiency by leveraging renewable solar energy to meet substantial power demands. The project exemplifies our dedication to reducing energy costs, minimizing environmental impact, and supporting sustainable energy practices through effective rooftop solar integration.
          </p>
        </div>

        <div className='mt-12'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Key Project Goals:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Enhanced Energy Efficiency:'
              content="Installing a 320 kWh rooftop solar system to meet significant energy demands and reduce dependency on conventional energy sources."
            />
            <DecimalPoints
              title='Sustainable Energy Solutions:'
              content='Utilizing solar power to lower the facility’s carbon footprint and promote eco-friendly energy practices.'
            />
            <DecimalPoints
              title='Financial Savings:'
              content='Providing long-term cost benefits through decreased energy expenses and possible savings from renewable energy incentives.'
            />
            <DecimalPoints
              title='Operational Excellence:'
              content='Ensuring reliable and efficient energy production with a well-integrated rooftop solar system, designed for optimal performance and durability.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Project Components:
          </h1>
          <ul className='list-decimal'>
            <DecimalPoints
              title='Rooftop Solar Panels:'
              content="Installation of a 320 kWh solar panel array on the rooftop to maximize solar energy capture and conversion."
            />
            <DecimalPoints
              title='Inverter Systems:'
              content='High-performance inverters to convert the generated solar power into usable electricity for the facility.'
            />
            <DecimalPoints
              title='Energy Monitoring System:'
              content='Advanced monitoring tools to track energy generation, consumption, and overall system performance in real-time.'
            />
            <DecimalPoints
              title='Maintenance and Support:'
              content='Provision of ongoing maintenance and technical support to ensure the continued efficiency and reliability of the solar power system.'
            />
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Expected Outcomes:
          </h1>
          <ul className='mt-10 list-disc'>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              A significant reduction in energy costs for Mits Gwalior through the implementation of a 320 kWh rooftop solar system.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Lower environmental impact with a reduction in carbon emissions, showcasing the benefits of renewable energy.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Reliable energy supply and performance with a state-of-the-art rooftop installation.
            </li>
            <li className='custom-list-item-disc mt-6 text-2xl text-[#2e3c35]'>
              Valuable insights into the performance and impact of large-scale rooftop solar installations for future projects.
            </li>
          </ul>
          <p className='mt-8 text-2xl text-[#2e3c35]'>
            The 320 kWh rooftop solar installation at Mits Gwalior underscores the effectiveness of solar energy in addressing substantial power needs while promoting sustainability. This project serves as a model for integrating renewable energy solutions into commercial buildings, offering both economic and environmental benefits.
          </p>
        </div>
      </div>



      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectPage2

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
