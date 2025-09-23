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
  const [role, setRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const rolesToRotate = ["Software Engineer", "ML Engineer", "Clash Royale Enjoyer", 
    "DSA @ NUS", "Rubik Cube Solver", "Sleep All The Time", "Love Chicken", "Searching an internship..."];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % rolesToRotate.length;
      const fullText = rolesToRotate[i];

      // Set the new text based on whether we are deleting or typing
      setRole(isDeleting ? fullText.substring(0, role.length - 1) : fullText.substring(0, role.length + 1));

      // Adjust typing speed
      setTypingSpeed(isDeleting ? 75 : 150);

      // If text is fully typed, pause, then start deleting
      if (!isDeleting && role === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } 
      // If text is fully deleted, move to the next role
      else if (isDeleting && role === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const ticker = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(ticker);
  }, [role, isDeleting, loopNum, rolesToRotate, typingSpeed]);

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="bg-gray-800 px-6 py-3 rounded-full">
            <h1 className="text-md font-medium">Nabil Rakaiza Abror</h1>
          </div>
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
              Hi! I'm Nabil
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-gray-400 mt-2 h-20 md:h-24 whitespace-nowrap">
              <span className="border-r-4 border-gray-400 pr-1 animate-pulse">{role}</span>
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
              I'm an undergraduate at National University of Singapore
              majoring in Data Science and Analytics with second major in
              Computer Science. I like to do ML/AI stuff and some software
              things too!
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
                Project
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
                Blogs
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
                About Me
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center ml-20">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
              <img
                src="./foto-saya.png"
                alt="Nabil Rakaiza Abror"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-8">
          <p>&copy; 2025 Nabil Rakaiza Abror.</p>
        </footer>
      </div>
    </div>
  );
}

