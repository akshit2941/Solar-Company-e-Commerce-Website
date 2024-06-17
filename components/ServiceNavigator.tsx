import Image from 'next/image'
import React from 'react'

type ServiceProp = {
  title: string
  content: string
  img: string
}

export const ServiceNavigator = ({ title, content, img }: ServiceProp) => {
  return (
    <div className='cursor-pointer rounded-3xl bg-[#f6f7f9] p-8 transition duration-700 ease-in-out hover:border hover:border-[#3b3029] hover:bg-white md:mr-8'>
      <div>
        <Image
          src={img}
          alt='Service Image'
          width={90}
          height={100}
          className='rounded-full bg-[#b15d3d] p-4'
        />
      </div>
      <div>
        <h1 className='mt-3 text-2xl lg:text-2xl font-semibold text-[#2D3D33] transition duration-300 ease-in-out hover:text-[#b15d3d]'>
          {title}
        </h1>
        <p className='mt-2 text-lg md:text-lg lg:text-lg font-normal'>{content}</p>
      </div>
    </div>
  )
}
