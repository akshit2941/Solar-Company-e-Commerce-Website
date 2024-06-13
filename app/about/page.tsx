"use client"
import Button from '@/components/Button';
import ClientDetails from '@/components/ClientDetails';
import { ClientStories } from '@/components/ClientStories';
import FAQ from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React, { useState } from 'react'
import { IoPlayOutline } from "react-icons/io5";


type TabKey = 'mission' | 'values' | 'services';

const tabs: Record<TabKey, { title: string; content: string }> = {
    mission: {
        title: "Together, We Can Pioneer A Sustainable Future.",
        content: "Our mission is to lead the charge in building a sustainable and greener future for generations to come. We're driven by a steadfast commitment to environmental stewardship, innovation, and positive social impact. Our mission isn't just a statement; it's a commitment to a better, more sustainable world. We invite you to join us on this journey towards a greener and brighter tomorrow. Together, we can pioneer a sustainable future that benefits us all."
    },
    values: {
        title: "Positive Environmental Impact In All We Do.",
        content: "Our core values serve as the foundation of everything we do. They embody our unwavering dedication to sustainability, innovation, and positive impact. These core values guide our decisions, actions, and interactions, ensuring that we remain steadfast in our pursuit of a more sustainable and eco-friendly future. They serve as a compass, directing us toward positive environmental and social impact in everything we do. We invite you to join us on this journey towards a greener and brighter."
    },
    services: {
        title: "We Take Pride In Commitment To Innovation",
        content: "we offer a comprehensive suite of sustainability services designed to empower individuals, businesses, and communities to embrace a greener and more environmentally responsible future. From cutting-edge renewable energy solutions such as solar and wind installations to waste reduction and recycling programs, we provide a range of services that span the sustainability spectrum. Our experts work closely with clients to customize solutions tailored to their unique needs."
    }
};

const AboutPage = () => {

    const [activeTab, setActiveTab] = useState<TabKey>('mission');


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-[50vh] w-full overflow-hidden relative">
                <Navbar />
                <Image
                    src="/news1.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full z-0"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h1 className="text-white text-7xl font-medium">About Us</h1>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center md:mx-64 mt-24 gap-32 mb-32'>
                <div className='w-full md:w-[60%] top-24'>
                    <div className='flex md:flex-row gap-12'>
                        {Object.keys(tabs).map((tab) => (
                            <h1
                                key={tab}
                                className={`about-tags ${activeTab === tab ? 'font-bold' : ''}`}
                                onClick={() => setActiveTab(tab as TabKey)}
                                style={{ cursor: 'pointer', backgroundColor: activeTab === tab ? '#a2672f' : '', color: activeTab === tab ? '#ffffff' : '' }}
                            >
                                {`Our ${tab.charAt(0).toUpperCase() + tab.slice(1)}`}
                            </h1>
                        ))}
                    </div>

                    <div className='mt-12'>
                        <h1 className='text-4xl md:text-6xl font-medium'>{tabs[activeTab].title}</h1>
                        <p className='text-xl md:text-2xl mt-6'>{tabs[activeTab].content}</p>
                    </div>
                </div>

                <div className="relative w-[520px] h-[500px] overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/aboutImage.webp"
                        alt="Styled Image"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>
            </div>

            <div className='mt-36 mb-32 flex flex-col mx-32 justify-center items-center'>
                <div className='flex flex-col text-center justify-center'>
                    <h1 className='text-5xl font-medium'>
                        Empowering Change
                    </h1>
                    <p className='text-2xl md:mx-64 mt-8'>Our commitment to recycling drives us towards a circular economy where waste becomes a resource. Join us in shaping a cleaner, brighter future.</p>
                </div>

                <div className='mt-24 md:mx-32 flex flex-col md:flex-row gap-14'>
                    <AboutCard
                        imageUrl='/aboutsvg1.svg'
                        title='Clean Energy Revolution'
                        content='By harnessing renewable resources like solar and wind, were reducing our carbon footprint, advancing a sustainable energy landscape.'
                    />
                    <AboutCard
                        imageUrl='/aboutsvg2.svg'
                        title='Circular Economy'
                        content='By recycling and reducing landfill waste, were conserving valuable resources, curbing pollution, and leaving a healthier planet.'
                    />
                    <AboutCard
                        imageUrl='/aboutsvg3.svg'
                        title='Role in Sustainability'
                        content='Through your support of green energy and recycling practices, youre contributing to a more resilient environment.'
                    />
                </div>
            </div>

            <div className='mb-32 relative w-[1400px] h-[500px] overflow-hidden rounded-3xl'>
                <Image
                    src="/about-img.jpg"
                    alt="Styled Image"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h1 className="text-white text-7xl font-medium bg-black rounded-full p-5"><IoPlayOutline />
                    </h1>
                </div>
            </div>


            <div className='md:mx-64 flex flex-col mb-32 gap-32'>
                <AboutEnergyCard
                    imageUrl='/energy-1.jpg'
                    title='Solar Energy'
                    content='The sun is an abundant source of energy waiting to be harnessed. Our solar panels and systems are designed to seamlessly integrate into your space, powering your home or business with clean, reliable energy.'
                />

                <div className="flex flex-col md:flex-row ">
                    <div className="relative w-full h-[25rem] overflow-hidden rounded-3xl shadow-lg ">
                        <Image
                            src='/energy-2.jpg'
                            alt="Styled Image"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>
                    <div className='flex flex-col justify-center w-[90%] mx-14'>
                        <h1 className='text-5xl font-medium'>Wind Energy</h1>
                        <p className='text-2xl font-normal mt-8'>Wind energy is a powerful force for change. Our wind turbines capture the breeze and transform it into a steady, renewable energy source, perfect for both urban and rural environments.</p>
                        <p className='underline text-xl text-[#87634a] mt-4 hover:text-[#2c3b35]' style={{ textUnderlineOffset: '8px' }}>
                            Learn More
                        </p>
                    </div>
                </div >

                <AboutEnergyCard
                    imageUrl='/energy-3.jpg'
                    title='Recycling'
                    content='By embracing the principles of reusing, and recycling, were paving the way for a more sustainable future. Discover how small actions can make a big impact as we work together to reduce waste and protect our planet.'
                />
            </div>

            <div className='bg-[#f6f7f9] w-full'>
                <ClientDetails />
            </div>


            <div>
                <ClientStories />
            </div>

            <div className='mt-32'>
                <FAQ />
            </div>



            <footer className='w-full mt-64 relative'>
                <div className="relative w-full h-[500px] overflow-hidden top-10 z-0" >
                    <Image
                        src="/solarBaseImage.jpg"
                        alt="Styled Image"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>

                    <div className="absolute inset-0 flex flex-col gap-10 items-center text-center justify-center">
                        <p className="text-white text-5xl font-medium w-[50%]">It`&apos;s Always The Right Time To Get Closer To A Zero-Waste Future</p>
                        <Button
                            title='Discover More'
                            variant='btn_white'
                        />
                    </div>
                </div>

                <div className='relative z-20'>
                    <Footer />
                </div>
            </footer>



        </div>

    );
}

export default AboutPage;

type AboutCartProp = {
    imageUrl: string,
    title: string,
    content: string,
}

const AboutCard = ({ imageUrl, title, content }: AboutCartProp) => {
    return (
        <div>
            <div className='flex flex-col  text-center items-center'>
                <Image
                    src={imageUrl}
                    alt='SVG'
                    width={100}
                    height={100}
                    className='bg-[#2c3d33] rounded-full p-4'
                />
                <h1 className='text-4xl font-medium mt-4'>{title}</h1>
                <p className='text-2xl font-normal mt-4'>{content}</p>

            </div>
        </div>
    );
};

type AboutEnergyProp = {
    imageUrl: string,
    title: string,
    content: string,
}


const AboutEnergyCard = ({ imageUrl, title, content }: AboutEnergyProp) => {

    return (
        <div className="flex flex-col md:flex-row-reverse ">
            <div className="relative w-full h-[25rem] overflow-hidden rounded-3xl shadow-lg ">
                <Image
                    src={imageUrl}
                    alt="Styled Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                />
            </div>
            <div className='flex flex-col justify-center w-[90%] mx-14'>
                <h1 className='text-5xl font-medium'>{title}</h1>
                <p className='text-2xl font-normal mt-8'>{content}</p>
                <p className='underline text-xl text-[#87634a] mt-4 hover:text-[#2c3b35]' style={{ textUnderlineOffset: '8px' }}>
                    Learn More
                </p>
            </div>
        </div >
    );
};
