import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   useEffect(() => {
   

    const handleScroll = () => {
      setMenuOpen(false);
    };

    
    window.addEventListener("scroll", handleScroll);

    return () => {
      
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 shadow-lg flex flex-col px-5 py-2.5 bg-white md:flex-row md:items-center md:justify-between">
      {/* Logo and Hamburger Menu */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="ml-2">
          <Image
            src="/logo.png"
            alt="Logo"
            className="cursor-pointer"
            width={70}
            height={80}
          />
        </Link>
        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-green-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navbar Menu */}
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } mt-4 md:mt-0 md:flex md:flex-row md:gap-7 md:static `}
      >
        <ul className="flex flex-col md:flex-row md:gap-7 items-center font-bold">
          {/* Map through links for different pages */}
          {[
            { name: 'PERSONAL TRAINING', link: '/PersonalTrainingPage' },
            { name: 'OUR TEAM', link: '/OurTeamPage' },
            { name: 'SCHEDULE', link: '/Schedule' },
            { name: 'MEMBERSHIP', link: '/MembershipPage' },
            { name: 'CONTACT', link: '/ContactPage' },
          ].map((item, index) => (
            <li key={index} className="relative p-2.5 group">
              <Link
                href={item.link}
                className="text-green-800 text-base font-light relative group-hover:text-yellow-600 transition-colors duration-300"
              >
                {item.name}
                <span
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-900 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-yellow-600"
                ></span>
              </Link>
            </li>
          ))}
          {/* Join Now Button in Dropdown */}
          <li className="mt-4 md:hidden">
            <Link href="/join-now">
              <button className="px-6 py-3 bg-green-900 text-yellow-600 font-semibold text-sm border-2 border-yellow-600 rounded-sm hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300">
                JOIN NOW
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Join Now Button for Larger Screens */}
      <div className="hidden md:block">
        <Link href="/join-now">
          <button className="px-6 py-3 bg-green-900 text-yellow-600 font-semibold text-sm border-2 border-yellow-600 rounded-sm hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300">
            JOIN NOW
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
