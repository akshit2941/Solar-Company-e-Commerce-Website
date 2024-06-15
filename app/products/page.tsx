import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { Footer } from '@/components/Footer'

const ProductPage = () => {
    return (
        <div>
            <div className='relative h-[50vh] w-full overflow-hidden rounded-b-5xl'>
                <div className='relative h-[70vh] w-full overflow-hidden'>
                    <Navbar />
                    <Image
                        src='/productNavbar.webp'
                        alt='Background'
                        layout='fill'
                        objectFit='cover'
                        className='absolute left-0 top-0 z-0 h-full w-full'
                    />
                </div>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='absolute inset-0 z-10 flex items-center justify-center'>
                    <h1 className='text-5xl font-semibold text-white lg:text-6xl xl:text-7xl'>
                        Shop
                    </h1>
                </div>
            </div>

            <div className='my-32 mx-8 lg:mx-12 2xl:mx-56'>
                <div className='flex flex-col lg:flex-row '>
                    <div className='relative w-full h-[15rem] lg:w-[70%] lg:h-[35rem] 2xl:w-[50%] 2xl:h-[45rem] overflow-hidden rounded-3xl'>
                        <Image
                            src='/productImage.jpg'
                            alt='Styled Image'
                            layout='fill'
                            objectFit='cover'
                            className='absolute inset-0'
                        />
                    </div>

                    <div className='lg:mx-16 2xl:mx-32 flex-1 text-[#2e3c33]' >
                        <h1 className='text-3xl lg:text-6xl 2xl:text-7xl text-[#2e3c33] mt-2 2xl:mt-8 font-bold'>Bamboo Toothbrushes</h1>
                        <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold mt-2 lg:mt-4 2xl:mt-8'>$ 10.00 USD</h2>
                        <p className='text-lg lg:text-xl font-medium mt-2 lg:mt-4 2xl:mt-8'>Join the eco-friendly oral care revolution with our Bamboo Toothbrush! Crafted from sustainably sourced bamboo, this toothbrush is your daily companion for a cleaner mouth and a greener planet. Make the switch to our Bamboo Toothbrush today and enjoy a cleaner, greener smile while reducing your plastic footprint. It's a small change that can make a big difference for you and the environment.</p>
                        <div className='mt-2 lg:mt-4 2xl:mt-8'>
                            <Button title='Purchase' variant='btn_black' />
                        </div>
                    </div>

                </div>

            </div>

            <div className='my-32 mx-8 lg:mx-12 2xl:mx-56'>
                <div className='flex flex-col-reverse lg:flex-row '>
                    <div className='lg:mx-16 2xl:mx-32 lg:ml-0 flex-1 text-[#2e3c33]' >
                        <h1 className='text-3xl lg:text-6xl 2xl:text-7xl text-[#2e3c33] mt-2 2xl:mt-8 font-bold'>Shopping Bag</h1>
                        <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold mt-2 lg:mt-4 2xl:mt-8'>$ 10.00 USD</h2>
                        <p className='text-lg lg:text-xl font-medium mt-2 lg:mt-4 2xl:mt-8'>Join the eco-friendly oral care revolution with our Bamboo Toothbrush! Crafted from sustainably sourced bamboo, this toothbrush is your daily companion for a cleaner mouth and a greener planet. Make the switch to our Bamboo Toothbrush today and enjoy a cleaner, greener smile while reducing your plastic footprint. It's a small change that can make a big difference for you and the environment.</p>
                        <div className='mt-2 lg:mt-4 2xl:mt-8'>
                            <Button title='Purchase' variant='btn_black' />
                        </div>
                    </div>

                    <div className='relative w-full h-[15rem] lg:w-[70%] lg:h-[35rem] 2xl:w-[50%] 2xl:h-[45rem] overflow-hidden rounded-3xl'>
                        <Image
                            src='/productImage2.jpg'
                            alt='Styled Image'
                            layout='fill'
                            objectFit='cover'
                            className='absolute inset-0'
                        />
                    </div>
                </div>

            </div>

            <div className='mt-12'>
                <Footer />
            </div>

        </div>
    )
}

export default ProductPage