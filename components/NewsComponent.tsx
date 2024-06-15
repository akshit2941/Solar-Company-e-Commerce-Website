import Image from 'next/image'
import React from 'react'

type NewsProp = {
  imageUrl: string
  title: string
  content: string
}

const NewsCard = ({ imageUrl, title, content }: NewsProp) => {
  return (
    <div className='mt-10 p-3 md:mt-0'>
      <div className='overflow-hidden rounded-3xl'>
        <Image
          src={imageUrl}
          alt='news'
          width={600}
          height={50}
          className='transform rounded-3xl transition duration-300 ease-in-out hover:scale-110'
        />
      </div>
      <div className='mt-8'>
        <h1 className='text-2xl font-semibold text-[#2c3b35] hover:text-[#87634a]'>
          {title}
        </h1>
        <p className='mt-2 text-xl font-normal text-[#2c3b35]'>{content}</p>
        <p
          className='mt-4 text-xl text-[#87634a] underline hover:text-[#2c3b35]'
          style={{ textUnderlineOffset: '8px' }}
        >
          Read More
        </p>
      </div>
    </div>
  )
}

export const ProjectCard = ({ imageUrl, title, content }: NewsProp) => {
  return (
    <div className='p-3'>
      <div className='relative h-[300px] w-[370px] overflow-hidden rounded-3xl md:h-[310px] md:w-[320px] lg:h-[220px] lg:w-[290px] 2xl:h-[300px] 2xl:w-[420px]'>
        <Image
          src={imageUrl}
          alt='Project Image'
          layout='fill'
          objectFit='cover'
          className='absolute inset-0 transform transition-transform duration-500 hover:scale-105'
        />
      </div>
      <div className='mt-8'>
        <h1 className='text-2xl font-semibold text-[#2c3b35] transition duration-300 hover:text-[#87634a]'>
          {title}
        </h1>
        <p className='mt-2 text-xl font-normal text-[#87634a] transition duration-500 hover:text-[#2c3b35]'>
          {content}
        </p>
      </div>
    </div>
  )
}

export const NewsComponent = () => {
  return (
    <div className='mx-10 mt-8 md:mx-0'>
      <div className='flex flex-col md:flex-row'>
        <NewsCard
          imageUrl='/news1.jpg'
          title='Eco-Friendly Innovations The Latest Advancements'
          content='The quest for a greener, more sustainable future has led to remarkable innovations in technology.'
        />
        <NewsCard
          imageUrl='/news3.jpg'
          title='Eco-Friendly Innovations The Latest Advancements'
          content='The quest for a greener, more sustainable future has led to remarkable innovations in technology.'
        />
        <NewsCard
          imageUrl='/news2.jpg'
          title='Eco-Friendly Innovations The Latest Advancements'
          content='The quest for a greener, more sustainable future has led to remarkable innovations in technology.'
        />
      </div>
    </div>
  )
}

export const ProjectComponent = () => {
  return (
    <div className='mt-8'>
      <div className='flex flex-row'>
        <ProjectCard
          imageUrl='/project-3.jpg'
          title='Wind Farm'
          content='Wind Energy'
        />
        <ProjectCard
          imageUrl='/project-2.jpg'
          title='Solar-Powered Home'
          content='Solar Energy'
        />
        <ProjectCard
          imageUrl='/project-3.jpg'
          title='Large-Scale Solar Farm'
          content='Solar Energy'
        />
      </div>
    </div>
  )
}
