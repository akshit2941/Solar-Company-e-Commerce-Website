import { Footer } from '@/components/Footer'
import Navbar_black from '@/components/Navbar_black'
import { ResusableDecimalPoints } from '@/components/ServiceComponentMain'
import Image from 'next/image'
import React from 'react'

type NewsProp = {
    title: string
    tag_content: string
    imagePath: string

}

const NewsPageMain = ({ title, tag_content, imagePath }: NewsProp) => {
    return (
        <div>
            <div className='bg-white'>
                <Navbar_black />
            </div>

            <div className='mx-64'>
                <div className='flex justify-start'>
                    <h1 className='mt-8 rounded-3xl bg-[#e2d1bf] p-3 text-xl text-[#936a45] md:mt-12 md:text-2xl lg:mt-16 lg:text-3xl'>
                        {tag_content}
                    </h1>
                </div>

                <h1 className='text-7xl font-medium font-sans text-[#2e3c33] my-8'>{title}</h1>

                <div className='relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg md:h-[400px] md:w-[420px] 2xl:h-[42rem] 2xl:w-full'>
                    <Image
                        src={imagePath}
                        alt='Styled Image'
                        layout='fill'
                        objectFit='cover'
                        className='absolute inset-0'
                    />
                </div>

                <div className='mt-12'>
                    <div>
                        <h1 className='text-3xl font-semibold text-[#2e3c35] md:text-5xl'>
                            Pioneering a Sustainable Tomorrow
                        </h1>
                        <p className='mt-4 text-xl text-[#2e3c35] md:text-2xl'>
                            The quest for a greener, more sustainable future has led to remarkable innovations in technology. As the world grapples with environmental challenges, scientists, engineers, and innovators are rising to the occasion with groundbreaking solutions that promise to reshape our relationship with the planet. In this post, we explore some of the most exciting eco-friendly innovations that are helping pave the way towards a more sustainable tomorrow.
                        </p>
                    </div>

                    <div>
                        <ResusableDecimalPoints
                            title='1. Solar-Powered Roads:'
                            content="Imagine highways that not only transport us but also generate clean energy. Solar roadways, embedded with photovoltaic cells, are a reality today. These roads harness solar energy to power streetlights, reduce ice and snow accumulation, and even charge electric vehicles as they drive. It's an innovation that combines transportation and renewable energy to reduce our carbon footprint."
                        />
                        <ResusableDecimalPoints
                            title='2. Vertical Farms:'
                            content="With urbanization on the rise, the need for sustainable agriculture practices is more pressing than ever. Vertical farms address this challenge by growing crops in stacked layers, often indoors. They use less land and water than traditional farming, reduce the need for pesticides, and provide fresh produce year-round to urban populations."
                        />
                        <ResusableDecimalPoints
                            title='3. Ocean Cleanup Technologies:'
                            content='Plastic pollution in our oceans is a global crisis. Innovations like the Ocean Cleanup Project are tackling this issue head-on. Their system uses floating barriers to collect plastic waste from the ocean&apos;s surface, which is then recycled. This innovative approach has the potential to significantly reduce the amount of plastic entering our oceans.'
                        />
                        <ResusableDecimalPoints
                            title='4. Biodegradable Packaging:'
                            content='Traditional plastics are a major contributor to environmental pollution. Biodegradable packaging materials offer a sustainable alternative. These materials break down naturally, reducing the impact of plastic waste on landfills and ecosystems. They&apos;re being used in everything from food packaging to disposable cutlery.'
                        />
                        <ResusableDecimalPoints
                            title='5. Electric Aviation:'
                            content="The aviation industry is embracing electric propulsion as a cleaner alternative to traditional jet engines. Electric aircraft produce fewer emissions and are quieter than their fossil-fuel counterparts. Companies are working on developing short-haul electric planes for a more sustainable future of air travel."
                        />
                        <ResusableDecimalPoints
                            title='6. Smart Grids:'
                            content='Energy grids are getting smarter. Smart grids use advanced sensors, communication networks, and real-time data analysis to optimize energy distribution. They enhance energy efficiency, reduce power outages, and support the integration of renewable energy sources like solar and wind into the grid.'
                        />
                        <ResusableDecimalPoints
                            title='7. Biotech for Carbon Capture:'
                            content="Biotechnology is making strides in carbon capture and sequestration. Some innovations involve using microbes to capture and convert carbon dioxide emissions from industrial processes into valuable products like biofuels and biodegradable plastics."
                        />
                        <ResusableDecimalPoints
                            title='8. Green Building Materials:'
                            content="The construction industry is turning to sustainable building materials like bamboo, recycled steel, and engineered wood. These materials are not only eco-friendly but also energy-efficient, making buildings greener from the ground up."
                        />
                    </div>

                    <div className='mt-8 text-xl text-[#2e3c35] md:text-2xl'>
                        <p>
                            These eco-friendly innovations represent just a glimpse of the exciting possibilities in sustainable technology. They offer hope that, with continued ingenuity and commitment, we can address environmental challenges and build a more sustainable and resilient world. As consumers, supporting these innovations and embracing eco-friendly practices in our daily lives is a crucial step towards a brighter and greener future.
                        </p>
                        <p className='mt-6'>
                            In closing, the path to sustainability is paved with innovation. These eco-friendly advancements remind us that the solutions to our environmental challenges are within reach, and that together, we can pioneer a more sustainable tomorrow.
                        </p>
                    </div>
                </div>

            </div>

            <div className='mt-48'>
                <Footer />
            </div>
        </div>
    )
}

export default NewsPageMain
