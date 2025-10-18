// use glassmorph if possible

// Add this directive at the very top of the file
"use client";

import { usePathname } from 'next/navigation';

// The NavLink component can now be simpler, without any hooks.
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

export default function Header() {
    // Get the current path inside the component that uses the links
    const pathname = usePathname();

    return (
        <header className="flex justify-between items-center py-6 bg-gray-900 mx-auto pl-28 pr-28">
          <NavLink href="/" className="bg-gray-800 px-6 py-3 rounded-full hover:bg-gray-700">
            <h1 className="text-md font-medium ">Nabil Rakaiza Abror</h1>
          </NavLink>
          <nav className="bg-gray-800 px-4 py-2 rounded-full flex items-center space-x-2">
            {/* The Home link should still be an exact match */}
            <NavLink href="/" active={pathname === '/'}>
              Home
            </NavLink>
            {/* Other links can use startsWith for nested routes */}
            <NavLink href="/projects" active={pathname.startsWith('/projects')}>
              Projects
            </NavLink>
            <NavLink href="/blogs" active={pathname.startsWith('/blogs')}>
              Blogs
            </NavLink>
            <NavLink href="/about-me" active={pathname.startsWith('/about-me')}>
              All About Me!
            </NavLink>
          </nav>
        </header>
    )
}