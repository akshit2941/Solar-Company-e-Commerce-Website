"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from './Button';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface FormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormSubmitted(true); // Set formSubmitted state to true on successful submission
      } else {
        console.error('Error:', await response.json());
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className='rounded-lg bg-[#f6f7f9] p-4 md:p-8'>
      {!formSubmitted ? (
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name*'
              className='w-full rounded-lg border border-gray-300 p-3 focus:border-gray-400 focus:outline-none md:p-4'
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email*'
              className='w-full rounded-lg border border-gray-300 p-3 focus:border-gray-400 focus:outline-none md:p-4'
              required
            />
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Phone*'
              className='w-full rounded-lg border border-gray-300 p-3 focus:border-gray-400 focus:outline-none md:p-4'
              required
            />
            <input
              type='text'
              name='budget'
              value={formData.budget}
              onChange={handleChange}
              placeholder='Budget*'
              className='w-full rounded-lg border border-gray-300 p-3 focus:border-gray-400 focus:outline-none md:p-4'
            />
          </div>

          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Message*'
            className='h-40 w-full rounded-lg border border-gray-300 p-4 focus:border-gray-400 focus:outline-none'
          />

          <div className='flex justify-center'>
            <Button title='Send Message' variant='btn_black' />
          </div>
        </form>
      ) : (
        <div className='flex flex-row justify-center text-center p-8'>
          <h1 className='text-4xl mx-3'><IoIosCheckmarkCircleOutline /></h1>
          <p className='text-black text-4xl font-bold font-inter'>Thank You We&apos;ll Connect Soon!</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
