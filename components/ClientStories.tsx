'use client'
import React, { useState, useMemo } from 'react'
import Image from 'next/image'

type ClientProp = {
  avatarSrc: string
  name: string
  role: string
  onClick: () => void
  isSelected: boolean
}

const ClientCard = ({
  avatarSrc,
  name,
  role,
  onClick,
  isSelected
}: ClientProp) => {
  return (
    <div
      onClick={onClick}
      className={`transform cursor-pointer rounded-full border duration-300 hover:border-black hover:bg-[#f6f7f9] ${isSelected ? 'border-black bg-[#f6f7f9]' : 'bg-white'} flex items-center gap-4 p-4 transition-all`}
    >
      {/* <div className=' -mt-24'>
                <Image src='/colon.svg' alt='colon' width={35} height={30} className='bg-[#b15d3d] rounded-full p-2' />
            </div> */}
      <Image
        src={avatarSrc}
        alt='avatar'
        width={60}
        height={60}
        className='rounded-full'
      />
      <div>
        <h1 className='text-xl font-semibold md:text-2xl'>{name}</h1>
        <p className='text-sm font-normal text-[#a2672f] md:text-lg'>{role}</p>
      </div>
    </div>
  )
}

export const ClientStories = () => {
  const [selectedClientStory, setSelectedClientStory] = useState({
    story:
      'This energy management system has transformed how I interact with my home. Being able to control lights, appliances, and heating remotely has not only saved energy but also added convenience to my lifestyle.',
    name: 'David L.',
    role: 'Environmental Advocate'
  })

  const [selectedClient, setSelectedClient] = useState('David L.')

  const clients = useMemo(
    () => [
      {
        id: 1,
        avatarSrc: '/avatar-1.jpg',
        name: 'David L.',
        role: 'Environmental Advocate',
        story:
          '"This energy management system has transformed how I interact with my home. Being able to control lights, appliances, and heating remotely has not only saved energy but also added convenience to my lifestyle."'
      },
      {
        id: 2,
        avatarSrc: '/avatar-2.jpg',
        name: 'Lisa B.',
        role: 'Sustainable Living Advocate',
        story:
          'The system has not only reduced our energy bills but also taught our family about sustainable living. It’s a win-win!'
      },
      {
        id: 3,
        avatarSrc: '/avatar.png',
        name: 'Carlos S.',
        role: 'Community Organizer',
        story:
          'Implementing this system in our community has shown significant energy savings and increased awareness about energy conservation.'
      }
    ],
    []
  )

  const handleClientClick = (client: (typeof clients)[0]) => {
    setSelectedClientStory(client)
    setSelectedClient(client.name)
  }

  return (
    <div className='container mx-auto px-4'>
      <div className='flex justify-center'>
        <h1 className='mt-8 rounded-3xl bg-[#e2d1bf] p-3 text-xl text-[#936a45] md:mt-12 md:text-2xl lg:mt-16 lg:text-3xl'>
          Our Happy Client Stories
        </h1>
      </div>

      <div className='mx-4 mt-8 text-center md:mx-32 md:mt-10 lg:mx-64 lg:mt-12'>
        <span className='text-lg font-semibold text-[#2c3b35] md:text-xl lg:text-2xl'>
          {selectedClientStory.story}
        </span>
      </div>

      <div className='mt-8 flex flex-wrap justify-center gap-6 pb-10 md:mt-12 lg:mt-16'>
        {clients.map(client => (
          <ClientCard
            key={client.id}
            avatarSrc={client.avatarSrc}
            name={client.name}
            role={client.role}
            onClick={() => handleClientClick(client)}
            isSelected={client.name === selectedClient}
          />
        ))}
      </div>
    </div>
  )
}
