'use client';
import React, { useEffect, useState } from 'react';

const MainPage: React.FC = () => {
    const title = "Maars Habitat at Berkeley";
    const [displayedText, setDisplayedText] = useState('');
    const typingSpeed = 100;

    useEffect(() => {
        let index = 0;

        const typeWriter = setInterval(() => {
            if (index < title.length) {
                setDisplayedText((prev) => prev + title.charAt(index));
                index++;
            } else {
                clearInterval(typeWriter);
            }
        }, typingSpeed);

        return () => clearInterval(typeWriter);
    }, []);

    return (
        <div className="bg-slate-400 min-h-screen flex flex-col items-center overflow-hidden">
            <div className="fixed top-40 left-1/2 transform -translate-x-1/2 text-center z-50">
                <h1 className="text-white text-7xl font-bold font-['Roboto']">
                    {displayedText}
                </h1>
            </div>
            <div className="relative w-75 h-screen bg-orange-100 bg-opacity-80 rounded-lg shadow-md z-50 flex flex-col items-center mt-[350px]">
                <p className="pt-10 font-bold text-4xl text-stone-950">Mission Statement:</p>
                <p className="text-xl px-10 justify-center break-normal text-center text-slate-700">
                Mars Habitat at Berkeley is UC Berkeley’s official student-run engineering and science Mars Habitat team. 
                Our purpose is to help establish a human presence on Mars, through building a community of everyone, including 
                makers, engineers, designers, aspiring astronauts. Our initial goal is to design, build, and test a 3D printed Mars 
                Habitat in a harsh environment that mimics Mars’, such as the Mojave Desert in California. In addition, we aim to construct said habitat autonomously, to show that the habitat can be built before astronauts arrive. Through group discussions, divisions (e.g. mechanical, electrical, etc.), and social events, Mars Habitat at Berkeley will foster a community of future builders in the space economy and Moon/Martian economy.
                <hr className='mt-10'></hr>
                </p>
                <hr></hr>
            </div>
        </div>
        
    );
};

export default MainPage;
