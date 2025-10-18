
import React, { useState } from "react";
import { Link } from 'react-router-dom'







export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
 
 
 
  return (

    <>
    
{/* <nav className="bg-gray-800 shadow h-full max-h-1/4">
  <div className="container mx-auto px-4 py-10 flex justify-between items-center">
    <Link className="text-3xl font-bold text-white" to={'home'}>
      START FRAMEWORK
    </Link>

    <ul className="hidden md:flex space-x-8">
      <li>
        <Link  className="text-white font-bold hover:text-green-400 transition" to={'about'}>
          ABOUT
        </Link>
      </li>
      <li>
        <Link className="text-white font-bold hover:text-green-400 transition" to={'portfolio'}>
          PORTFOLIO
        </Link>
      </li>
      <li>
        <Link  className="text-white font-bold hover:text-green-400  transition" to={'contact'}>
          CONTACT
        </Link>
      </li>
    </ul>

    
    <button className="md:hidden text-white focus:outline-none">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</nav> */}



    <nav className="bg-gray-800 shadow py-8">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    
        <Link className="text-2xl font-bold text-white" to="/home">
          START FRAMEWORK
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              className="text-white font-bold hover:text-green-400 transition"
              to="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="text-white font-bold hover:text-green-400 transition"
              to="/portfolio"
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              className="text-white font-bold hover:text-green-400 transition"
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

   {/* ========================================================== */}
      {isOpen && (
        <ul className="md:hidden bg-gray-700 flex flex-col space-y-4 py-4 text-center">
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-white font-bold hover:text-green-400 transition"
              to="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-white font-bold hover:text-green-400 transition"
              to="/portfolio"
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-white font-bold hover:text-green-400 transition"
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      )}
    </nav>


    </>
  )
}
