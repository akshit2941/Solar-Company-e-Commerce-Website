import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

type ProjectPageContent = {
    imageUrl: string,
    title: string,
    subHeading: string,
    buttonTitle: string
}


const ProjectPageMain = ({ imageUrl, title, subHeading, buttonTitle }: ProjectPageContent) => {
    return (
        <div>
            <div className="h-[100vh] w-full overflow-hidden relative">
                <div className='relative overflow-hidden h-[1000px] w-full'>
                    <Navbar />
                    <Image
                        src={imageUrl}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute top-0 left-0 w-full h-full z-0"
                    />
                </div>

                <div className="absolute inset-0 bg-[#232323] bg-opacity-55"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <h2 className='bg-[#a26630] text-white  p-1 px-4 font-normal text-xl rounded-3xl hover:bg-[#2c3b35] duration-300'>{buttonTitle}</h2>
                    <h1 className="text-white text-5xl md:text-7xl text-center font-semibold mt-8">{title}</h1>
                    <p className='text-white text-lg md:text-xl font-normal text-center mt-10 w-[70%] md:w-[50%]'>{subHeading}</p>
                </div>

            </div>


            <div className='w-full bg-[#f6f6f9] h-fit md:h-[250px] mb-32'>
                <div className='mx-12 lg:mx-32 xl:mx-64 pt-16 flex flex-row md:flex-row'>
                    <div className='flex-1'>
                        <h1 className='font-semibold text-2xl'>Client</h1>
                        <p className='font-medium text-xl mt-4'>Akshit</p>
                    </div>
                    <div className='flex-1'>
                        <h1 className='font-semibold text-2xl'>Date</h1>
                        <p className='font-medium text-xl mt-4'>June 13, 2024</p>
                    </div>
                    <div className='flex-1'>
                        <h1 className='font-semibold text-2xl'>Services</h1>
                        <p className='font-medium text-xl mt-4'>Design, Illustration, Art</p>
                    </div>
                    <div className='flex-1'>
                        <h1 className='font-semibold text-2xl'>Share On</h1>
                        <div className='mt-2'>
                            <div className="flex space-x-4">
                                <div className="bg-[#decbbf] p-4 rounded-full">
                                    <FaFacebookF className="text-[#a56d4c] w-6 h-6" />
                                </div>
                                <div className="bg-[#decbbf] p-4 rounded-full">
                                    <FaInstagram className="text-[#a56d4c] w-6 h-6" />
                                </div>
                                <div className="bg-[#decbbf] p-4 rounded-full">
                                    <FaTwitter className="text-[#a56d4c] w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mx-12 lg:mx-24 xl:mx-64 mb-16'>
                <div>
                    <h1 className='text-3xl md:text-5xl text-[#2e3c35] font-semibold'>Project Overview:</h1>
                    <p className='text-xl md:text-2xl text-[#2e3c35] mt-2 md:mt-4 '>The Solar-Powered Home Project is an initiative aimed at transforming a traditional residential property into an energy-efficient and sustainable home by integrating solar power systems. This project embodies our commitment to reducing carbon emissions, decreasing energy bills, and promoting renewable energy adoption in residential settings. Through this initiative, we aim to demonstrate the feasibility and benefits of solar energy for homeowners while contributing to a greener and more sustainable future.</p>
                </div>

                <div className='mt-12'>
                    <h1 className='text-3xl md:text-5xl text-[#2e3c35] font-semibold'>Key Project Goals:</h1>
                    <ul className="list-decimal">

                        <DecimalPoints
                            title='Energy Independence:'
                            content="By installing solar panels and associated technology, the project seeks to generate a significant portion of the home's electricity needs from renewable energy sources, reducing reliance on the grid."
                        />
                        <DecimalPoints
                            title='Reduced Carbon Footprint:'
                            content="The project aims to decrease the carbon footprint of the home by harnessing clean, solar energy, thus contributing to the reduction of greenhouse gas emissions."
                        />
                        <DecimalPoints
                            title='Cost Savings:'
                            content="Demonstrating how solar energy systems can lead to long-term cost savings for homeowners through reduced energy bills and potential incentives or rebates."
                        />
                        <DecimalPoints
                            title='Education and Outreach:'
                            content="The Solar-Powered Home Project also includes an educational component. We will document the installation process, system performance, and cost savings to provide valuable information to homeowners considering solar energy."
                        />
                    </ul>
                </div>

                <div className='mt-20'>
                    <h1 className='text-3xl md:text-5xl text-[#2e3c35] font-semibold'>Project Components:</h1>
                    <ul className="list-decimal">
                        <DecimalPoints
                            title='Solar Panel Installation:'
                            content="The core of the project involves the installation of solar panels on the home's rooftop. These panels will capture sunlight and convert it into electricity."
                        />
                        <DecimalPoints
                            title='Battery Energy Storage:'
                            content="To store excess solar energy for use during the evenings or cloudy days, a battery energy storage system will be installed, increasing energy independence."
                        />
                        <DecimalPoints
                            title='Energy Monitoring System:'
                            content="An advanced energy monitoring system will be integrated to track energy generation, consumption, and savings in real-time, providing valuable data for homeowners."
                        />
                        <DecimalPoints
                            title='Efficiency Upgrades:'
                            content="In conjunction with the solar installation, the project may include energy-efficient upgrades to the home, such as LED lighting, improved insulation, and smart thermostats."
                        />
                        <DecimalPoints
                            title='Educational Materials:'
                            content="Throughout the project, educational materials will be created, including videos, guides, and articles, to inform homeowners about the benefits of solar energy and the steps involved in installation."
                        />
                    </ul>
                </div>

                <div className='mt-20'>
                    <h1 className='ext-3xl md:text-5xl text-[#2e3c35] font-semibold'>Expected Outcomes:</h1>

                    <ul className='list-disc mt-10'>
                        <li className='custom-list-item-disc text-2xl text-[#2e3c35] mt-6'>A solar-powered home that showcases the practicality and benefits of renewable energy.</li>
                        <li className='custom-list-item-disc text-2xl text-[#2e3c35] mt-6'>A documented reduction in energy bills, illustrating the financial advantages of solar power.</li>
                        <li className='custom-list-item-disc text-2xl text-[#2e3c35] mt-6'>Valuable data and insights for homeowners considering solar energy adoption.</li>
                        <li className='custom-list-item-disc text-2xl text-[#2e3c35] mt-6'>Increased awareness of sustainable living practices and renewable energy among the community.</li>
                    </ul>
                    <p className='text-[#2e3c35] text-2xl mt-8'>The Solar-Powered Home Project represents a significant step towards creating a greener and more sustainable future while providing a real-world example of how homeowners can benefit from solar energy. Through this initiative, we aim to inspire and empower individuals to embrace renewable energy solutions in their homes.</p>
                </div>

            </div>

            <div className='mt-32'>
                <Footer />
            </div>

        </div>
    )
}

export default ProjectPageMain

type DecimalPointsContent = {
    title: string,
    content: string,
}

export const DecimalPoints = ({ title, content }: DecimalPointsContent) => {
    return (
        <div>
            <li className="custom-list-item text-xl md:text-2xl text-[#2e3c35] mt-3 md:mt-6">
                <span className="font-bold">{title}</span>{content}
            </li>
        </div>
    );
};