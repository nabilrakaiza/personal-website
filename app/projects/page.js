// import { useState, useEffect } from 'react';
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

export default function ProjectPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content */}
        <main className="py-12">
          <h2 className="text-3xl font-bold">2025</h2>
          <div className="w-full h-px bg-gray-300 my-4" /> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Project Card */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/sample-foto.png" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">GrindHub</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Mobile Application</h3>
              <p className="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
              <div className="flex w-full gap-4">
                {/* <Image src = "/github-logo.svg" alt="GitHub Logo" className="w-6 h-6 mb-4"/> */}
                <Image width = {100} height = {100} src = "/youtube-logo.webp" alt="YouTube Logo" className="w-6 h-6 mb-4"/>
                <Image width = {100} height = {100} src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4"/>
              </div>
            </div>
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/sample-foto.png" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">GrindHub v2</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Mobile Application</h3>
              <p className="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
              <div className="flex w-full gap-4">
                <Image width = {100} height = {100} src = "/github-logo.svg" alt="GitHub Logo" className="w-6 h-6 mb-4"/>
                <Image width = {100} height = {100} src = "/youtube-logo.webp" alt="YouTube Logo" className="w-6 h-6 mb-4"/>
                <Image width = {100} height = {100} src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4"/>
              </div>
            </div>
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/sample-foto.png" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">GrindHub v3</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Mobile Application</h3>
              <p className="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
              <div className="flex w-full gap-4">
                <Image width = {100} height = {100} src = "/github-logo.svg" alt="GitHub Logo" className="w-6 h-6 mb-4"/>
                <Image width = {100} height = {100} src = "/youtube-logo.webp" alt="YouTube Logo" className="w-6 h-6 mb-4"/>
                {/* <Image src = "./Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4"/> */}
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>

          <h2 className="text-3xl font-bold mt-10">2024</h2>
          <div className="w-full h-px bg-gray-300 my-4" /> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/sample-foto.png" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">GrindHub</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Mobile Application</h3>
              <p className="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
              <div className="flex w-full gap-4">
                <Image width = {100} height = {100} src = "/github-logo.svg" alt="GitHub Logo" className="w-6 h-6 mb-4"/>
                {/* <Image src = "/youtube-logo.webp" alt="YouTube Logo" className="w-6 h-6 mb-4"/> */}
                {/* <Image src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4"/> */}
              </div>
            </div>
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/sample-foto.png" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">GrindHub v2</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Mobile Application</h3>
              <p className="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
              <div className="flex w-full gap-4">
                {/* <Image src = "/github-logo.svg" alt="GitHub Logo" className="w-6 h-6 mb-4"/> */}
                <Image width = {100} height = {100} src = "/youtube-logo.webp" alt="YouTube Logo" className="w-6 h-6 mb-4"/>
                {/* <Image src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4"/> */}
              </div>
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

