import Button from '@/components/Button'
import ClientDetails from '@/components/ClientDetails'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ServiceNavigator } from '@/components/ServiceNavigator'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServicePage = () => {
    return (
        <div>
            <div className="h-[50vh] w-full overflow-hidden relative  rounded-b-5xl">
                <Navbar />
                <Image
                    src="/serviceNavbar.webp"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full z-0"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h1 className="text-white text-7xl font-medium">Services</h1>
                </div>
            </div>

            <div className='mx-4 mt-12 md:mx-64'>
                <div className='md:mt-14 flex flex-col md:flex-row'>
                    <div className='service-navigator-common-class'>
                        <Link href='/services/service1'>
                            <ServiceNavigator
                                title="Energy Storage Solutions"
                                content='We believe that technology design are revolutionizing brand experiences.'
                                img="/service-1.svg"
                            />
                        </Link>
                    </div>
                    <div className='service-navigator-common-class'>
                        <Link href='/services/service2'>
                            <ServiceNavigator
                                title="Solar Panel Installation"
                                content='We believe that human-centered design are revolutionizing brand experiences.'
                                img="/service-2.svg"
                            />
                        </Link>
                    </div>
                    <div className='service-navigator-common-class'>
                        <Link href='/services/service3'>
                            <ServiceNavigator
                                title="Wind Turbine Installation"
                                content='Reduce your capital and operating costs, while modernizing your IT.'
                                img="/service-3.svg"
                            />
                        </Link>
                    </div>
                </div>
                <div className='md:mt-14 flex flex-col md:flex-row'>
                    <div className='service-navigator-common-class'>
                        <Link href='/services/service4'>
                            <ServiceNavigator
                                title="Energy Audits"
                                content='We believe that technology design are revolutionizing brand experiences.'
                                img="/service-4.svg"
                            />
                        </Link>
                    </div>
                    <div className='service-navigator-common-class'>
                        <Link href='/services/service5'>
                            <ServiceNavigator
                                title="Renewable Energy 
                                Consult"
                                content='Process of designing, creating, deploying and maintaining software.'
                                img="/service-5.svg"
                            />
                        </Link>
                    </div>
                    <div className='service-navigator-common-class'>
                        <Link href='/services/service6'>
                            <ServiceNavigator
                                title="Shredding Services"
                                content='Protect networks, devices and data from attacks or unauthorized access.'
                                img="/service-6.svg"
                            />
                        </Link>
                    </div>
                </div>
                <div className='md:mt-14 flex flex-col md:flex-row'>
                    <div className='service-navigator-common-class'>
                        <Link href='/services/service7'>
                            <ServiceNavigator
                                title="Cardboard & Paper Recycling"
                                content='See to the integrity and security of your records.'
                                img="/service-7.svg"
                            />
                        </Link>
                    </div>
                    <div className='service-navigator-common-class'>
                        <Link href='/services/service8'>
                            <ServiceNavigator
                                title="Solutions for Scrap Metal"
                                content='See to the integrity and security of your records.'
                                img="/service-8.svg"
                            />
                        </Link>
                    </div>
                    <div className='service-navigator-common-class'>
                        <Link href='/services/service9'>
                            <ServiceNavigator
                                title="Commercial Plastics Recycling"
                                content='See to the integrity and security of your records.'
                                img="/service-9.svg"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='bg-[#f6f7f9] flex justify-center my-32'>
                <div className='w-full items-center md:mx-64 flex flex-col md:flex-row'>

                    <div className='flex-1 flex-col'>
                        <h1 className='text-5xl font-semibold'>Eco-Advantages: What You Gain By Choosing Us</h1>
                        <ul className="list-disc list-inside space-y-2 mt-14">
                            <li className="service-list">Expertise in Sustainability Solutions</li>
                            <li className="service-list">Circular Economy, Reduced Footprint</li>
                            <li className="service-list">Measurable Impact, Lasting Change</li>
                        </ul>
                        <div className='flex items-center mt-14'>
                            <Button
                                title='View Projects'
                                variant='btn_black'
                            />
                        </div>
                    </div>

                    <div className='flex-1 relative w-full h-[1000px] md:h-[500px] rounded-3xl  my-12 justify-end overflow-hidden'>
                        <Image
                            src='/serviceContainer.webp'
                            alt='Service Image'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                </div>
            </div>

            <div>
                <ClientDetails />
            </div>

            <div className='mt-32'>
                <Footer />
            </div>

        </div >
    )
}

export default ServicePage
