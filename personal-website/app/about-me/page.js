// "use client";

// import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

const NavLink = ({ href, children, className = "px-4 py-2 rounded-full text-sm font-medium transition-colors", active = false }) => (
    <a
      href={href}
      className={`${className} ${
        active
          ? 'bg-gray-700 text-white'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {children}
    </a>
  );

export default function HomePage() {

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content */}
        <main className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              About Me!
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mt-8">
            Hi! I’m Nabil and currently an undergraduate student at National University of Singapore. I study Data Science and Analytics with Second Major in Computer Science! <br/><br/>

In my free time, I usually like to play rubik cube (especially the 3x3 one), watch some anime, or just sleeping. Sometimes I also like to get a “heart attack” by watching PRX throw their rounds haha. 
            </p>
            
          </div>
        </main>

        <div className="w-full h-px bg-gray-300" /> 
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mt-15">
            Education
          </h2>
        <main className="flex flex-col md:flex-row items-center gap-15 pb-20 ml-10">
        <div className="h-120 w-1 bg-amber-300 mt-20" />
        <div className="md:w-1/2 text-center md:text-left"> 
            
            <div className='flex items-center w-full gap-10 my-20'> 
                <div className="flex-shrink-0 w-32">
                    <Image width = {100} height = {100} src = "/./nus-logo.png" alt="NUS Logo" className="object-cover"/>
                </div>
                
                <div className="flex-1 min-w-300 ">
                    <p className='text-2xl font-bold'>National University of Singapore</p>
                    <p className='italic'>Data Science and Analytics with Second Major in Computer Science</p>
                    <p>2024 - 2028</p>
                </div>
            </div>

            <div className='flex items-center w-full gap-10 my-20'> 
                <div className="flex-shrink-0 w-32">
                    <Image width = {100} height = {100} src = "/./ui-logo.png" alt="UI Logo" className="object-cover"/>
                </div>
                
                <div className="flex-1 min-w-300 ">
                    <p className='text-2xl font-bold'>University of Indonesia</p>
                    <p className='italic'>Information Systems</p>
                    <p>2023 - 2024</p>
                </div>
            </div>

            <div className='flex items-center w-full gap-10 mt-20'> 
                <div className="flex-shrink-0 w-32">
                    <Image width = {100} height = {100} src = "/./pd-logo.png" alt="PD Logo" className="object-cover"/>
                </div>
                
                <div className="flex-1 min-w-300 ">
                    <p className='text-2xl font-bold'>Pradita Dirgantara Highschool</p>
                    <p className='italic'>Natural Science</p>
                    <p>2020 - 2023</p>
                </div>
            </div>
        </div>
        </main>

        <div className="w-full h-px bg-gray-300" /> 
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mt-15">
            Experiences
          </h2>
        <main className="flex flex-col md:flex-row items-center gap-15 pb-20 ml-10">
        <div className="h-200 w-1 bg-amber-300 mt-20" />
        <div className="md:w-1/2 text-center md:text-left"> 
            <div className='flex items-center w-full gap-10 my-20'> 
                <div className="flex-shrink-0 w-32">
                    <Image width = {100} height = {100} src = "/./pinus-logo.png" alt="PINUS Logo" className="object-cover"/>
                </div>
                <div className="flex-1 min-w-300 ">
                    <p className='text-2xl font-bold'>Perhimpunan Indonesia NUS (PINUS)</p>
                    <p className='text-xl italic'>Senior Developer</p>
                    <p>September 2025 - June 2026</p>
                </div>
            </div>

            <div className='flex items-center w-full gap-10 my-20'> 
                <div className="flex-shrink-0 w-32">
                    <Image width = {100} height = {100} src = "/./nuansa-logo.png" alt="NUANSA Logo" className="object-cover"/>
                </div>
                <div className="flex-1 min-w-300 ">
                    <p className='text-2xl font-bold'>NUANSA Cultural Production</p>
                    <p className='text-xl italic'>Logistics and Welfare Executive</p>
                    <p>October 2024 - September 2025</p>
                </div>
            </div>

            <div className='flex items-center w-full gap-10 my-20'> 
                <div className="flex-shrink-0 w-32">
                    <Image width = {100} height = {100} src = "/./quantum-logo.png" alt="Quantum Logo" className="object-cover"/>
                </div>
                <div className="flex-1 min-w-300 ">
                    <p className='text-2xl font-bold'>Quantum Teknologi Nusantara</p>
                    <p className='text-xl italic'>Data Science Intern</p>
                    <p>May 2025 - July 2025</p>
                </div>
            </div>

            <div className='flex items-center w-full gap-10 my-20'> 
                <div className="flex-shrink-0 w-32">
                    <Image width = {100} height = {100} src = "/./cf-logo.png" alt="COMPFEST 16 Logo" className="object-cover"/>
                </div>
                <div className="flex-1 min-w-300 ">
                    <p className='text-2xl font-bold'>COMPFEST 16</p>
                    <p className='text-xl italic'>Data Analytics Dash Staff</p>
                    <p>lupa bang</p>
                </div>
            </div>

            <div className='flex items-center w-full gap-10 mt-20'> 
                <div className="flex-shrink-0 w-32">
                    <Image width = {100} height = {100} src = "/./betis-logo.png" alt="BETIS Logo" className="object-cover"/>
                </div>
                <div className="flex-1 min-w-300 ">
                    <p className='text-2xl font-bold'>BETIS Fasilkom UI</p>
                    <p className='text-xl italic'>Academic and Teaching Staff</p>
                    <p>lupa juga bang</p>
                </div>
            </div>
        </div>
        </main>


        <div className="w-full h-px bg-gray-300 mb-20" /> 
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Contact Me!
        </h2>
        <div className='flex flex-row bg-amber-300 items-center justify-between pl-20 pr-20 md:py-12 rounded-3xl my-10'>

            <a href="mailto:nabilrakaiza@example.com" rel="noopener noreferrer" target="_blank">
            <Image width = {100} height = {100} src="/./mail-logo.png" alt="Email Logo" className="w-20 h-20 mb-4"/>
            </a>

            <a href="https://www.instagram.com/nabilrakaiza" rel="noopener noreferrer" target="_blank">
            <Image width = {100} height = {100} src="/./ig-logo.png" alt="Instagram Logo" className="w-20 h-20 mb-4"/>
            </a>

            <a href="https://www.twitter.com/nabilrakaiza" rel="noopener noreferrer" target="_blank">
            <Image width = {100} height = {100} src="/./twitter-logo.png" alt="Twitter Logo" className="w-20 h-20 mb-4"/>
            </a>

            <a href="https://www.linkedin.com/in/nabilrakaiza" rel="noopener noreferrer" target="_blank">
            <Image width = {100} height = {100} src="/./linkedin-logo.png" alt="LinkedIn Logo" className="w-20 h-20 mb-4"/>
            </a>

            <a href="https://github.com/nabilrakaiza" rel="noopener noreferrer" target="_blank">
            <Image width = {100} height = {100} src="/./github-logo.svg" alt="GitHub Logo" className="w-20 h-20 mb-4"/>
            </a>

            <a href="https://www.youtube.com/@papeeerrr" rel="noopener noreferrer" target="_blank">
            <Image width = {100} height = {100} src="/./youtube-logo.webp" alt="YouTube Logo" className="w-20 h-20 mb-4"/>
            </a>
        </div>

        <div className="w-full h-px bg-gray-300 my-20" /> 
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Leave me a message!
        </h2>
        <p className='my-5 text-xl'>Sender (keep empty if u want it to be anonymous) (for future update, still not working)</p>
        <input type="text" className="bg-amber-200 w-full p-3 rounded-lg mb-4 text-black" placeholder="Your Name"/>
        <p className='my-5 text-xl'>Your message</p>
        <textarea className="bg-amber-200 w-full p-3 rounded-lg mb-4 text-black" rows="4" placeholder="Your Message"></textarea>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
            Send
        </button>


        {/* Footer */}
        <footer className="text-center text-gray-500 py-8">
          <p>&copy; 2025 Nabil Rakaiza Abror.</p>
        </footer>
      </div>
    </div>
  );
}