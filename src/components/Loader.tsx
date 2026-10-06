


"use client";
import React from "react";
import Image from "next/image";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-6 bg-white">

            <div className="relative h-20 w-80">

                <Image
                    src="/assets/images/logo2.png"
                    alt="logo"
                    className="object fill"
                    fill

                />
            </div>

            {/* Spinner SVG */}
            <svg
                className="animate-spin h-12 w-12 text-[#e43613]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                {/* <circle
                    className="opacity-100"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle> */}
                <path
                    className="opacity-100"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
            </svg>
        </div>
    );
};

export default Loading;

