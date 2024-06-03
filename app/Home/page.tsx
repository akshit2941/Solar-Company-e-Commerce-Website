import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { ServiceNavigator } from '@/components/ServiceNavigator';
import { FAQ } from '@/components/FAQ';

const Home = () => {
  return (
    <div>
      <div className="relative h-[90vh] w-full overflow-hidden">
        <Navbar />
        <Image
          src="/home-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full z-0 rounded-b-3xl"
        />

        <div className="absolute inset-0 flex flex-row items-center justify-center text-white z-10">
          {/* Left Section */}
          <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left p-4 ml-48'>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Renew, Reuse, Recycle</h1>
            <p className='text-2xl mt-4'>Discover how your small actions can make a big impact as we work together to reduce waste, conserve resources, and protect our planet for generations to come.</p>
            <div className='mt-6'>
              <Button title='Get Started' variant='btn_white' />
            </div>
          </div>
          {/* Right Section */}
          <div className='flex-1 flex justify-center md:justify-end p-4 mr-48'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center' style={{ gridTemplateColumns: '200px 200px', gridAutoRows: 'auto' }}>
              <div className="w-48 h-48 relative overflow-hidden rounded-lg">
                <Image
                  src='/block-1.jpg'
                  alt="display"
                  // width={170}
                  // height={170}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className='home-box-images object-cover object-center'
                />
              </div>
              <div className="w-48 h-48 relative overflow-hidden rounded-lg">
                <Image
                  src='/block-2.jpg'
                  alt="display"
                  // width={170}
                  // height={170}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className='home-box-images object-cover object-center'
                />
              </div>
              <div className="w-48 h-48 relative overflow-hidden rounded-lg">
                <Image
                  src='/block-3.jpg'
                  alt="display"
                  // width={170}
                  // height={170}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className='home-box-images object-cover object-center'
                />
              </div>
              <div className="w-48 h-48 relative overflow-hidden rounded-lg">
                <Image
                  src='/block-4.jpg'
                  alt="display"
                  // width={170}
                  // height={170}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className='home-box-images object-cover object-center'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row mt-48 mb-48 mx-64 justify-center items-center'>
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
        <div className='relative  -mt-16 w-1/2'>
          <h1 className='text-5xl font-medium text-[#2D3D33]'>Sustainability Is More Than A Goal – It's Our Mission</h1>
          <p className='text-2xl font-normal text-[#232323] mt-8'>
            We're dedicated to revolutionizing the way we power our world. Our commitment to a greener tomorrow drives us to provide innovative and sustainable energy solutions that make a real difference. Join us in the journey towards a cleaner, more vibrant planet.
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

      <div className='mx-64'>
        <div className='flex flex-row justify-between m-auto'>
          <div className='text-center items-center justify-start'>
            <h1 className='text-4xl font-semibold text-[#2d3d33]'>Our Services</h1>
          </div>
          <div className='flex items-center justify-end'>
            <Button
              title='Discover More'
              variant='btn_black'
            />
          </div>
        </div>

        <div className='mt-14 flex flex-row'>
          <div className='w-[100%] h-[300px] '>
            <ServiceNavigator
              title="Energy Storage Solutions"
              content='We believe that technology design are revolutionizing brand experiences.'
              img="/service-1.svg"
            />
          </div>
          <div className='w-[100%] h-[300px] '>
            <ServiceNavigator
              title="Solar Panel Installation"
              content='We believe that human-centered design are revolutionizing brand experiences.'
              img="/service-2.svg"
            />
          </div>
          <div className='w-[100%] h-[300px] '>
            <ServiceNavigator
              title="Wind Turbine Installation"
              content='Reduce your capital and operating costs, while modernizing your IT.'
              img="/service-3.svg"
            />
          </div>
        </div>
      </div>

      <div className='flex flex-row bg-bg-img-1 mb-24 mt-40' >
        <div className=' bg-[#2d3d33] rounded-br-[210px] w-3/5'>
          <div className=' ml-52 mb-20'>
            <h1 className='text-white text-4xl font-semibold mt-20'>
              Green Solutions
            </h1>
            <p className='text-white text-xl font-medium mt-6 w-3/4'>We're dedicated to revolutionizing the way we power our world. Our commitment to a greener tomorrow drives us to provide innovative and sustainable energy solutions that make a real difference. Join us in the journey towards a cleaner, more vibrant planet.
            </p>
            <div className='mt-10'>
              <Button
                title='Learn More'
                variant='btn_white'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mx-64 mb-32'>
        <div className='flex flex-row justify-between m-auto'>
          <div className='text-center items-center justify-start'>
            <h1 className='text-4xl font-semibold text-[#2d3d33]'>Our Projects</h1>
          </div>
          <div className='flex items-center justify-end'>
            <Button
              title='Discover More'
              variant='btn_black'
            />
          </div>
        </div>

        <div className='flex mt-8 cursor-pointer'>
          {/* Left */}
          <div className='flex-1'>
            <div>
              <Image
                src='/project-1.jpg'
                alt="project Image"
                width={550}
                height={200}
                className='rounded-3xl my-6'
              />
              <div>
                <h1 className='project-head'>Wind Farm</h1>
                <p className='project-para'>Wind Energy</p>
              </div>
            </div>
            <div>
              <div className='w-[85%]'>
                <Image
                  src='/project-2.jpg'
                  alt="project Image"
                  width={400}
                  height={200}
                  className='rounded-3xl my-6'
                />
              </div>
              <div>
                <h1 className='project-head'>Solar-Powered Home</h1>
                <p className='project-para'>Solar Energy</p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='flex-1 mx-8'>
            <div className='w-full h-[85%] relative'>
              <Image
                src='/project-3.jpg'
                alt="project Image"
                layout='fill'
                objectFit='cover'
                className='rounded-3xl '
              />
            </div>
            <div >
              <h1 className='project-head'>Large-Scale Farm</h1>
              <p className='project-para'>Solar Energy</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-64 mb-64'>
        <FAQ />
      </div>


    </div>


  );
};

export default Home;
