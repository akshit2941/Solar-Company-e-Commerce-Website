"use client"
import Image from 'next/image';
import React, { useState } from 'react';

export const FAQ = () => {
    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);
    const [showDetails3, setShowDetails3] = useState(false);

    const toggleRotation = (faqNumber: number) => {
        if (faqNumber === 1) {
            setShowDetails1(!showDetails1);
        } else if (faqNumber === 2) {
            setShowDetails2(!showDetails2);
        } else if (faqNumber === 3) {
            setShowDetails3(!showDetails3);
        }
    };

    return (
        <div className='mx-12 lg:mx-18 2xl:mx-64'>
            <div>
                <span className='bg-[#e2d1bf] text-[#936a45] text-xl p-4 px-8 font-medium rounded-5xl'>FAQ</span>
            </div>

            <div className='bg-[#f6f7f9] rounded-3xl'>
                <div className='divide-y-2 ms-4 md:mx-8'>
                    <div className='p-4 md:p-8' onClick={() => toggleRotation(1)}>
                        <div className='flex flex-row items-center text-center'>
                            <div>
                                <h1 className={`text-xl lg:text-2xl xl:text-3xl font-semibold text-[#2e3c33] text-left ${showDetails1 ? 'text-[#a46433]' : ''} transition-colors duration-200`}>How can I make the switch to green energy? </h1>
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
                            <p className={`text-start font-normal text-base md:text-lg mt-2 w-[85%] ${showDetails1 ? 'opacity-100 max-h-[1000px] transition-all duration-1000 ease-in' : 'max-h-0 overflow-hidden transition-all duration-1000 ease-out'}`}>
                                Green energy solutions like solar panels and small wind turbines can be installed on residential properties. These systems can generate clean energy, reducing your electricity bills and carbon footprint.
                            </p>
                        </div>
                    </div>

                    <div className='p-4 md:p-8' onClick={() => toggleRotation(2)}>
                        <div className='flex flex-row items-center text-center'>
                            <div>
                                <h1 className={`text-xl lg:text-2xl xl:text-3xl font-semibold text-[#2e3c33] text-left ${showDetails2 ? 'text-[#a46433]' : ''} transition-colors duration-200`}>Are there financial incentives for using green energy?</h1>
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
                            <p className={`text-start font-normal text-base md:text-lg mt-2 w-[85%] ${showDetails2 ? 'opacity-100 max-h-[1000px] transition-all duration-1000 ease-in' : 'max-h-0 overflow-hidden transition-all duration-1000 ease-out'}`}>
                                Green energy solutions like solar panels and small wind turbines can be installed on residential properties. These systems can generate clean energy, reducing your electricity bills and carbon footprint.
                            </p>
                        </div>
                    </div>

                    <div className='p-4 md:p-8' onClick={() => toggleRotation(3)}>
                        <div className='flex flex-row items-center text-center'>
                            <div>
                                <h1 className={`text-xl lg:text-2xl xl:text-3xl font-semibold text-[#2e3c33] text-left ${showDetails3 ? 'text-[#a46433]' : ''} transition-colors duration-200`}>What are the benefits of wind energy?</h1>
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
                            <p className={`text-start font-normal text-base md:text-lg mt-2 w-[85%] ${showDetails3 ? 'opacity-100 max-h-[1000px] transition-all duration-1000 ease-in' : 'max-h-0 overflow-hidden transition-all duration-1000 ease-out'}`}>
                                Green energy solutions like solar panels and small wind turbines can be installed on residential properties. These systems can generate clean energy, reducing your electricity bills and carbon footprint.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default FAQ;
