import Image from 'next/image'
import React from 'react'

type ServiceProp = {
    title: string;
    content: string;
    img: string;
}

export const ServiceNavigator = ({ title, content, img }: ServiceProp) => {
    return (
        <div className='bg-[#f6f7f9] rounded-3xl cursor-pointer p-8 hover:bg-white mr-8 hover:border hover:border-[#16110e] transition duration-700 ease-in-out'>   
            <div >
                <Image
                    src={img}
                    alt='Service Image'
                    width={90}
                    height={100}
                    className='bg-[#b15d3d] rounded-full p-4'
                />
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-[#2D3D33] mt-3 hover:text-[#b15d3d] transition duration-300 ease-in-out'>
                    {title}
                </h1>
                <p className='text-lg font-normal mt-2'>
                    {content}
                </p>
            </div>
        </div>
    )
}
