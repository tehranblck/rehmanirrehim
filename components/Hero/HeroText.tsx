import Link from 'next/link';
import React from 'react';
import { FaRightLong } from 'react-icons/fa6';

interface HeroProps {
    title: string;
    about: string;
    buttonText: string;
}

const HeroText = ({ title, about, buttonText }: HeroProps) => {
    return (
        <div
            style={{ backdropFilter: 'blur(10px) brightness(0.7)' }}
            className="flex flex-col items-start space-y-4 sm:space-y-6 mr-44 mt-12p-6 sm:p-8 max-w-[90%] sm:max-w-[800px] rounded-xl mx-auto"
        >
            {/* Title */}
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
                {title}
            </h1>

            {/* About */}
            <p className="text-gray-200 text-base sm:text-lg md:text-xl">
                {about}
            </p>

            {/* Button */}
            <Link
                href="/about"
                className="group px-4 sm:px-6 py-2 sm:py-3 mt-4 flex items-center gap-2 bg-white bg-opacity-20 text-white rounded-lg backdrop-blur-md font-semibold shadow-md hover:bg-opacity-30 transition duration-300 ease-in-out"
            >
                {buttonText}
                <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                    <FaRightLong />
                </span>
            </Link>
        </div>
    );
};

export default HeroText;
