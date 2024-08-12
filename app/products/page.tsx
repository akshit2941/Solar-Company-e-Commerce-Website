import Navbar_black from '@/components/Navbar_black'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

const ProductPage = () => {
    return (
        <div>
            <div className='bg-white mb-24'>
                <Navbar_black />
            </div>

            <div className='mb-32 mx-8 lg:mx-12 2xl:mx-56'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='relative w-full h-[15rem] md:w-full md:h-[28rem] lg:w-[70%] lg:h-[35rem] 2xl:w-[50%] 2xl:h-[45rem] overflow-hidden rounded-3xl'>
                        <Image
                            src='/productImage.jpg'
                            alt='Solar Street Light'
                            layout='fill'
                            objectFit='cover'
                            className='absolute inset-0'
                        />
                    </div>

                    <div className='lg:mx-16 2xl:mx-32 flex-1 text-[#2e3c33]'>
                        <h1 className='text-3xl lg:text-6xl 2xl:text-7xl mt-2 md:mt-6 2xl:mt-8 font-bold'>
                            Solar Street Light
                        </h1>
                        {/* <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold mt-2 lg:mt-4 2xl:mt-8'>
                            $10.00 USD
                        </h2> */}
                        <p className='text-lg lg:text-xl font-medium mt-2 lg:mt-4 2xl:mt-8'>
                            Experience energy-efficient illumination with our Solar Street Light, designed to brighten outdoor spaces while minimizing environmental impact. This innovative light harnesses solar energy during the day to power up automatically at night, providing reliable and consistent lighting. Perfect for streets, pathways, parks, and public areas, it enhances safety and visibility while cutting down on electricity costs. Engineered to endure harsh weather conditions, our solar street light offers durable performance with minimal maintenance, making it a smart and sustainable investment.
                        </p>

                        <div className='mt-2 md:mt-6 lg:mt-4 2xl:mt-8'>
                            <Link href='https://www.amazon.in/Generic-Aldex-Solar-Street-Light/dp/B0C7WCYL11/ref=sr_1_1?sr=8-1' passHref>
                                <Button title='Purchase' variant='btn_black' />
                            </Link>
                        </div>
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
