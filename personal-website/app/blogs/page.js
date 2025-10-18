// import { useState, useEffect } from 'react';

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
  
  export default function BlogsPage() {
    return (
      <div className="bg-gray-900 min-h-screen text-white font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white mb-8 text-2xl"><b>My blogs</b> (<i>still a template, cause I dont write that much</i>)</p>
            {/* Main Content */}
            <main className="py-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Blog Card */}
                    <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2 text-black">Y1S2 Module Review!</h3>
                        <h3 className="mb-2 text-gray-800 italic">April 2025</h3>
                        <p className="text-black mb-4">So basicaly I took 7 mods this sem, which are DSA1101, CS1231, ST2131, HSS1000, HSA1000
                        DTK1234, and ES1103. For my core mode, the grade is a little better than expected since I bombed the finals, but I will
                        still accept it! Then for the rest of the mods, I honestly doesn&rsquo;t really care on the grade that I will get since I have 5 SU 
                        left to use.</p>
                        <p className="text-black hover:text-gray-500">Read more...</p>
                    </div>

                    <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2 text-black">Y1S1 Module Review!</h3>
                        <h3 className="mb-2 text-gray-800 italic">December 2024</h3>
                        <p className="text-black mb-4">So basicaly I took 7 mods this sem, which are DSA1101, CS1231, ST2131, HSS1000, HSA1000
                        DTK1234, and ES1103. For my core mode, the grade is a little better than expected since I bombed the finals, but I will
                        still accept it! Then for the rest of the mods, I honestly doesn&rsquo;t really care on the grade that I will get since I have 5 SU 
                        left to use.</p>
                        <p className="text-black hover:text-gray-500">Read more...</p>
                    </div>

                    <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2 text-black">Y2S1 Module Review!</h3>
                        <h3 className="mb-2 text-gray-800 italic">December 2025</h3>
                        <p className="text-black mb-4">So basicaly I took 7 mods this sem, which are DSA1101, CS1231, ST2131, HSS1000, HSA1000
                        DTK1234, and ES1103. For my core mode, the grade is a little better than expected since I bombed the finals, but I will
                        still accept it! Then for the rest of the mods, who cares.</p>
                        <p className="text-black hover:text-gray-500">Read more...</p>
                    </div>

                    <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2 text-black">A little something about myself</h3>
                        <h3 className="mb-2 text-gray-800 italic">September 2025</h3>
                        <p className="text-black mb-4">So basicaly I took 7 mods this sem, which are DSA1101, CS1231, ST2131, HSS1000, HSA1000
                        DTK1234, and ES1103. For my core mode, the grade is a little better than expected since I bombed the finals, but I will
                        still accept it! Then for the rest of the mods, I honestly doesn&rsquo;t really care on the grade that I will get since I have 5 SU 
                        left to use.</p>
                        <p className="text-black hover:text-gray-500">Read more...</p>
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
  
  