import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import FAQ from './FAQ'
import { Footer } from './Footer'

type ServiceProp = {
  title: string
  imageUrl: string
}

const ServiceComponentMain = ({ title, imageUrl }: ServiceProp) => {
  return (
    <div>
      <div className='relative h-[50vh] w-full overflow-hidden rounded-b-5xl'>
        <Navbar />
        <Image
          src={imageUrl}
          alt='Background'
          layout='fill'
          objectFit='cover'
          className='absolute left-0 top-0 z-0 h-full w-full'
        />

        <div className='absolute inset-0 bg-black bg-opacity-50'></div>

        <div className='absolute inset-0 z-10 flex items-center justify-center text-center'>
          <h1 className='text-4xl font-semibold text-white lg:text-6xl 2xl:text-7xl'>
            {title}
          </h1>
        </div>
      </div>

      <div className='mx-5 my-32 lg:mx-12 2xl:mx-64'>
        <div>
          <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
            Solar Panel Installation: Harvesting Energy from the Sun
          </h1>
          <p className='mt-4 text-xl text-[#2e3c35] md:text-2xl'>
            Harness the power of the sun with our comprehensive solar panel
            installation service. Our team of skilled professionals is committed
            to transforming your property into a hub of clean, renewable energy.
            Here&apos;s how our solar panel installation service can benefit
            you:
          </p>
        </div>

        <div>
          <ResusableDecimalPoints
            title='1. Reduced Energy Bills:'
            content="By generating your own electricity from sunlight, you'll see a significant reduction in your monthly energy bills. Say goodbye to escalating costs and hello to energy independence."
          />
          <ResusableDecimalPoints
            title='2. Eco-Friendly Footprint:'
            content="Solar energy is clean and emits no greenhouse gases. By utilizing this renewable source, you're actively contributing to a healthier environment and mitigating the effects of climate change."
          />
          <ResusableDecimalPoints
            title='3. Increased Property Value:'
            content='Investing in solar panels enhances the value of your property. Potential buyers are attracted to energy-efficient homes with lower operating costs, making your property stand out in the real estate market.'
          />
          <ResusableDecimalPoints
            title='4. Low Maintenance, High Reliability:'
            content='Our state-of-the-art solar systems are designed for durability and efficiency. With minimal maintenance requirements, you can enjoy hassle-free energy production for decades to come.'
          />
          <ResusableDecimalPoints
            title='5. Energy Independence:'
            content="As traditional energy sources become scarcer, solar energy provides a reliable and sustainable solution. By generating your own power, you're less dependent on the grid and its fluctuating prices."
          />
          <ResusableDecimalPoints
            title='6. Government Incentives:'
            content='Many governments offer incentives such as tax credits and rebates for adopting solar energy. Our experts will guide you through the available incentives in your area to maximize your savings.'
          />
          <ResusableDecimalPoints
            title='7. Seamless Integration:'
            content="Our team ensures a seamless integration of solar panels into your property's design. Whether for residential rooftops or commercial installations, we prioritize aesthetics without compromising efficiency."
          />
          <ResusableDecimalPoints
            title='8. Positive Community Impact:'
            content="By choosing solar, you're setting an example for your community. Your commitment to green energy inspires others to consider sustainable choices, collectively reducing carbon emissions."
          />
        </div>

        <div className='mt-8 text-xl text-[#2e3c35] md:text-2xl'>
          <p>
            At Aldex Energy, we&apos;re dedicated to making the transition to
            solar energy a smooth and rewarding experience. From initial
            assessment and system design to installation and post-installation
            support, we&apos;re with you every step of the way. Together,
            let&apos;s make a brighter, greener future. Contact us today to
            schedule a consultation and take the first step towards clean energy
            independence.
          </p>
        </div>
      </div>

      <div>
        <FAQ />
      </div>

      <div className='mt-36'>
        <Footer />
      </div>
    </div>
  )
}

export default ServiceComponentMain

type ReusableProp = {
  title: string
  content: string
}

export const ResusableDecimalPoints = ({ title, content }: ReusableProp) => {
  return (
    <div className='mt-8'>
      <h1 className='text-3xl font-semibold text-[#2e3c34] lg:text-4xl 2xl:text-5xl'>
        {title}
      </h1>
      <p className='mt-8 text-xl text-[#2e3c34] md:text-2xl'>{content}</p>
    </div>
  )
}
