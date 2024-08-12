import Button from '@/components/Button'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { SolutionsTileLeft, SolutionsTileRight } from '@/components/SolutionsTile'
import Image from 'next/image'
import React from 'react'

const SolutionPage = () => {
    return (
        <div>
            <div className='relative h-[50vh] w-full overflow-hidden'>
                <div className='relative h-[120vh] w-full overflow-hidden'>
                    <Navbar />
                    <Image
                        src='/solutionsNavbar.jpg'
                        alt='Background'
                        layout='fill'
                        objectFit='cover'
                        className='absolute left-0 top-0 z-0 h-full w-full'
                    />
                </div>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='absolute inset-0 z-10 flex items-center justify-center'>
                    <h1 className='text-5xl font-semibold text-white lg:text-6xl xl:text-7xl'>
                        Solutions
                    </h1>
                </div>
            </div>

            <div className='z-10 -mt-12 rounded-3xl bg-white relative -top-12'>
                <div className='mt-24 flex flex-col gap-32'>
                    <div className='bg-[#f6f6f9] pt-20 pb-10'>
                        <div className='flex mx-6 md:mx-6 lg:mx-12 2xl:mx-56 mb-4'>
                            <SolutionsTileLeft
                                imageUrl='/solutionImage3.webp'
                                title='OPEX Model (Build-Own-Operate)'
                                number={1}
                                content='The OPEX/BOO model lets you pay only for the renewable energy you use, avoiding upfront investment. Enjoy clean energy from solar, wind, or hybrid solutions with savings of 20% to 40% compared to grid tariffs. We handle all maintenance and operation. Sign a Power Purchase Agreement (PPA) for cost-effective power.'
                            />
                        </div>
                    </div>
                    <div className='flex mx-6 lg:mx-12 2xl:mx-56 md:mb-4'>
                        <SolutionsTileRight
                            imageUrl='/serviceCardNavbar2.jpg'
                            title='Renewable Energy Services Company (RESCO)'
                            number={2}
                            content="The RESCO Model, favored by SECI, offers zero investment for solar rooftop installations. Pay only for the energy you consume at lower rates than grid electricity. It's widely used by government entities and non-profits, with potential subsidies and favorable regulations."
                        />
                    </div>

                    <div className='bg-[#f6f6f9] pt-24'>
                        <div className='flex mx-6 lg:mx-12 2xl:mx-56 md:mb-4'>
                            <SolutionsTileLeft
                                imageUrl='/solutionImage2.webp'
                                title='CAPEX Model (EPC)'
                                number={3}
                                content='With the CAPEX model, invest in and own a renewable energy facility. Whether rooftop solar or a hybrid farm, we handle installation and provide ongoing maintenance. Enjoy ownership, reduced carbon footprint, and tax benefits through accelerated depreciation.'
                            />
                        </div>
                    </div>
                    <div className='flex mx-6 lg:mx-12 2xl:mx-56 md:mb-4'>
                        <SolutionsTileRight
                            imageUrl='/solutionImage1.webp'
                            title='Ongoing Support And Monitoring'
                            number={4}
                            content="We offer continuous support, monitoring, and maintenance to ensure your systems perform optimally. Our team is available to address any issues and help you maximize the benefits of your sustainable solutions."
                        />
                    </div>
                </div>
            </div>

            <footer className='relative mt-12 w-full md:mt-24'>
                <div className='relative top-10 z-0 h-[500px] w-full overflow-hidden'>
                    <Image
                        src='/solarBaseImage.jpg'
                        alt='Styled Image'
                        layout='fill'
                        objectFit='cover'
                    />
                    <div className='absolute inset-0 rounded-lg bg-black bg-opacity-60'></div>

                    <div className='absolute inset-0 flex flex-col items-center justify-center gap-10 text-center'>
                        <p className='text-xl font-medium font-inter text-white md:w-[50%] md:text-4xl'>
                            It&apos;s Always The Right Time To Get Closer To A Zero-Waste
                            Future
                        </p>
                        <Button title='Discover More' variant='btn_white' />
                    </div>
                </div>

                <div className='relative z-20'>
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default SolutionPage
