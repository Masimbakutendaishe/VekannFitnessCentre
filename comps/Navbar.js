import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className=" sticky w-full top-0 z-50 shadow-lg flex flex-col justify-center items-center px-5 py-2.5 bg-white relative mr-10 md:flex-row md:items-center md:justify-between">
      {/* Logo and Home link on top for small screens */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-7">
        <a className="mr-auto ml-10 mb-2 md:mb-0 mx-auto">
          <Image src="/logo.png" alt="Logo" className="cursor-pointer" width={70} height={80} />
        </a>
        <nav >
          <ul className="relative grid grid-cols-2 md:flex md:flex-wrap md:justify-center md:gap-7 items-center m-0 font-bold">
            <li className="relative p-2.5 group">
              <Link
                href="/"
                className="text-green-800 text-base font-light relative group-hover:text-yellow-600 transition-colors duration-300"
              >
                PERSONAL TRAINING
                <span
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-900 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-yellow-600"
                ></span>
              </Link>
            </li>
            <li className="relative p-2.5 group">
              <Link
                href="/"
                className="text-green-800 text-base  font-light relative group-hover:text-yellow-600 transition-colors duration-300"
              >
                OUR TEAM
                <span
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-900 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-yellow-600"
                ></span>
              </Link>
            </li>
            <li className="relative p-2.5 group">
              <Link
                href="/"
                className="text-green-800 text-base  font-light relative group-hover:text-yellow-600 transition-colors duration-300"
              >
                SCHEDULE
                <span
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-900 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-yellow-600"
                ></span>
              </Link>
            </li>
            <li className="relative p-2.5 group">
              <Link
                href="/"
                className="text-green-800 text-base  font-light relative group-hover:text-yellow-600 transition-colors duration-300"
              >
                MEMBERSHIP
                <span
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-900 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-yellow-600"
                ></span>
              </Link>
            </li>
            <li className="relative p-2.5 group">
              <Link
                href="/"
                className="text-green-800 text-base font-light relative group-hover:text-yellow-600 transition-colors duration-300"
              >
                CONTACT 
                <span
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-900 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-yellow-600"
                ></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-4 md:mt-0">
        <button className="px-6 py-3 bg-green-900 text-yellow-600 font-semibold text-sm  border-2 border-yellow-600 rounded-sm hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300">
          JOIN NOW
        </button>
      </div>
    </header>
  )
}

export default Navbar;
