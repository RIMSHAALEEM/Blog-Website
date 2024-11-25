"use client";
import logo from "@/app/public/logo1.png"
import Image from "next/image";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


const Navbar = () : JSX.Element => {
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () : void => {
        setisClick(!isClick);
    };
  return (
    <div>
        <nav className='bg-purple-600 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <a href="/">
                            <Image src={logo}  width={180} height={100} alt="logo"></Image></a>
                            {/* <a href="/" className='text-white'>LOGO
                            </a> */}
                        </div>
                    </div>
                    
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <a href="/" className='text-white block font-bold hover:bg-white hover:text-black rounded-full  p-2'>Home
                            </a>

                            <a href="/Blogs" className='text-white font-bold block hover:bg-white hover:text-black rounded-full  p-2'>Blogs
                            </a>

                            <a href="/" className='text-white font-bold block hover:bg-white hover:text-black rounded-full  p-2'>Categories
                            </a>

                            <a href="/contact-us" className='text-white font-bold block hover:bg-white hover:text-black rounded-full  p-2'>Contact 
                            </a>

                            <div className="relative ml-auto">
                <span className="absolute left-3 top-2 text-sm text-gray-500">
                    <i className=""><FaSearch /></i>
                </span>
                <input type="text" 
                placeholder="search..."
                className="block w-full border-none rounded-3xl pl-11 pr-2 py-2 focus:outline-none bg-gray-100 text-sm text-gray-700 shadow-sm"/>
            </div>

                            <button><a href="/SignIn" className=' bg-yellow-400 text-white font-bold block hover:bg-white hover:text-black rounded-full  pl-4 pr-4 pt-2 pb-2'>SignIn
                            </a></button> 
                            
                              

                                                     
                        </div>
                    </div>
                    

                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white 
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={toggleNavbar}>
                            {isClick ? (
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
              </svg>
                            ) :(
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" className='text-white font-bold block hover:bg-white hover:text-black rounded-full  p-2'>Home
                            </a>

                            <a href="/Blogs" className='text-white font-bold block hover:bg-white hover:text-black rounded-full  p-2'>Blogs
                            </a>

                            <a href="/" className='text-white font-bold block hover:bg-white hover:text-black rounded-full  p-2'>Categories
                            </a>

                            <a href="/contact-us" className='text-white font-bold block hover:bg-white hover:text-black rounded-full  p-2'>Contact
                            </a>


                            <div className="relative ml-auto">
                <span className="absolute left-3 top-2 text-sm text-gray-500">
                    <i className=""><FaSearch /></i>
                </span>
                <input type="text" 
                placeholder="search..."
                className="block w-200 mb-5 border-none rounded-3xl pl-11 pr-2 py-2 focus:outline-none bg-gray-100 text-sm text-gray-700 shadow-sm"/>
            </div>


                            <button><a href="/SignIn" className=' bg-yellow-400 text-white font-bold block hover:bg-white hover:text-black rounded-full  pl-4 pr-4 pt-2 pb-2'>SignIn
                            </a></button>  

                             
                        

                    </div>
                </div>
            )}
        </nav>
      
    </div>
  );
};

export default Navbar;
