import React from 'react'
import Button from './Button'

export default function ContactForm() {
  return (
    <div className='rounded-lg bg-[#f6f7f9] p-4 md:p-8'>
      <form className='space-y-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <input
            type='text'
            placeholder='Your name*'
            className='w-full rounded-lg border border-gray-300 p-3 focus:border-gray-400 focus:outline-none md:p-4'
          />
          <input
            type='email'
            placeholder='Email*'
            className='w-full rounded-lg border border-gray-300 p-3 focus:border-gray-400 focus:outline-none md:p-4'
          />
          <input
            type='tel'
            placeholder='Phone*'
            className='w-full rounded-lg border border-gray-300 p-3 focus:border-gray-400 focus:outline-none md:p-4'
          />
          <input
            type='text'
            placeholder='Budget*'
            className='w-full rounded-lg border border-gray-300 p-3 focus:border-gray-400 focus:outline-none md:p-4'
          ></input>
        </div>

        <textarea
          placeholder='Message*'
          className='h-40 w-full rounded-lg border border-gray-300 p-4 focus:border-gray-400 focus:outline-none'
        />

        <div className='flex justify-center'>
          <Button title='Send Message' variant='btn_black' />
        </div>
      </form>
    </div>
  )
}
