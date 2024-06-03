import Image from 'next/image'
import React from 'react'


type NewsProp = {
    imageUrl: string,
    title: string,
    content: string,
}

const NewsCard = ({ imageUrl, title, content }: NewsProp) => {
    return (
        <div className='p-3'>
            <div className='overflow-hidden rounded-3xl'>
                <Image
                    src={imageUrl}
                    alt='news'
                    width={600}
                    height={50}
                    className='rounded-3xl transform transition duration-300 ease-in-out hover:scale-110'
                />
            </div>
            <div className='mt-8'>
                <h1 className='text-2xl font-semibold text-[#2c3b35] hover:text-[#87634a]'>{title}</h1>
                <p className='text-xl font-normal mt-2 text-[#2c3b35]'>{content}</p>
                <p className='underline text-xl text-[#87634a] mt-4 hover:text-[#2c3b35]' style={{ textUnderlineOffset: '8px' }}>
                    Read More
                </p>
            </div>
        </div>
    )
}

export const NewsComponent = () => {
    return (
        <div className='mt-8'>
            <div className='flex flex-row'>
                <NewsCard imageUrl='/news1.jpg' title='Eco-Friendly Innovations The Latest Advancements' content='The quest for a greener, more sustainable future has led to remarkable innovations in technology.' />
                <NewsCard imageUrl='/news3.jpg' title='Eco-Friendly Innovations The Latest Advancements' content='The quest for a greener, more sustainable future has led to remarkable innovations in technology.' />
                <NewsCard imageUrl='/news2.jpg' title='Eco-Friendly Innovations The Latest Advancements' content='The quest for a greener, more sustainable future has led to remarkable innovations in technology.' />

            </div>
        </div>
    )
}
