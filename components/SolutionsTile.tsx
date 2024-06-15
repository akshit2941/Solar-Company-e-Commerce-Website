import React from 'react'
import Image from 'next/image'

type SolutionTileProp = {
    imageUrl: string
    title: string
    number: number,
    content: string
}

export const SolutionsTileLeft = ({ imageUrl, title, content, number }: SolutionTileProp) => {
    return (
        <div className='flex flex-col lg:flex-row font-inter md:flex-row '>
            <div className='relative h-[25rem] w-full overflow-hidden rounded-3xl'>
                <Image
                    src={imageUrl}
                    alt='Styled Image'
                    layout='fill'
                    objectFit='cover'
                    className='absolute inset-0'
                />
            </div>

            <div className='flex items-start justify-start lg:items-center lg:justify-center mt-5 md:mt-0 md:mx-10 px-5'>
                <h1 className='text-7xl font-inter font-bold bg-[#e2d1bf] p-3 px-5 rounded-5xl text-[#a36630]'>0{number}</h1>
            </div>


            <div className='flex w-full flex-col justify-center'>
                <h1 className='mt-6 text-4xl  font-semibold text-[#2e3c33]  md:mt-0 md:text-4xl'>
                    {title}
                </h1>
                <p className='mt-4 text-[#2e3c33] text-base font-normal md:mt-3 md:text-xl'>
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


export const SolutionsTileRight = ({ imageUrl, title, content, number }: SolutionTileProp) => {
    return (
        <div>
            <div className='hidden md:flex flex-col font-inter md:flex-row'>
                <div className='flex items-center justify-center mx-10 ml-0 px-5'>
                    <h1 className='text-7xl font-inter font-bold bg-[#e2d1bf] p-3 px-5 rounded-5xl text-[#a36630]'>0{number}</h1>
                </div>

                <div className='flex w-full flex-col justify-center'>
                    <h1 className='mt-6 text-4xl w-[90%]  font-semibold text-[#2e3c33]  md:mt-0 md:text-4xl'>
                        {title}
                    </h1>
                    <p className='mt-2 text-base text-[#2e3c33] font-normal w-[90%] md:mt-3 md:text-xl'>
                        {content}
                    </p>
                    <p
                        className='mt-4 text-xl text-[#87634a] underline hover:text-[#2c3b35]'
                        style={{ textUnderlineOffset: '8px' }}
                    >
                        Learn More
                    </p>
                </div>

                <div className='relative h-[25rem] w-full overflow-hidden rounded-3xl'>
                    <Image
                        src={imageUrl}
                        alt='Styled Image'
                        layout='fill'
                        objectFit='cover'
                        className='absolute inset-0'
                    />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row font-inter md:hidden '>
                <div className='relative h-[25rem] w-full overflow-hidden rounded-3xl'>
                    <Image
                        src={imageUrl}
                        alt='Styled Image'
                        layout='fill'
                        objectFit='cover'
                        className='absolute inset-0'
                    />
                </div>

                <div className='flex items-start justify-start lg:items-center lg:justify-center mt-5 md:mt-0 md:mx-10 px-5'>
                    <h1 className='text-7xl font-inter font-bold bg-[#e2d1bf] p-3 px-5 rounded-5xl text-[#a36630]'>0{number}</h1>
                </div>


                <div className='flex w-full flex-col justify-center'>
                    <h1 className='mt-6 text-4xl  font-semibold text-[#2e3c33]  md:mt-0 md:text-4xl'>
                        {title}
                    </h1>
                    <p className='mt-4 text-[#2e3c33] text-base font-normal md:mt-3 md:text-xl'>
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


        </div>

    )
}