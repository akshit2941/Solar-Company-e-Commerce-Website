import Image from 'next/image';
import React from 'react'

export default function ClientDetails() {
    return (
        <div className=' w-full my-16'>
            <div className='flex justify-center'>
                <h1 className='text-2xl bg-[#e2d1bf] text-[#936a45] p-3 px-6 rounded-5xl'>Our Client</h1>
            </div>

            <div className='flex flex-col text-center items-center mt-10'>
                <h1 className='text-3xl md:text-5xl font-semibold'>Over 1500 Clients Use Our Services</h1>
                <p className='text-xl md:text-2xl font-normal w-[80%] md:w-[50%] mt-8'>
                    Green energy solutions like solar panels and small wind turbines can be installed on residential properties.
                </p>
            </div>

            <div className='hidden md:flex flex-row items-center justify-center gap-20 mt-20'>
                <ClentIcons
                    imageUrl='/icon1.png'
                />
                <ClentIcons
                    imageUrl='/icon2.png'
                />
                <ClentIcons
                    imageUrl='/icon3.png'
                />
                <ClentIcons
                    imageUrl='/icon4.png'
                />
                <ClentIcons
                    imageUrl='/icon6.png'
                />
            </div>

        </div>
    )
}

type Icon = {
    imageUrl: string,
}

const ClentIcons = ({ imageUrl }: Icon) => {
    return (
        <div>
            <div className='opacity-45 hover:opacity-100 duration-500'>
                <Image
                    src={imageUrl}
                    alt='icon'
                    width={150}
                    height={100}
                    className='border border-black p-4 rounded-5xl'
                />
            </div>

        </div>
    );
};