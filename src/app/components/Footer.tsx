import React from 'react'
import { FaFacebookF,FaYoutube, FaInstagram, FaTwitter,FaTiktok } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';

const footer = () => {
  return (
    <div>
      <footer className='bg-purple-600 py-8 px-10 text-white flex justify-around'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* 1 column text */}
            <div>
                <h3 className='text-xl font-bold mb-4'>Core Blogs</h3>
                <ul className='space-y-2 text-lg'>
                    <li>Programing Fundamentals</li>
                    <li>Web2 Using NextJS</li>
                    <li>Earn as You Learn</li>
                </ul>
            </div>
{/* 2nd column text */}
<div>
                <h3 className='text-xl font-bold mb-4'>Advanced AI Blogs</h3>
                <ul className='space-y-2 text-lg'>
                    <li>Web 3 and Metaverse</li>
                    <li>Cloud-Native Computing</li>
                    <li>Artificial Intelligence (AI) and Deep Learning</li>
                    <li>Ambient Computing and IoT</li>
                    <li>Genomics and Bioinformatics</li>
                    <li>Network Programmability and Automation</li>
                </ul>
            </div>

            {/* 3rd column */}
            <div>
            <h3 className='text-xl font-bold mb-4'>Social Links</h3>
            <div className='flex space-x-4 mb-4'>
               <Link href="https://www.youtube.com/"><FaFacebookF  className=' w-7 h-7 rounded-full bg-blue-800 text-white pt-1.5 pb-1.5'/></Link>
               <Link href="https://www.facebook.com/"><FaYoutube className=' w-7 h-7 rounded-full bg-red-600 text-white pt-1.5 pb-1.5' /></Link>
               <Link href="https://www.instagram.com/"><FaInstagram className=' w-7 h-7 rounded-full bg-pink-500 text-white pt-1.5 pb-1.5'/></Link>
               <Link href=""><FaTwitter className=' w-7 h-7 rounded-full bg-blue-500 text-white pt-1.5 pb-1.5' /></Link>
               <Link href="https://www.tiktok.com/login"><FaTiktok className=' w-7 h-7 rounded-full bg-black text-white pt-1.5 pb-1.5' /></Link>

            </div>
            <a href='mailto:rimshaaleem13@gmail.com' className='text-white underline flex  items-center gap-3 '>
            <AiOutlineMail className=' size-5 ' />
            rimshaaleem13@gmail.com</a>
           
            </div>
        </div>
      </footer>
    </div>
  )
}

export default footer
