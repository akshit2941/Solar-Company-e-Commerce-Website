"use client"
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

type ClientProp = {
    avatarSrc: string;
    name: string;
    role: string;
    onClick: () => void;
    isSelected: boolean;
}

const ClientCard = ({ avatarSrc, name, role, onClick, isSelected }: ClientProp) => {
    return (
        <div onClick={onClick} className={`cursor-pointer mx-12 rounded-full border transform duration-300 hover:border-black hover:bg-[#f6f7f9]  ${isSelected ? 'bg-[#f6f7f9] border-black' : 'bg-white'}`}>
            <div className='flex border p-3 md:p-6 rounded-full'>
                <div className='relative -mt-9 -ml-10'>
                    <Image src='/colon.svg' alt='colon' width={50} height={50} className='bg-[#b15d3d] rounded-full p-2' />
                </div>
                <Image src={avatarSrc} alt='avatar' width={100} height={24} className='rounded-full' />
                <div className='mx-4'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>{name}</h1>
                    <p className='text-lg font-normal text-[#a2672f]'>{role}</p>
                </div>
            </div>
        </div>
    );
};

export const ClientStories = () => {
    const [selectedClientStory, setSelectedClientStory] = useState({
        story: "This energy management system has transformed how I interact with my home. Being able to control lights, appliances, and heating remotely has not only saved energy but also added convenience to my lifestyle.",
        name: 'David L.',
        role: 'Environmental Advocate'
    });

    const [selectedClient, setSelectedClient] = useState('David L.');
    const [storyAnimation, setStoryAnimation] = useState(false);

    const clients = useMemo(() => [
        {
            id: 1,
            avatarSrc: '/avatar-1.jpg',
            name: 'David L.',
            role: 'Environmental Advocate',
            story: '"This energy management system has transformed how I interact with my home. Being able to control lights, appliances, and heating remotely has not only saved energy but also added convenience to my lifestyle."'
        },
        {
            id: 2,
            avatarSrc: '/avatar-2.jpg',
            name: 'Lisa B.',
            role: 'Sustainable Living Advocate',
            story: 'The system has not only reduced our energy bills but also taught our family about sustainable living. It’s a win-win!'
        },
        {
            id: 3,
            avatarSrc: '/avatar.png',
            name: 'Carlos S.',
            role: 'Community Organizer',
            story: 'Implementing this system in our community has shown significant energy savings and increased awareness about energy conservation.'
        }
    ], []);

    const handleClientClick = (client: typeof clients[0]) => {
        setStoryAnimation(true);
        setTimeout(() => {
            setSelectedClientStory(client);
            setSelectedClient(client.name);
            setStoryAnimation(false);
        }, 500);
    };

    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='text-2xl bg-[#e2d1bf] text-[#936a45] p-3 rounded-5xl mt-16'>Our Happy Client Stories</h1>
            </div>

            <div className='mx-12 md:mx-64 text-center mt-12 h-[120px]'>
                <span className={`text-xl md:text-3xl font-semibold text-[#2c3b35] ${storyAnimation ? 'animate-slideIn' : ''}`}>
                    {selectedClientStory.story}
                </span>
            </div>

            <div className='flex flex-col md:flex-row py-5 mt-20 lg:mt-18 xl:mt-8 md:py-8 justify-center gap-8'>
                {clients.map((client) => (
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
    );
};
