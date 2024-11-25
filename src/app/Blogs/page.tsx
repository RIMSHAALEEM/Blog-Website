import React from 'react'
import Image from 'next/image';
import { FaUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

import image1 from "@/app/public/image1.jpeg"
import image2 from "@/app/public/image2.jpeg"
import image3 from  "@/app/public/image3.jpeg"
import image4 from "@/app/public/image4.jpeg"
import image5 from "@/app/public/image5.jpeg"
import image6 from "@/app/public/image6.jpeg"
import image7 from "@/app/public/image7.jpeg"
import image8 from "@/app/public/image8.jpeg"
import image9 from "@/app/public/image9.jpeg"
import image10 from "@/app/public/image10.jpeg"
import image11 from "@/app/public/image11.jpeg"
import image12 from "@/app/public/image12.jpeg"

const Blogs = () => {
  return (
    <div>
       {/* regular post  */}
       <div className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-2  gap-4 mt-4">
           {/* post 1 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info" className="block rounded-md overflow-hidden">
                            <Image src={image1} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaUser />
                                        </i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaRegClock /></i>
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* post 2 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info1" className="block rounded-md overflow-hidden">
                            <Image src={image2} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaUser /></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaRegClock /></i>
                                    </span>
                                    July 01, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* post 3 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info-2" className="block rounded-md overflow-hidden">
                            <Image src={image3} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                    <i className=""><FaUser /></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                    <i className=""><FaRegClock /></i>
                                    </span>
                                    September 19, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* post 4 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info" className="block rounded-md overflow-hidden">
                            <Image src={image4} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                    <i className=""><FaUser /></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                    <i className=""><FaRegClock /></i>
                                    </span>
                                        November 20, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                         
                    {/* post 5 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info1" className="block rounded-md overflow-hidden">
                            <Image src={image5} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaUser /></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaRegClock /></i>
                                    </span>
                                    Dece,ber 13, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* post 6 */}

                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info-2" className="block rounded-md overflow-hidden">
                            <Image src={image6} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaUser /></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaRegClock /></i>
                                    </span>
                                    January 11, 2022
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* post 7 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info" className="block rounded-md overflow-hidden">
                            <Image src={image7} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaUser />
                                        </i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaRegClock /></i>
                                    </span>
                                    February 21, 2022
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* post 8 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info1" className="block rounded-md overflow-hidden">
                            <Image src={image8} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaUser /></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaRegClock /></i>
                                    </span>
                                    April 11, 2022
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* post 9 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info-2" className="block rounded-md overflow-hidden">
                            <Image src={image9} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                    <i className=""><FaUser /></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                    <i className=""><FaRegClock /></i>
                                    </span>
                                    May 20, 2022
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* post 10 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info" className="block rounded-md overflow-hidden">
                            <Image src={image10} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                    <i className=""><FaUser /></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                    <i className=""><FaRegClock /></i>
                                    </span>
                                    August 30, 2022
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* post 11 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info1" className="block rounded-md overflow-hidden">
                            <Image src={image11} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaUser /></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaRegClock /></i>
                                    </span>
                                    September 27, 2022
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* post 12 */}
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="/Blog-Info-2" className="block rounded-md overflow-hidden">
                            <Image src={image12} alt="image"
                                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2
                                    className="block text-xl font-semibold text-gray-700  hover:text-purple-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaUser /></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <i className=""><FaRegClock /></i>
                                    </span>
                                    November 26, 2022
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>




               
                    
                    

    </div>
  )
}

export default Blogs
