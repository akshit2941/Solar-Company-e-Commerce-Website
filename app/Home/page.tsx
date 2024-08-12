import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Button from '@/components/Button'
import { ServiceNavigator } from '@/components/ServiceNavigator'
import { FAQ } from '@/components/FAQ'
import { ClientStories } from '@/components/ClientStories'
import { NewsComponent } from '@/components/NewsComponent'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <div className='relative flex min-h-full w-full flex-col overflow-hidden pb-8 xl:pb-44'>
        <Navbar />
        <Image
          src='/home-bg.svg'
          alt='Background'
          layout='fill'
          objectFit='cover'
          className='absolute left-0 top-0 z-0 h-full w-full rounded-b-3xl bg-[#2f3c35]'
        />

        <div className='z-10 flex flex-grow flex-col items-center justify-center text-white lg:flex-row 2xl:mt-0'>
          <div className='mt-3 flex flex-1 flex-col items-center p-8 md:mt-0 lg:items-start xl:ml-12 2xl:ml-48'>
            <h1 className='text-center text-[2.5rem] font-bold text-white md:text-4xl lg:mb-4 md:text-left lg:text-5xl 2xl:text-[4.4rem]'>
              Go Green, Go Solar
            </h1>
            <p className='w-full text-center text-lg text-white md:mt-2 md:text-start md:text-lg lg:text-xl 2xl:text-[1.25rem]'>
              Take the first step towards a sustainable future with Aldex Energy. Save on energy bills and reduce your carbon footprint by switching to solar power. Join us in making the world a cleaner, brighter place. Go green, go solar!
            </p>
            <div className='mt-6'>
              <Link href='/contact'>
                <Button title='Get Started' variant='btn_white' />
              </Link>
            </div>
          </div>

          <div className='mt-2 flex flex-1 justify-center p-5 lg:mt-2 lg:justify-end 2xl:mr-64'>
            <div className='mt-4 grid grid-cols-2 items-center justify-center gap-x-3 gap-y-2 md:gap-x-12 md:gap-y-10 lg:mt-8 lg:gap-x-6 lg:gap-y-6'>
              <div className='relative h-[150px] w-[150px] -rotate-12 transform overflow-hidden rounded-xl sm:h-[200px] sm:w-[240px] md:h-[220px] md:w-[220px] lg:h-[200px] lg:w-[200px] 2xl:h-[210px] 2xl:w-[210px]'>
                <Image
                  src='/block-1.webp'
                  alt='Styled Image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='relative h-[150px] w-[180px] rotate-6 transform overflow-hidden rounded-xl sm:h-[200px] sm:w-[240px] md:h-[220px] md:w-[240px] lg:h-[220px] lg:w-[220px] 2xl:h-[240px] 2xl:w-[240px]'>
                <Image
                  src='/block-2.webp'
                  alt='Styled Image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='relative h-[140px] w-[170px] -rotate-6 transform overflow-hidden rounded-xl sm:h-[200px] sm:w-[240px] md:h-[210px] md:w-[240px] lg:h-[200px] lg:w-[200px] 2xl:h-[210px] 2xl:w-[210px]'>
                <Image
                  src='/block-3.webp'
                  alt='Styled Image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='relative h-[180px] w-[180px] rotate-2 transform overflow-hidden rounded-xl sm:h-[220px] sm:w-[220px] md:h-[250px] md:w-[250px] lg:h-[250px] lg:w-[250px] 2xl:h-[260px] 2xl:w-[260px]'>
                <Image
                  src='/block-4.webp'
                  alt='Styled Image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-16 mt-12 flex flex-col items-center justify-center md:mb-48 md:mt-48 lg:flex-row lg:mx-2 2xl:mx-64'>
        {/* Left Image */}

        <div className='w-full max-w-lg p-8 2xl:mx-auto 2xl:p-0'>
          <Image
            src='/Globe.webp'
            alt='photo'
            width={1400}
            height={1050}
            sizes='(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 80vw, (max-width: 1919px) 70vw, 60vw'
            className='image-style-solo rounded-3xl object-cover object-center'
          />
        </div>

        {/* Right Content */}
        <div className='relative mx-6 mt-10 lg:-m-10 lg:mx-2 lg:w-[85%] lg:-mt-10 2xl:mx-10 2xl:-mt-16 2xl:w-1/2'>
          <div>
            <h1 className='text-3xl font-semibold text-[#2D3D33] md:text-4xl lg:text-4xl 2xl:text-5xl'>
              Sustainability Is More Than A Goal – It&apos;s Our Mission
            </h1>
            <p className='mt-8 text-xl font-normal text-[#232323] md:text-xl lg:text-xl 2xl:text-2xl'>
              We&apos;re dedicated to revolutionizing the way we power our
              world. Our commitment to a greener tomorrow drives us to provide
              innovative and sustainable energy solutions that make a real
              difference. Join us in the journey towards a cleaner, more vibrant
              planet.
            </p>
          </div>

          <div className='relative mt-8 flex rounded-2xl bg-[#2c3b35] lg:w-full 2xl:w-full p-6 lg:mt-8 lg:-left-[20%] 2xl:-left-1/4'>
            <div className='flex-1 flex-col items-center text-center'>
              <h1 className='home-2-head'>
                384
              </h1>
              <p className='home-2-para'>
                Successful projects
              </p>
            </div>
            <div className='flex-1 flex-col items-center text-center'>
              <h1 className='home-2-head'>
                250+
              </h1>
              <p className='home-2-para'>
                Satisfied clients
              </p>
            </div>
            <div className='flex-1 flex-col items-center text-center'>
              <h1 className='home-2-head'>
                20+
              </h1>
              <p className='home-2-para'>
                Megawatt capacity
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-10 lg:mx-16 2xl:mx-64'>
        <div className='m-auto flex flex-col items-center justify-between md:flex-row'>
          <div className='items-center justify-start text-center'>
            <h1 className='text-4xl font-semibold text-[#2d3d33]'>
              Our Services
            </h1>
          </div>

          <div className='mt-8 flex items-center justify-center md:justify-end'>
            <Link href='/services'>
              <Button title='Discover More' variant='btn_black' />
            </Link>
          </div>
        </div>

        <div className='mt-14 flex flex-col gap-12 md:flex-row md:gap-0'>
          <div className='w-full flex-1'>
            <Link href='/services/service1'>
              <ServiceNavigator
                title='Solar Engineering'
                content='Harness innovative solar technology for smarter, more sustainable energy solutions.'
                img='/service-1.svg'
              />
            </Link>
          </div>
          <div className='w-full flex-1'>
            <Link href='/services/service2'>
              <ServiceNavigator
                title='Solar Procurement'
                content='Streamline your solar supply chain with efficiency and precision in every step.'
                img='/service-2.svg'
              />
            </Link>
          </div>
          <div className='w-full flex-1'>
            <Link href='/services/service3'>
              <ServiceNavigator
                title='Solar Construction'
                content='Optimize your energy infrastructure with cost-effective, cutting-edge construction.'
                img='/service-3.svg'
              />
            </Link>
          </div>
        </div>
      </div>


      <div className='mb-24 mt-40'>
        <div className='relative h-[300px] w-[100%] overflow-hidden md:hidden'>
          <Image
            src='/serviceContainer.webp'
            alt='Styled Image'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 transform transition-transform duration-500 hover:scale-105'
          />
        </div>
        <div className='flex flex-col bg-none md:bg-bg-img-1'>
          <div className='bg-[#2d3d33] md:w-3/5 md:rounded-br-[210px]'>
            <div className='mb-20 ml-12 2xl:ml-52'>
              <h1 className='mt-20 text-4xl font-semibold text-white'>
                Green Solutions
              </h1>
              <p className='mt-6 w-3/4 text-xl font-medium text-white'>
                We&apos;re dedicated to revolutionizing the way we power our
                world. Our commitment to a greener tomorrow drives us to provide
                innovative and sustainable energy solutions that make a real
                difference. Join us in the journey towards a cleaner, more
                vibrant planet.
              </p>
              <div className='mt-10'>
                <Link href='/services'>
                  <Button title='Learn More' variant='btn_white' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-32 md:mx-8 lg:mx-16 2xl:mx-64'>
        <div className='m-auto flex flex-col justify-between md:flex-row'>
          <div className='items-center justify-start text-center'>
            <h1 className='text-4xl font-semibold text-[#2d3d33]'>
              Our Projects
            </h1>
          </div>
          <div className='mt-12 flex items-center justify-center md:mt-0 md:justify-end'>
            <Link href='/projects'>
              <Button title='Discover More' variant='btn_black' />
            </Link>
          </div>
        </div>

        <div className='mt-8 flex cursor-pointer flex-col p-6 md:flex-row md:p-0'>
          {/* Left Column */}
          <div className='flex-1 md:mr-4'>
            <div>
              <Link href='/projects/projectPage2'>
                <div className='relative h-[250px] w-full overflow-hidden rounded-3xl md:h-[300px]'>
                  <Image
                    src='/project-1.jpg'
                    alt='Styled Image'
                    layout='fill'
                    objectFit='cover'
                    className='absolute inset-0 transform transition-transform duration-500 hover:scale-105'
                  />
                </div>
                <div>
                  <h1 className='project-head text-lg sm:text-xl'>Bharat Electronics Limited</h1>
                  <p className='project-para text-sm sm:text-base'>
                    400 kWh
                  </p>
                </div>
              </Link>
            </div>

            <div className='mt-8'>
              <Link href='/projects/projectPage3'>
                <div className='relative h-[250px] w-full overflow-hidden rounded-3xl md:h-[300px]'>
                  <Image
                    src='/project-2.jpg'
                    alt='Styled Image'
                    layout='fill'
                    objectFit='cover'
                    className='absolute inset-0 transform transition-transform duration-500 hover:scale-105'
                  />
                </div>
                <div>
                  <h1 className='project-head text-lg sm:text-xl'>
                    Metro Valley Projects Private Ltd.
                  </h1>
                  <p className='project-para text-sm sm:text-base'>
                      
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className='mt-8 flex-1 md:ml-4 md:mt-0'>
            <div className='h-[250px] w-full md:h-[700px]'>
              <Link href='/projects/projectPage5'>
                <div className='relative h-full w-full overflow-hidden rounded-3xl'>
                  <Image
                    src='/project-3.jpg'
                    alt='Styled Image'
                    layout='fill'
                    objectFit='cover'
                    className='absolute inset-0 transform transition-transform duration-500 hover:scale-105'
                  />
                </div>
                <div>
                  <h1 className='project-head text-lg sm:text-xl'>
                    Delhi Mumbai ExpressWay
                  </h1>
                  <p className='project-para text-sm sm:text-base'>
                    1.8 mWh
                  </p>
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

      <div className='mb-32 md:mx-8 lg:mx-16 2xl:mx-64'>
        <div className='m-auto flex flex-col justify-between md:flex-row'>
          <div className='items-center justify-center text-center md:justify-start'>
            <h1 className='text-4xl font-semibold text-[#2d3d33]'>Top News</h1>
          </div>
          <div className='mt-12 flex items-center justify-center md:mt-0 md:justify-end'>

            <Button title='Discover More' variant='btn_black' />
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
  )
}

export default Home
