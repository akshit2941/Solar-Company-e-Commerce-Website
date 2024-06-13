import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { ServiceNavigator } from '@/components/ServiceNavigator';
import { FAQ } from '@/components/FAQ';
import { ClientStories } from '@/components/ClientStories';
import { NewsComponent } from '@/components/NewsComponent';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <div className="relative h-[90vh] w-full overflow-hidden">
        <Navbar />
        <Image
          src="/home-bg.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full z-0 rounded-b-3xl bg-[#2f3c35]"
        />

        <div className=" flex flex-col absolute sm:flex-row items-center justify-center text-white z-10">


          <div className='flex flex-1 flex-col p-4 md:ml-48'>
            <h1 className="text-4xl mt-32 md:mt-0 md:text-7xl font-bold mb-4 ">Renew, Reuse, Recycle</h1>
            <p className='text-lg md:text-2xl mt-4'>Discover how your small actions can make a big impact as we work together to reduce waste, conserve resources, and protect our planet for generations to come.</p>
            <div className='mt-6'>
              <Link href='/contact'>
                <Button title='Get Started' variant='btn_white' />
              </Link>
            </div>
          </div>


          <div className='flex-1 flex justify-center md:justify-end p-8 mt-10 md:mr-60'>
            <div className='grid grid-cols-2 gap-y-8 gap-x-48 mt-12 justify-center items-center' style={{ gridTemplateColumns: '200px 200px', gridAutoRows: 'auto' }}>
              <div className="relative w-[320px] h-[280px] overflow-hidden rounded-xl transform -rotate-12">
                <Image
                  src="/block-1.webp"
                  alt="Styled Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-[320px] h-[280px] overflow-hidden rounded-xl transform rotate-6">
                <Image
                  src="/block-2.webp"
                  alt="Styled Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-[320px] h-[280px] overflow-hidden rounded-xl transform -rotate-6">
                <Image
                  src="/block-3.webp"
                  alt="Styled Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-[380px] h-[380px] overflow-hidden rounded-xl transform rotate-2">
                <Image
                  src="/block-4.webp"
                  alt="Styled Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row mt-48 mb-48 md:mx-64 justify-center items-center'>
        {/* Left Image */}

        <div className="w-full max-w-lg mx-auto">
          <Image
            src="/Globe.webp"
            alt="photo"
            width={1400}
            height={1050}
            sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 80vw, (max-width: 1919px) 70vw, 60vw"
            className="image-style-solo object-cover object-center rounded-3xl"
          />
        </div>

        {/* Right Content */}
        <div className='relative -mt-16 w-1/2'>
          <h1 className='text-3xl md:text-5xl font-medium text-[#2D3D33]'>Sustainability Is More Than A Goal – It&apos;s Our Mission</h1>
          <p className='text-2xl font-normal text-[#232323] mt-8'>
            We&apos;re dedicated to revolutionizing the way we power our world. Our commitment to a greener tomorrow drives us to provide innovative and sustainable energy solutions that make a real difference. Join us in the journey towards a cleaner, more vibrant planet.
          </p>
          <div className='relative flex mt-8 bg-[#2c3b35] rounded-2xl p-6 -left-1/4'>
            <div className='flex-1 flex-col items-center text-center'>
              <h1 className='text-6xl font-medium text-white'>384</h1>
              <p className='text-2xl mt-2 font-normal text-white'>Successful projects</p>
            </div>
            <div className='flex-1 flex-col items-center text-center'>
              <h1 className='text-6xl font-medium text-white'>1000+</h1>
              <p className='text-2xl mt-2 font-normal text-white'>Satisfied clients</p>
            </div>
            <div className='flex-1 flex-col items-center text-center'>
              <h1 className='text-6xl font-medium text-white'>20</h1>
              <p className='text-2xl mt-2 font-normal text-white'>Megawatt capacity</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-10 md:mx-64'>
        <div className='flex flex-row justify-between m-auto'>
          <div className='text-center items-center justify-start'>
            <h1 className='text-4xl font-semibold text-[#2d3d33]'>Our Services</h1>
          </div>
          <div className='flex items-center justify-end'>
            <Link href='/services'>
              <Button
                title='Discover More'
                variant='btn_black'
              />
            </Link>
          </div>
        </div>

        <div className='mt-14 flex flex-col md:flex-row'>
          <div className='w-[100%] h-[300px] '>
            <Link href='/services/service1'>
              <ServiceNavigator
                title="Energy Storage Solutions"
                content='We believe that technology design are revolutionizing brand experiences.'
                img="/service-1.svg"
              />
            </Link>
          </div>
          <div className='w-[100%] h-[300px] '>
            <Link href='/services/service2'>
              <ServiceNavigator
                title="Solar Panel Installation"
                content='We believe that human-centered design are revolutionizing brand experiences.'
                img="/service-2.svg"
              />
            </Link>
          </div>
          <div className='w-[100%] h-[300px] '>
            <Link href='/services/service3'>
              <ServiceNavigator
                title="Wind Turbine Installation"
                content='Reduce your capital and operating costs, while modernizing your IT.'
                img="/service-3.svg"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-none md:bg-bg-img-1 mb-24 mt-40' >
        <div className=' bg-[#2d3d33] md:rounded-br-[210px] md:w-3/5'>
          <div className=' md:ml-52 mb-20'>
            <h1 className='text-white text-4xl font-semibold mt-20'>
              Green Solutions
            </h1>
            <p className='text-white text-xl font-medium mt-6 w-3/4'>We&apos;re dedicated to revolutionizing the way we power our world. Our commitment to a greener tomorrow drives us to provide innovative and sustainable energy solutions that make a real difference. Join us in the journey towards a cleaner, more vibrant planet.
            </p>
            <div className='mt-10'>
              <Link href='/services'>
                <Button
                  title='Learn More'
                  variant='btn_white'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='md:mx-64 mb-32'>
        <div className='flex flex-row justify-between m-auto'>
          <div className='text-center items-center justify-start'>
            <h1 className='text-4xl font-semibold text-[#2d3d33]'>Our Projects</h1>
          </div>
          <div className='flex items-center justify-end'>
            <Link href='/projects'>
              <Button
                title='Discover More'
                variant='btn_black'
              />
            </Link>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mt-8 cursor-pointer'>
          {/* Left */}
          <div>
            <div>
              <Link href='/projects/projectPage2'>
                <div className="relative w-[550px] h-[300px] overflow-hidden rounded-3xl ">
                  <Image
                    src="/project-1.jpg"
                    alt="Styled Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 transition-transform duration-500 transform hover:scale-105 "
                  />
                </div>
                <div>
                  <h1 className='project-head'>Wind Farm</h1>
                  <p className='project-para'>Wind Energy</p>
                </div>
              </Link>
            </div>

            <div className='mt-8'>
              <Link href='/projects/projectPage3'>
                <div className="relative w-[550px] h-[300px] overflow-hidden rounded-3xl  ">
                  <Image
                    src="/project-2.jpg"
                    alt="Styled Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 transition-transform duration-500 transform hover:scale-105"
                  />
                </div>
                <div>
                  <h1 className='project-head'>Solar-Powered Home</h1>
                  <p className='project-para'>Solar Energy</p>
                </div>
              </Link>
            </div>

          </div>
          {/* Right */}
          <div>
            <div className='flex-col w-full ml-10'>
              <Link href='/projects/projectPage5'>
                <div className="relative w-full h-[90%] overflow-hidden rounded-3xl ">
                  <Image
                    src="/project-3.jpg"
                    alt="Styled Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 transition-transform duration-500 transform hover:scale-105"
                  />
                </div>
                <div >
                  <h1 className='project-head'>Large-Scale Farm</h1>
                  <p className='project-para'>Solar Energy</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-28'>
        <FAQ />
      </div>

      <div className='mb-20 bg-[#f6f7f9]'>
        <ClientStories />
      </div>

      <div className='md:mx-64 mb-32'>
        <div className='flex flex-row justify-between m-auto'>
          <div className='text-center items-center justify-start'>
            <h1 className='text-4xl font-semibold text-[#2d3d33]'>Top News</h1>
          </div>
          <div className='flex items-center justify-end'>
            <Button
              title='Discover More'
              variant='btn_black'
            />
          </div>
        </div>
        <div>
          <NewsComponent />
        </div>
      </div>

      <div className=''>
        <Footer />
      </div>

    </div>


  );
};

export default Home;