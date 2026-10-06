
"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiPhone } from 'react-icons/fi';
import { X } from 'lucide-react';

const schema = yup.object().shape({
    companyName: yup.string().required('Company Name is required'),
    email: yup.string().email('Invalid email').required('Mail ID is required'),
    phone: yup
        .string()
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone No is required'),
    challenges: yup.string().required('Business Challenges is required'),
});

type FormData = {
    companyName: string;
    email: string;
    phone: string;
    challenges: string;
};

const Contact: React.FC = () => {
    const [showForm, setShowForm] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 3000));
            await fetch('https://biomaxcloud.xyz/api/send-email2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            reset();
            setShowForm(false);
        } catch (error) {
            console.error('Form submission failed', error);
        } finally {
            setIsSubmitting(false);
        }
    };






    return (
        <>
            {/* Floating Contact Icon */}
            {!showForm && (
                <button
                    onClick={() => setShowForm(true)}
                    className="fixed right-0 z-50 p-3 text-white bg-[#152869] rounded-l shadow-lg top-1/2 hover:bg-[#152869]/80 hover:cursor-pointer transition-all duration-300"
                >
                    <FiPhone size={24} />
                </button>
            )}

            {/* Contact Form Panel */}
            {showForm && (
                <div
                    className={`fixed top-1/2 right-0 -translate-y-1/2 w-[40vw] max-md:w-[80%] max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-l-2xl shadow-2xl z-50 border border-gray-300 transition-all duration-500 transform translate-x-0`}
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-[#152869]">Contact Us</h2>
                        <button onClick={() => setShowForm(false)} className="text-gray-600 hover:text-black hover:cursor-pointer">
                            <X />
                        </button>
                    </div>

                    {isSubmitting ? (
                        <div className="flex flex-col items-center justify-center h-40 text-[#152869]">
                            <svg className="w-8 h-8 mb-3 animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                            </svg>
                            <p className="text-sm font-medium">Submitting your response...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-sm">
                            <div>
                                <label className="block font-medium text-gray-700">Company Name <span className='text-red-800'>*</span></label>
                                <input
                                    {...register('companyName')}
                                    className="w-full p-2.5 mt-1 border rounded-md focus:outline-[#152869]"
                                    placeholder="Enter your company name"
                                />
                                {errors.companyName && <p className="text-xs text-red-600">{errors.companyName.message}</p>}
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">Email Id <span className='text-red-800'>*</span></label>
                                <input
                                    {...register('email')}
                                    className="w-full p-2.5 mt-1 border rounded-md focus:outline-[#152869]"
                                    placeholder="example@domain.com"
                                />
                                {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">Phone No. <span className='text-red-800'>*</span></label>
                                <div className="flex mt-1">
                                    <span className="px-3 py-2 text-sm text-gray-600 border border-r-0 rounded-l">+91</span>
                                    <input
                                        {...register('phone')}
                                        maxLength={10}
                                        className="w-full p-2 border rounded-r focus:outline-[#152869]"
                                        placeholder="1234567890"
                                    />
                                </div>
                                {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">Business Challenges <span className='text-red-800'>*</span></label>
                                <textarea
                                    {...register('challenges')}
                                    rows={3}
                                    className="w-full p-2.5 mt-1 border rounded-md focus:outline-[#152869]"
                                    placeholder="Briefly describe your business challenges..."
                                />
                                {errors.challenges && <p className="text-xs text-red-600">{errors.challenges.message}</p>}
                            </div>

                            <button type="submit" className="w-full py-2 text-white transition bg-[#152869] rounded hover:bg-[#152869]/80">
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            )}
        </>
    );
};

export default Contact;



