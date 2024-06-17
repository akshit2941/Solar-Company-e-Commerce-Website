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
                                title='Assessment And Consultation'
                                number={1}
                                content='We begin by understanding your unique needs and goals. Our experts conduct a thorough assessment of your energy usage, recycling requirements, or sustainability objectives. We listen to your concerns, answer your questions, and work together to outline a tailored plan that aligns with your vision.'
                            />
                        </div>
                    </div>
                    <div className='flex mx-6 lg:mx-12 2xl:mx-56 md:mb-4'>
                        <SolutionsTileRight
                            imageUrl='/serviceCardNavbar2.jpg'
                            title='Customized Solutions'
                            number={2}
                            content="With a clear understanding of your needs, we design and propose customized solutions that optimize efficiency and sustainability. Whether it' s developing a solar energy system, implementing a recycling program, or integrating energy-saving technologies, our solutions are designed to fit seamlessly into your lifestyle or business operations."
                        />
                    </div>

                    <div className='bg-[#f6f6f9] pt-24'>
                        <div className='flex mx-6 lg:mx-12 2xl:mx-56 md:mb-4'>
                            <SolutionsTileLeft
                                imageUrl='/solutionImage2.webp'
                                title='Professional Implementation'
                                number={3}
                                content='Our experienced team takes care of all the necessary installations, ensuring everything operates smoothly. From solar panel installations to setting up recycling infrastructure, we handle every detail with professionalism and precision, adhering to the highest industry standards.'
                            />
                        </div>
                    </div>
                    <div className='flex mx-6 lg:mx-12 2xl:mx-56 md:mb-4'>
                        <SolutionsTileRight
                            imageUrl='/solutionImage1.webp'
                            title='Ongoing Support And Monitoring'
                            number={4}
                            content="Our commitment doesn't end with installation. We provide continuous support, monitoring, and maintenance to ensure that your systems run efficiently and effectively. We're here to answer questions, resolve any issues, and help you make the most of your sustainable solutions for the long term."
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