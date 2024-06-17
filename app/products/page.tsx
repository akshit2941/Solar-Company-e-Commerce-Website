import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { Footer } from '@/components/Footer'
import Navbar_black from '@/components/Navbar_black'

const ProductPage = () => {
    return (
        <div>

            <div className='bg-white mb-24'>
                <Navbar_black />
            </div>

            <div className='mb-32  mx-8 lg:mx-12 2xl:mx-56'>
                <div className='flex flex-col lg:flex-row '>
                    <div className='relative w-full h-[15rem] md:w-full md:h-[28rem] lg:w-[70%] lg:h-[35rem] 2xl:w-[50%] 2xl:h-[45rem] overflow-hidden rounded-3xl'>
                        <Image
                            src='/productImage.jpg'
                            alt='Styled Image'
                            layout='fill'
                            objectFit='cover'
                            className='absolute inset-0'
                        />
                    </div>

                    <div className='lg:mx-16 2xl:mx-32 flex-1 text-[#2e3c33]' >
                        <h1 className='text-3xl lg:text-6xl 2xl:text-7xl text-[#2e3c33] mt-2 md:mt-6 2xl:mt-8 font-bold'>Bamboo Toothbrushes</h1>
                        <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold mt-2 lg:mt-4 2xl:mt-8'>$ 10.00 USD</h2>
                        <p className='text-lg lg:text-xl font-medium mt-2 lg:mt-4 2xl:mt-8'>Join the eco-friendly oral care revolution with our Bamboo Toothbrush! Crafted from sustainably sourced bamboo, this toothbrush is your daily companion for a cleaner mouth and a greener planet. Make the switch to our Bamboo Toothbrush today and enjoy a cleaner, greener smile while reducing your plastic footprint. It&apos;s a small change that can make a big difference for you and the environment.</p>
                        <div className='mt-2  md:mt-6 lg:mt-4 2xl:mt-8'>
                            <Button title='Purchase' variant='btn_black' />
                        </div>
                    </div>

                </div>

            </div>

            <div className='my-32 mx-8 lg:mx-12 2xl:mx-56'>
                <div className='flex flex-col-reverse lg:flex-row '>
                    <div className='lg:mx-16 2xl:mx-32 lg:ml-0 2xl:ml-0 flex-1 text-[#2e3c33]' >
                        <h1 className='text-3xl lg:text-6xl 2xl:text-7xl text-[#2e3c33] mt-2  md:mt-6 2xl:mt-8 font-bold'>Shopping Bag</h1>
                        <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold mt-2 lg:mt-4 2xl:mt-8'>$ 10.00 USD</h2>
                        <p className='text-lg lg:text-xl font-medium mt-2 lg:mt-4 2xl:mt-8'>Join the eco-friendly oral care revolution with our Bamboo Toothbrush! Crafted from sustainably sourced bamboo, this toothbrush is your daily companion for a cleaner mouth and a greener planet. Make the switch to our Bamboo Toothbrush today and enjoy a cleaner, greener smile while reducing your plastic footprint. It&apos;s a small change that can make a big difference for you and the environment.</p>
                        <div className='mt-2 md:mt-6 lg:mt-4 2xl:mt-8'>
                            <Button title='Purchase' variant='btn_black' />
                        </div>
                    </div>

                    <div className='relative w-full h-[15rem] md:w-full md:h-[28rem] lg:w-[70%] lg:h-[35rem] 2xl:w-[50%] 2xl:h-[45rem] overflow-hidden rounded-3xl'>
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