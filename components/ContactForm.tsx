import React from 'react'
import Button from './Button'

export default function ContactForm() {
    return (
        <div className="bg-[#f6f7f9] p-8 rounded-lg">
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Your name*"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    />
                    <input
                        type="email"
                        placeholder="Email*"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    />
                    <input
                        type="tel"
                        placeholder="Phone*"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    />
                    <input
                        type='text'
                        placeholder='Budget*'
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    >
                    </input>
                </div>

                <textarea
                    placeholder="Message*"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 h-40"
                />

                <div className='flex justify-center'>
                    <Button
                        title='Send Message'
                        variant='btn_black'
                    />
                </div>

            </form>
        </div>
    )
}
