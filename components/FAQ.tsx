'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export const FAQ = () => {
  const [showDetails1, setShowDetails1] = useState(false)
  const [showDetails2, setShowDetails2] = useState(false)
  const [showDetails3, setShowDetails3] = useState(false)

  const toggleRotation = (faqNumber: number) => {
    if (faqNumber === 1) {
      setShowDetails1(!showDetails1)
    } else if (faqNumber === 2) {
      setShowDetails2(!showDetails2)
    } else if (faqNumber === 3) {
      setShowDetails3(!showDetails3)
    }
  }

  return (
    <div className='lg:mx-18 mx-6 2xl:mx-64'>
      <div>
        <span className='rounded-5xl bg-[#e2d1bf] p-4 px-8 text-xl font-medium text-[#936a45]'>
          FAQ
        </span>
      </div>

      <div className='rounded-3xl bg-[#f6f7f9]'>
        <div className='ms-4 divide-y-2 md:mx-8'>
          <div className='p-4 md:p-8' onClick={() => toggleRotation(1)}>
            <div className='flex flex-row items-center text-center'>
              <div>
                <h1
                  className={`text-left text-lg font-semibold text-[#2e3c33] lg:text-2xl xl:text-3xl ${showDetails1 ? 'text-[#a46433]' : ''} transition-colors duration-200`}
                >
                  How can I make the switch to green energy?{' '}
                </h1>
              </div>
              <Image
                src='/arrow-right.svg'
                alt='arrow'
                width={40}
                height={40}
                className={`ml-auto transform transition-transform duration-500 ease-in-out ${showDetails1 ? 'rotate-90' : 'rotate-0'}`}
              />
            </div>
            <div>
              <p
                className={`mt-2 w-[85%] text-start text-base font-normal md:text-lg ${showDetails1 ? 'max-h-[1000px] opacity-100 transition-all duration-1000 ease-in' : 'max-h-0 overflow-hidden transition-all duration-1000 ease-out'}`}
              >
                Green energy solutions like solar panels and small wind turbines
                can be installed on residential properties. These systems can
                generate clean energy, reducing your electricity bills and
                carbon footprint.
              </p>
            </div>
          </div>

          <div className='p-4 md:p-8' onClick={() => toggleRotation(2)}>
            <div className='flex flex-row items-center text-center'>
              <div>
                <h1
                  className={`text-left text-lg font-semibold text-[#2e3c33] lg:text-2xl xl:text-3xl ${showDetails2 ? 'text-[#a46433]' : ''} transition-colors duration-200`}
                >
                  Are there financial incentives for using green energy?
                </h1>
              </div>
              <Image
                src='/arrow-right.svg'
                alt='arrow'
                width={40}
                height={40}
                className={`ml-auto transform transition-transform duration-500 ease-in-out ${showDetails2 ? 'rotate-90' : 'rotate-0'}`}
              />
            </div>
            <div>
              <p
                className={`mt-2 w-[85%] text-start text-base font-normal md:text-lg ${showDetails2 ? 'max-h-[1000px] opacity-100 transition-all duration-1000 ease-in' : 'max-h-0 overflow-hidden transition-all duration-1000 ease-out'}`}
              >
                Green energy solutions like solar panels and small wind turbines
                can be installed on residential properties. These systems can
                generate clean energy, reducing your electricity bills and
                carbon footprint.
              </p>
            </div>
          </div>

          <div className='p-4 md:p-8' onClick={() => toggleRotation(3)}>
            <div className='flex flex-row items-center text-center'>
              <div>
                <h1
                  className={`text-left text-lg font-semibold text-[#2e3c33] lg:text-2xl xl:text-3xl ${showDetails3 ? 'text-[#a46433]' : ''} transition-colors duration-200`}
                >
                  What are the benefits of wind energy?
                </h1>
              </div>
              <Image
                src='/arrow-right.svg'
                alt='arrow'
                width={40}
                height={40}
                className={`ml-auto transform transition-transform duration-500 ease-in-out ${showDetails3 ? 'rotate-90' : 'rotate-0'}`}
              />
            </div>
            <div>
              <p
                className={`mt-2 w-[85%] text-start text-base font-normal md:text-lg ${showDetails3 ? 'max-h-[1000px] opacity-100 transition-all duration-1000 ease-in' : 'max-h-0 overflow-hidden transition-all duration-1000 ease-out'}`}
              >
                Green energy solutions like solar panels and small wind turbines
                can be installed on residential properties. These systems can
                generate clean energy, reducing your electricity bills and
                carbon footprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
