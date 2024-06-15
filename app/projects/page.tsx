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

      <div className='mb-32 mt-16 flex flex-col items-center justify-center lg:mx-8 xl:mx-24'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <Link href='/projects/projectPage1'>
            <ProjectCard
              imageUrl='/news1.jpg'
              title='Green Building Retrofit'
              content='Solar Energy'
            />
          </Link>
          <Link href='/projects/projectPage2'>
            <ProjectCard
              imageUrl='/project-1.jpg'
              title='Wind Farm'
              content='Wind Energy'
            />
          </Link>
          <Link href='/projects/projectPage3'>
            <ProjectCard
              imageUrl='/project-2.jpg'
              title='Solar-Powered Home'
              content='Solar Energy'
            />
          </Link>
        </div>
        <div className='flex flex-col gap-4 md:flex-row'>
          <Link href='/projects/projectPage4'>
            <ProjectCard
              imageUrl='/project-4.jpg'
              title='Recycling Education Campaign'
              content='Recycling'
            />
          </Link>
          <Link href='/projects/projectPage5'>
            <ProjectCard
              imageUrl='/project-3.jpg'
              title='Large-Scale Solar Farm'
              content='Solar Energy'
            />
          </Link>
          <Link href='/projects/projectPage6'>
            <ProjectCard
              imageUrl='/energy-3.jpg'
              title='Waste Reduction Challenge'
              content='Recycling'
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
