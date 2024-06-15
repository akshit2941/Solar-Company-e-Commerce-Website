'use client'
import Button from '@/components/Button'
import ClientDetails from '@/components/ClientDetails'
import { ClientStories } from '@/components/ClientStories'
import FAQ from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoPlayOutline } from 'react-icons/io5'

type TabKey = 'mission' | 'values' | 'services'

const tabs: Record<TabKey, { title: string; content: string }> = {
    mission: {
        title: 'Together, We Can Pioneer A Sustainable Future.',
        content:
            "Our mission is to lead the charge in building a sustainable and greener future for generations to come. We're driven by a steadfast commitment to environmental stewardship, innovation, and positive social impact. Our mission isn't just a statement; it's a commitment to a better, more sustainable world. We invite you to join us on this journey towards a greener and brighter tomorrow. Together, we can pioneer a sustainable future that benefits us all."
    },
    values: {
        title: 'Positive Environmental Impact In All We Do.',
        content:
            'Our core values serve as the foundation of everything we do. They embody our unwavering dedication to sustainability, innovation, and positive impact. These core values guide our decisions, actions, and interactions, ensuring that we remain steadfast in our pursuit of a more sustainable and eco-friendly future. They serve as a compass, directing us toward positive environmental and social impact in everything we do. We invite you to join us on this journey towards a greener and brighter.'
    },
    services: {
        title: 'We Take Pride In Commitment To Innovation',
        content:
            'we offer a comprehensive suite of sustainability services designed to empower individuals, businesses, and communities to embrace a greener and more environmentally responsible future. From cutting-edge renewable energy solutions such as solar and wind installations to waste reduction and recycling programs, we provide a range of services that span the sustainability spectrum. Our experts work closely with clients to customize solutions tailored to their unique needs.'
    }
}

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState<TabKey>('mission')

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='relative h-[50vh]  w-full overflow-hidden'>
                <Navbar />
                <Image
                    src='/news1.jpg'
                    alt='Background'
                    layout='fill'
                    objectFit='cover'
                    className='absolute left-0 top-0 z-0 h-full w-full'
                />

                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='absolute inset-0 z-10 flex items-center justify-center'>
                    <h1 className='text-5xl font-medium text-white md:text-7xl'>
                        About Us
                    </h1>
                </div>
            </div>

            <div className='z-10 -mt-12 rounded-3xl bg-white lg:-mt-2 2xl:-mt-24'>
                <div className='mx-6 mb-2 mt-12 flex flex-col items-center justify-center gap-32 md:mb-12 md:mt-24 md:flex-row lg:mx-16 2xl:mx-64'>
                    <div className='w-full lg:w-[70%] xl:w-[60%]'>
                        <div className='flex gap-4 md:flex-row lg:gap-6 xl:gap-12'>
                            {Object.keys(tabs).map(tab => (
                                <h1
                                    key={tab}
                                    className={`about-tags ${activeTab === tab ? 'font-bold' : ''}`}
                                    onClick={() => setActiveTab(tab as TabKey)}
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor: activeTab === tab ? '#a2672f' : '',
                                        color: activeTab === tab ? '#ffffff' : ''
                                    }}
                                >
                                    {`Our ${tab.charAt(0).toUpperCase() + tab.slice(1)}`}
                                </h1>
                            ))}
                        </div>

                        <div className='mt-6 md:mt-12'>
                            <h1 className='text-4xl font-medium md:text-6xl'>
                                {tabs[activeTab].title}
                            </h1>
                            <p className='mt-6 text-xl md:text-xl'>
                                {tabs[activeTab].content}
                            </p>
                        </div>
                    </div>

                    <div className='relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg md:h-[400px] md:w-[420px] 2xl:h-[500px] 2xl:w-[520px]'>
                        <Image
                            src='/aboutImage.webp'
                            alt='Styled Image'
                            layout='fill'
                            objectFit='cover'
                            className='absolute inset-0'
                        />
                    </div>
                </div>
            </div>

            <div className='mx-8 mb-32 mt-20 flex flex-col items-center justify-center md:mt-36 lg:mx-6 2xl:mx-32'>
                <div className='flex flex-col justify-center text-center'>
                    <h1 className='text-5xl font-semibold'>Empowering Change</h1>
                    <p className='mt-3 text-lg md:mx-64 md:mt-8 md:text-xl'>
                        Our commitment to recycling drives us towards a circular economy
                        where waste becomes a resource. Join us in shaping a cleaner,
                        brighter future.
                    </p>
                </div>

                <div className='mt-12 flex flex-col gap-14 md:mt-24 md:flex-row lg:mx-12 2xl:mx-32'>
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

            <div className='xl:w-[1400px] relative mb-32 hidden h-[200px] w-[1000px] overflow-hidden rounded-3xl md:flex lg:h-[300px] lg:w-[1100px] 2xl:h-[500px]'>
                <Image
                    src='/about-img.jpg'
                    alt='Styled Image'
                    layout='fill'
                    objectFit='cover'
                />
                <div className='absolute inset-0 bg-black bg-opacity-15'></div>
                <div className='absolute inset-0 z-10 flex items-center justify-center'>
                    <h1 className='rounded-full bg-black p-5 font-medium text-white'>
                        <IoPlayOutline />
                    </h1>
                </div>
            </div>

            <div className='mx-5 mb-32 flex flex-col gap-12 md:gap-32 lg:mx-12 2xl:mx-64'>
                <AboutEnergyCard
                    imageUrl='/energy-1.jpg'
                    title='Solar Energy'
                    content='The sun is an abundant source of energy waiting to be harnessed. Our solar panels and systems are designed to seamlessly integrate into your space, powering your home or business with clean, reliable energy.'
                />

                <div className='flex flex-col md:flex-row'>
                    <div className='relative h-[25rem] w-full overflow-hidden rounded-3xl shadow-lg'>
                        <Image
                            src='/energy-2.jpg'
                            alt='Styled Image'
                            layout='fill'
                            objectFit='cover'
                            className='absolute inset-0'
                        />
                    </div>
                    <div className='mx-4 flex w-[90%] flex-col justify-center md:mx-14'>
                        <h1 className='mt-6 text-4xl font-medium md:mt-0 md:text-5xl'>
                            Wind Energy
                        </h1>
                        <p className='mt-3 text-base font-normal md:mt-8 md:text-2xl'>
                            Wind energy is a powerful force for change. Our wind turbines
                            capture the breeze and transform it into a steady, renewable
                            energy source, perfect for both urban and rural environments.
                        </p>
                        <p
                            className='mt-4 text-xl text-[#87634a] underline hover:text-[#2c3b35]'
                            style={{ textUnderlineOffset: '8px' }}
                        >
                            Learn More
                        </p>
                    </div>
                </div>

                <AboutEnergyCard
                    imageUrl='/energy-3.jpg'
                    title='Recycling'
                    content='By embracing the principles of reusing, and recycling, were paving the way for a more sustainable future. Discover how small actions can make a big impact as we work together to reduce waste and protect our planet.'
                />
            </div>

            <div className='w-full bg-[#f6f7f9]'>
                <ClientDetails />
            </div>

            <div>
                <ClientStories />
            </div>

            <div className='mt-32'>
                <FAQ />
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

export default AboutPage

type AboutCartProp = {
    imageUrl: string
    title: string
    content: string
}

const AboutCard = ({ imageUrl, title, content }: AboutCartProp) => {
    return (
        <div>
            <div className='flex flex-col items-center text-center'>
                <Image
                    src={imageUrl}
                    alt='SVG'
                    width={100}
                    height={100}
                    className='rounded-full bg-[#2c3d33] p-4'
                />
                <h1 className='mt-4 text-3xl font-semibold'>{title}</h1>
                <p className='mt-4 text-lg font-normal'>{content}</p>
            </div>
        </div>
    )
}

type AboutEnergyProp = {
    imageUrl: string
    title: string
    content: string
}

const AboutEnergyCard = ({ imageUrl, title, content }: AboutEnergyProp) => {
    return (
        <div className='flex flex-col md:flex-row-reverse'>
            <div className='relative h-[25rem] w-full overflow-hidden rounded-3xl'>
                <Image
                    src={imageUrl}
                    alt='Styled Image'
                    layout='fill'
                    objectFit='cover'
                    className='absolute inset-0'
                />
            </div>
            <div className='mx-4 flex w-[90%] flex-col justify-center md:mx-14'>
                <h1 className='mt-6 text-4xl font-medium md:mt-0 md:text-5xl'>
                    {title}
                </h1>
                <p className='mt-3 text-base font-normal md:mt-8 md:text-2xl'>
                    {content}
                </p>
                <p
                    className='mt-4 text-xl text-[#87634a] underline hover:text-[#2c3b35]'
                    style={{ textUnderlineOffset: '8px' }}
                >
                    Learn More
                </p>
            </div>
        </div>
    )
}
