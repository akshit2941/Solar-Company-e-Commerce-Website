"use client";
import React, { useState } from 'react';
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
        <div onClick={onClick} className={`cursor-pointer rounded-full border  ${isSelected ? 'bg-[#f6f7f9] border-black' : 'bg-white'}`}>
            <div className='flex border p-6 rounded-full'>
                <div className='relative -mt-9 -ml-10'>
                    <Image src='/colon.svg' alt='colon' width={50} height={50} className='bg-[#b15d3d] rounded-full p-2' />
                </div>
                <Image src={avatarSrc} alt='avatar' width={100} height={24} className='rounded-full' />
                <div className='mx-4'>
                    <h1 className='text-3xl font-semibold'>{name}</h1>
                    <p className='text-xl font-normal'>{role}</p>
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

    const clients = [
        {
            avatarSrc: '/avatar-1.jpg',
            name: 'David L.',
            role: 'Environmental Advocate',
            story: 'This energy management system has transformed how I interact with my home. Being able to control lights, appliances, and heating remotely has not only saved energy but also added convenience to my lifestyle.'
        },
        {
            avatarSrc: '/avatar-2.jpg',
            name: 'Lisa B.',
            role: 'Sustainable Living Advocate',
            story: 'The system has not only reduced our energy bills but also taught our family about sustainable living. It’s a win-win!'
        },
        {
            avatarSrc: '/avatar.png',
            name: 'Carlos S.',
            role: 'Community Organizer',
            story: 'Implementing this system in our community has shown significant energy savings and increased awareness about energy conservation.'
        }
    ];

    const handleClientClick = (client: typeof clients[0]) => {
        setSelectedClientStory(client);
        setSelectedClient(client.name);
    };

    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='text-2xl bg-[#e2d1bf] text-[#936a45] p-3 rounded-5xl mt-16'>Our Happy Client Stories</h1>
            </div>

            <div className='mx-64 text-center mt-12 h-[120px]'>
                <span className='text-3xl font-semibold text-[#2c3b35]'>
                    {selectedClientStory.story}
                </span>
            </div>

            <div className='flex flex-row mt-8 py-8 justify-center gap-8'>
                {clients.map((client, index) => (
                    <ClientCard
                        key={index}
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
