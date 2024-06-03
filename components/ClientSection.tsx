import React from 'react';
import Image from 'next/image';

type ClientProp = {
    avatarSrc: string;
    name: string;
    role: string;
}

const ClientCard = ({ avatarSrc, name, role }: ClientProp) => {
    return (
        <div>
            <div className='flex border p-8 rounded-full bg-white'>
                <div className='relative -mt-9 -ml-10'>
                    <Image src='/colon.svg' alt='colon' width={50} height={50} className='bg-[#b15d3d] rounded-full p-2' />
                </div>
                <Image src={avatarSrc} alt='avatar' width={100} height={24} className='rounded-full' />
                <div className='mx-8 justify-center m-auto'>
                    <h1 className='text-3xl font-semibold'>{name}</h1>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    );
};

export const ClientSection = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='text-2xl bg-[#e2d1bf] text-[#936a45] p-3 rounded-5xl mt-16'>Our Happy Client Stories</h1>
            </div>

            <div className='mx-64 text-center mt-8'>
                <span className='text-3xl font-semibold text-[#2c3b35]'>
                    "This energy management system has transformed how I interact with my home. Being able to control lights, appliances, and heating remotely has not only saved energy but also added convenience to my lifestyle."
                </span>
            </div>

            <div className='flex flex-row mt-8 py-8 justify-center gap-8'>
                <ClientCard avatarSrc='/avatar.png' name='David L.' role='Environmental Advocate' />
                <ClientCard avatarSrc='/avatar.png' name='Lisa B.' role='Sustainable Living Advocate' />
                <ClientCard avatarSrc='/avatar.png' name='Carlos S.' role='Community Organizer' />
            </div>
        </div>
    );
};
