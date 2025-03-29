import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ProjectCard } from '@/components/NewsComponent'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectPage = () => {
  return (
    <div>
      <div className='relative h-[50vh] w-full overflow-hidden rounded-b-5xl'>
        <Navbar />
        <Image
          src='/projectNavbar.webp'
          alt='Background'
          layout='fill'
          objectFit='cover'
          className='absolute left-0 top-0 z-0 h-full w-full'
        />

        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='absolute inset-0 z-10 flex items-center justify-center'>
          <h1 className='text-3xl font-medium text-white lg:text-5xl xl:text-7xl'>
            Projects
          </h1>
        </div>
      </div>

      <div className='mb-32 mt-16 flex flex-col items-center justify-center md:mx-6 lg:mx-8 xl:mx-24'>
        <div className='flex flex-col   gap-4 md:flex-row'>
          <Link href='/projects/projectPage1'>
            <ProjectCard
              imageUrl='/p-1.jpeg'
              title='Holister Medical, Bawal'
              content='300kWh'
            />
          </Link>
          <Link href='/projects/projectPage2'>
            <ProjectCard
              imageUrl='/project-1.jpg'
              title='MITS Gwalior'
              content='300kWh'
            />
          </Link>
          <Link href='/projects/projectPage3'>
            <ProjectCard
              imageUrl='/project-2.jpg'
              title='Bharat Electronics Limited'
              content='900kWh'
            />
          </Link>
        </div>
        <div className='flex flex-col gap-4 md:flex-row'>
          <Link href='/projects/projectPage4'>
            <ProjectCard
              imageUrl='/project-4.jpg'
              title='Delhi Mumbai ExpressWay'
              content='1.8 mWh'
            />
          </Link>
          <Link href='/projects/projectPage5'>
            <ProjectCard
              imageUrl='/project-3.jpg'
              title='Metro Valley Projects Private Ltd.'
              content='250kWh'
            />
          </Link>
          <Link href='/projects/projectPage6'>
            <ProjectCard
              imageUrl='/energy-3.jpg'
              title='PM Surya Ghar Yojana'
              content='150 Houses'
            />
          </Link>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectPage
