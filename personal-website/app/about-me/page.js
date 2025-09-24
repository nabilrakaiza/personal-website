"use client";

import { useState, useEffect } from 'react';

const NavLink = ({ href, children, active = false }) => (
  <a
    href={href}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <button className="bg-gray-800 px-6 py-3 rounded-full hover:bg-gray-700">
            <h1 className="text-md font-medium ">Nabil Rakaiza Abror</h1>
          </button>
          <nav className="bg-gray-800 px-4 py-2 rounded-full flex items-center space-x-2">
            <NavLink href="#" active>
              Home
            </NavLink>
            <NavLink href="#">Projects</NavLink>
            <NavLink href="#">Blogs</NavLink>
            <NavLink href="#">All About Me!</NavLink>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              About Me!
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mt-8">
            Hi! I’m Nabil and currently an undergrad student @ NUS. I study Data Science and Analytics with sec major in computer science! <br/><br/>

In my free time, I usually like to play rubik cube (especially the 3x3 one), watch some anime, or just sleeping. Sometimes I also like to get a “heart attack” by watching PRX throw their rounds haha. 
            </p>
            
          </div>
        </main>

        <div className="w-full h-px bg-gray-300 my-4" /> 

        {/* Footer */}
        <footer className="text-center text-gray-500 py-8">
          <p>&copy; 2025 Nabil Rakaiza Abror.</p>
        </footer>
      </div>
    </div>
  );
}