import Image from 'next/image'
import React from 'react'

export default function ClientDetails() {
  return (
    <div className='my-16 w-full'>
      <div className='flex justify-center'>
        <h1 className='rounded-5xl bg-[#e2d1bf] p-3 px-6 text-2xl text-[#936a45]'>
          Our Client
        </h1>
      </div>

      <div className='mt-10 flex flex-col items-center text-center'>
        <h1 className='text-3xl font-semibold md:text-5xl'>
          Over 1500 Clients Use Our Services
        </h1>
        <p className='mt-8 w-[80%] text-xl font-normal md:w-[50%] md:text-2xl'>
          Green energy solutions like solar panels and small wind turbines can
          be installed on residential properties.
        </p>
      </div>

      <div className='mt-20 hidden flex-row items-center justify-center gap-20 md:flex'>
        <ClentIcons imageUrl='/icon1.png' />
        <ClentIcons imageUrl='/icon2.png' />
        <ClentIcons imageUrl='/icon3.png' />
        <ClentIcons imageUrl='/icon4.png' />
        <ClentIcons imageUrl='/icon6.png' />
      </div>
    </div>
  )
}

type Icon = {
  imageUrl: string
}

const ClentIcons = ({ imageUrl }: Icon) => {
  return (
    <div>
      <div className='opacity-45 duration-500 hover:opacity-100'>
        <Image
          src={imageUrl}
          alt='icon'
          width={150}
          height={100}
          className='rounded-5xl border border-black p-4'
        />
      </div>
    </div>
  )
}
