'use client';
import React, { useEffect, useState } from 'react';

const MainPage: React.FC = () => {
    const title = "Maars Habitat at Berkeley"; // Make sure there's no extra whitespace
    const [displayedText, setDisplayedText] = useState('');
    const typingSpeed = 100; // Typing speed in milliseconds

    useEffect(() => {
        let index = 0;

        const typeWriter = setInterval(() => {
            if (index < title.length) {
                setDisplayedText((prev) => prev + title.charAt(index)); // Use charAt to get one character
                index++;
            } else {
                clearInterval(typeWriter);
            }
        }, typingSpeed);

        return () => clearInterval(typeWriter);
    }, []); // Ensure the effect runs only once

    return (
        <div className="bg-gray-700 min-h-screen flex flex-col items-center overflow-hidden">
            <div className="fixed top-40 left-1/2 transform -translate-x-1/2 text-center z-50">
                <h1 className="text-white text-7xl font-bold font-['Roboto']">
                    {displayedText}
                </h1>
            </div>
        </div>
    );
};

export default MainPage;
