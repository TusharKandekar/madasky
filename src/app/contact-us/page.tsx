"use client";
import { useState } from 'react';
import axios from 'axios'; // Make sure to install axios if you haven't already
import AboutNavbar from '@/components/Header/AboutNavbar';
import Footer from '@/components/Footer';
import BaseURL from '@/components/BaseUrl';



export default function ContactUs() {
    // State to manage form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // State to manage submission status
    const [status, setStatus] = useState('');

    // Handle input changes
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://biomaxcloud.xyz/api/send-email`, formData);
            setStatus('success');
            console.log('Email sent successfully:', response.data);
            // alert(response.data.message);
        } catch (error) {
            setStatus('error');
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        }
    };

    return (
        <>
            <AboutNavbar />
            <div className='w-full min-h-screen px-4 py-20 mt-10 bg-gray-100 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-7xl'>
                    <div className='mb-12 overflow-hidden bg-white shadow-2xl rounded-3xl'>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className='p-8 md:p-12'>
                                <h2 className='mb-6 text-3xl font-extrabold text-gray-900'>Get in Touch</h2>
                                <form className='space-y-6' onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            placeholder='Enter your name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:primary'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            placeholder='Enter your email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:primary'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
                                        <textarea
                                            id='message'
                                            name='message'
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:primary'
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type='submit'
                                            className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-[#00548f] hover:bg-[#00548f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:primary'
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                    {status === 'success' && <p className='text-green-500'>Message sent successfully!</p>}
                                    {status === 'error' && <p className='text-red-500'>Failed to send message. Please try again.</p>}
                                </form>
                            </div>
                            <div className='flex flex-col justify-between p-8 bg-[#00548f] md:p-12'>
                                <div>
                                    <h3 className='mb-4 text-2xl font-bold text-white'>Contact Information</h3>
                                    <p className='mb-4 text-indigo-200'>Fill out the form and our team will get back to you within 24 hours.</p>
                                    <ul className='space-y-4'>
                                        <li className='flex items-center !text-gray-100'>
                                            <svg className='w-6 h-6 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path></svg>
                                            +91 7304424496
                                        </li>
                                        <li className='flex items-center !text-gray-100'>
                                            <svg className='w-6 h-6 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path></svg>
                                            info@madasky.com
                                        </li>
                                        <li className='flex items-center !text-gray-100'>
                                            <svg className='w-6 h-6 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path></svg>
                                            Hiranandani Estate, Thane, Maharashtra, India. 400607
                                        </li>
                                    </ul>
                                </div>
                                <div className='mt-8'>
                                    <h4 className='mb-4 text-xl font-semibold text-white'>Connect with us</h4>
                                    <div className='flex space-x-4'>
                                        {/* Add social media links or icons here if needed */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className='overflow-hidden bg-white shadow-2xl rounded-3xl'>
                        <div className='aspect-w-16 h-96'>
                            <iframe
                                className='w-full h-full rounded-b-3xl'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.474098876057!2d72.98240557525503!3d19.261738381981463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb2c4fa9f0ed%3A0xeb0d65ae9e3ec3bf!2sMADASKY%20Consulting!5e0!3m2!1sen!2sin!4v1723645490572!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
