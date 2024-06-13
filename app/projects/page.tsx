import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ProjectCard, ProjectComponent } from '@/components/NewsComponent'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectPage = () => {
    return (
        <div>
            <div className="h-[50vh] w-full overflow-hidden relative rounded-b-5xl">
                <Navbar />
                <Image
                    src="/projectNavbar.webp"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full z-0"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h1 className="text-white text-7xl font-medium">Projects</h1>
                </div>
            </div>

            {/* <div>
                <div className='flex justify-center gap-10'>
                    <h1 className='project-navigator'>All Projects</h1>
                    <h1 className='project-navigator'>Wind Energy</h1>
                    <h1 className='project-navigator'>
                        Solar Energy
                    </h1>
                    <h1 className='project-navigator'>
                        Recycling
                    </h1>
                </div>
            </div> */}

            <div className='flex flex-col items-center justify-center md:mx-64 mt-16 mb-32'>
                <div className='flex flex-col md:flex-row gap-4'>
                    <Link href='/projects/projectPage1'><ProjectCard imageUrl='/news1.jpg' title='Green Building Retrofit' content='Solar Energy' /></Link>
                    <Link href='/projects/projectPage2'><ProjectCard imageUrl='/project-1.jpg' title='Wind Farm' content='Wind Energy' /></Link>
                    <Link href='/projects/projectPage3'><ProjectCard imageUrl='/project-2.jpg' title='Solar-Powered Home' content='Solar Energy' /></Link>
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <Link href='/projects/projectPage4'><ProjectCard imageUrl='/project-4.jpg' title='Recycling Education Campaign' content='Recycling' /></Link>
                    <Link href='/projects/projectPage5'><ProjectCard imageUrl='/project-3.jpg' title='Large-Scale Solar Farm' content='Solar Energy' /></Link>
                    <Link href='/projects/projectPage6'><ProjectCard imageUrl='/energy-3.jpg' title='Waste Reduction Challenge' content='Recycling' /></Link>
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}

export default ProjectPage

