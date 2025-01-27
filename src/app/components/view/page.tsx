import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaRegClock } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";





import img1 from "@/app/public/image1.png"
import img2 from "@/app/public/image3.jpg"
import img3 from "@/app/public/image4.jpg"
import img4 from "@/app/public/image5.jpg"
import img5 from "@/app/public/image6.jpg"
import img6 from "@/app/public/image8.jpg"
import img7 from "@/app/public/image7.jpg"
const View = () => {
  return (
    <div>
       {/*  main */}
    <main className="pt-12 bg-gray-100 pb-12">
        <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
            {/*  left sidebar  */}
            <div className="w-3/12 hidden xl:block">
                 {/* categories  */}
                <div className="w-full bg-white shadow-sm rounded-sm p-4 ">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
                    <div className="space-y-2">
                        <a href="#"
                            className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition  hover:text-purple-500">
                            <span className="mr-2">
                                <i className=""><FaFolder /></i>
                            </span>
                            <span>Beauti</span>
                            <p className="ml-auto font-normal">(12)</p>
                        </a>
                        <a href="#"
                            className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition  hover:text-purple-500">
                            <span className="mr-2">
                                <i className=""><FaFolder /></i>
                            </span>
                            <span>Business</span>
                            <p className="ml-auto font-normal">(15)</p>
                        </a>
                        <a href="#"
                            className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition  hover:text-purple-500">
                            <span className="mr-2">
                                <i className=""><FaFolder /></i>
                            </span>
                            <span>Fashion</span>
                            <p className="ml-auto font-normal">(5)</p>
                        </a>
                        <a href="#"
                            className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition  hover:text-purple-500">
                            <span className="mr-2">
                                <i className=""><FaFolder /></i>
                            </span>
                            <span>Food</span>
                            <p className="ml-auto font-normal">(10)</p>
                        </a>
                        <a href="#"
                            className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition  hover:text-purple-500">
                            <span className="mr-2">
                                <i className=""><FaFolder /></i>
                            </span>
                            <span>Learn</span>
                            <p className="ml-auto font-normal">(3)</p>
                        </a>
                        <a href="#"
                            className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition  hover:text-purple-500">
                            <span className="mr-2">
                                <i className=""><FaFolder /></i>
                            </span>
                            <span>Music</span>
                            <p className="ml-auto font-normal">(7)</p>
                        </a>
                        <a href="#"
                            className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition  hover:text-purple-500">
                            <span className="mr-2">
                                <i className=""><FaFolder /></i>
                            </span>
                            <span>Nature</span>
                            <p className="ml-auto font-normal">(0)</p>
                        </a>
                        <a href="#"
                            className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition  hover:text-purple-500">
                            <span className="mr-2">
                                <i className=""><FaFolder /></i>
                            </span>
                            <span>People</span>
                            <p className="ml-auto font-normal">(13)</p>
                        </a>
                        <a href="#"
                            className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition  hover:text-purple-500">
                            <span className="mr-2">
                                <i className=""><FaFolder /></i>
                            </span>
                            <span>Sports</span>
                            <p className="ml-auto font-normal">(7)</p>
                        </a>
                        <a href="#"
                            className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition  hover:text-purple-500">
                            <span className="mr-2">
                                <i className=""><FaFolder /></i>
                            </span>
                            <span>Technology</span>
                            <p className="ml-auto font-normal">(17)</p>
                        </a>
                    </div>
                </div>

                 {/* random posts */}
                <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Random Posts</h3>
                    <div className="space-y-4">
                        <a href="#" className="flex group">
                            <div className="flex-shrink-0">
                                <Image src={img1} alt="image" className="h-14 w-20 rounded object-cover"/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h5
                                    className="text-md leading-5 block font-roboto font-semibold  transition group- hover:text-purple-500">
                                    Team Bitbose geared up to attend Blockchain
                                </h5>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-1 text-xs"><i className=""><FaRegClock /></i></span>
                                    June 11, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" className="flex group">
                            <div className="flex-shrink-0">
                                <Image src={img2} alt="image" className="h-14 w-20 rounded object-cover"/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h5
                                    className="text-md leading-5 block font-roboto font-semibold  transition group- hover:text-purple-500">
                                    After a Caribbean Hurricane, the Battle
                                </h5>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-1 text-xs"><i className=""><FaRegClock /></i></span>
                                    March 27, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" className="flex group">
                            <div className="flex-shrink-0">
                                <Image src={img3} alt="image" className="h-14 w-20 rounded object-cover"/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h5
                                    className="text-md leading-5 block font-roboto font-semibold  transition group- hover:text-purple-500">
                                    California sheriff’s deputy shot during ‘ambush’
                                </h5>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-1 text-xs"><i className=""><FaRegClock /></i></span>
                                    Aprile 17, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

             {/* Main content */}
            <div className="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">

                {/* <title  */}
                <div className="flex bg-white px-3 py-2 justify-between items-center rounded-sm mb-5">
                    <h5 className="text-base uppercase font-semibold font-roboto">BUSINESS</h5>
                    <a href="#"
                        className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-yellow-500 border border-purple-500 hover:text-purple-500 hover:bg-transparent transition">
                        see more
                    </a>
                </div>

                 {/* big post  */}
                <div className="rounded-sm overflow-hidden bg-white shadow-sm">
                    <a href="view.html" className="block rounded-md overflow-hidden">
                        <Image src={img7} alt="image"
                            className="w-full h-96 object-cover transform hover:scale-110 transition duration-500"/>
                    </a>
                    <div className="p-4 pb-5">
                        <a href="view.html">
                            <h2
                                className="block text-2xl font-semibold text-gray-700  hover:text-purple-500transition font-roboto">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iddo loremque, totam
                                architecto odit pariatur Lorem ips dolor.
                            </h2>
                        </a>

                        <p className="text-gray-500 text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio doloremque
                            placeat ipsa! Sequi, recusandae. In numquam similique molestiae error, magni velit suscipit
                            repudiandae itaqu....
                        </p>
                        <div className="mt-3 flex space-x-4">
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
                                June 11, 2021
                            </div>
                        </div>
                    </div>
                </div>

                 {/* regular post  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="#" className="block rounded-md overflow-hidden">
                            <Image src={img6} alt="image"
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
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="#" className="block rounded-md overflow-hidden">
                            <Image src={img5} alt="image"
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
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="#" className="block rounded-md overflow-hidden">
                            <Image src={img3} alt="image"
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
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                        <a href="#" className="block rounded-md overflow-hidden">
                            <Image src={img4} alt="image"
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
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

             {/* right sidebar  */}
            <div className="lg:w-3/12 w-full mt-8 lg:mt-0">
                {/* Social plugin  */}
                <div className="w-full bg-white shadow-sm rounded-sm p-4 ">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Social Plugin</h3>
                    <div className="flex gap-2">
                        <a href="#"
                            className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i className=""><FaFacebook /></i>
                        </a>
                        <a href="#"
                            className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i className=""><TiSocialTwitterCircular /></i>
                        </a>
                        <a href="#"
                            className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i className=""><AiFillInstagram /></i>
                        </a>
                        <a href="#"
                            className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i className=""><FaPinterest /></i>
                        </a>
                        <a href="#"
                            className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i className=""><TiSocialLinkedinCircular /></i>
                        </a>
                    </div>
                </div>

                 {/* Popular posts  */}
                <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Popular Posts</h3>
                    <div className="space-y-4">
                        <a href="#" className="flex group">
                            <div className="flex-shrink-0">
                                <Image src={img7} alt="image" className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h5
                                    className="text-md leading-5 block font-roboto font-semibold  transition group- hover:text-purple-500">
                                    Team Bitbose geared up to attend Blockchain
                                </h5>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-1 text-xs"><i className=""><FaRegClock /></i></span>
                                    June 11, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" className="flex group">
                            <div className="flex-shrink-0">
                                <Image src={img6} alt="image" className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h5
                                    className="text-md leading-5 block font-roboto font-semibold  transition group- hover:text-purple-500">
                                    After a Caribbean Hurricane, the Battle
                                </h5>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-1 text-xs"><i className=""><FaRegClock /></i></span>
                                    March 27, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" className="flex group">
                            <div className="flex-shrink-0">
                                <Image src={img5} alt="image" className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h5
                                    className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-purple-500">
                                    California sheriff’s deputy shot during ‘ambush’
                                </h5>
                                <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-1 text-xs"><i className=""><FaRegClock />
                                    </i></span>
                                    Aprile 17, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
         {/* tag 
                categories  */}
                <div className="w-full bg-white shadow-sm rounded-sm p-4  mt-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Tags</h3>
                    <div className="flex items-center flex-wrap gap-2">
                        <a href="#"
                            className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:text-purple-500 hover:text-white">Beauti</a>
                        <a href="#"
                            className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:text-purple-500 hover:text-white">Sports</a>
                        <a href="#"
                            className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:text-purple-500 hover:text-white">Business</a>
                        <a href="#"
                            className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:text-purple-500 hover:text-white">Politics</a>
                        <a href="#"
                            className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:text-purple-500 hover:text-white">Computer</a>
                        <a href="#"
                            className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:text-purple-500 hover:text-white">Coding</a>
                        <a href="#"
                            className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:text-purple-500 hover:text-white">Web
                            Design</a>
                        <a href="#"
                            className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:text-purple-500 hover:text-white">Web
                            App</a>
                    </div>
                </div>
            </div>

        </div>
    </main>

     {/* mobile menu  */}
    <div className="fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 z-10 opacity-0 invisible transition-all duration-500 xl:hidden" id="sidebar_wrapper">
        <div className="fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col transition-all duration-500 -left-80" id="sidebar">

            {/* search and menu  */}
            <div className="lg:hidden">
                 {/* searchbar  */}
                <div className="relative mx-3 mt-3 shadow-sm">
                    <span className="absolute left-3 top-2 text-sm text-gray-500">
                        <i className="fas fa-search"></i>
                    </span>
                    <input type="text"
                        className="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                        placeholder="Search"/>
                </div>
        
                 {/* navlink  */}
                <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-3 pt-3">Menu</h3>
                <div className="">
                    <a href="index.html"
                        className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-purple-500">
                        <span className="w-6">
                            <i className=""><IoIosHome /></i>
                        </span>
                        Home
                    </a>
                    <a href="#"
                        className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-purple-500">
                        <span className="w-6">
                            <i className=""><FaFileAlt /></i>
                        </span>
                        About
                    </a>
                    <a href="#"
                        className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-purple-500">
                        <span className="w-6">
                            <i className=""><FaPhone />
                            </i>
                        </span>
                        Contact
                    </a>
                </div>
                {/* navlinks end  */}
            </div>
    
            {/* categories  */}
            <div className="w-full mt-3 px-4 ">
                <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
                <div className="space-y-2">
                    <a href="#"
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-purple-500">
                        <span className="mr-2">
                            <i className=""><FaFolder /></i>
                        </span>
                        <span>Beauti</span>
                        <p className="ml-auto font-normal">(12)</p>
                    </a>
                    <a href="#"
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-purple-500">
                        <span className="mr-2">
                            <i className=""><FaFolder /></i>
                        </span>
                        <span>Business</span>
                        <p className="ml-auto font-normal">(15)</p>
                    </a>
                    <a href="#"
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-purple-500">
                        <span className="mr-2">
                            <i className=""><FaFolder /></i>
                        </span>
                        <span>Fashion</span>
                        <p className="ml-auto font-normal">(5)</p>
                    </a>
                    <a href="#"
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-purple-500">
                        <span className="mr-2">
                            <i className=""><FaFolder /></i>
                        </span>
                        <span>Food</span>
                        <p className="ml-auto font-normal">(10)</p>
                    </a>
                    <a href="#"
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-purple-500">
                        <span className="mr-2">
                            <i className=""><FaFolder /></i>
                        </span>
                        <span>Learn</span>
                        <p className="ml-auto font-normal">(3)</p>
                    </a>
                    <a href="#"
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-purple-500">
                        <span className="mr-2">
                            <i className=""><FaFolder /></i>
                        </span>
                        <span>Music</span>
                        <p className="ml-auto font-normal">(7)</p>
                    </a>
                    <a href="#"
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-purple-500">
                        <span className="mr-2">
                            <i className=""><FaFolder /></i>
                        </span>
                        <span>Nature</span>
                        <p className="ml-auto font-normal">(0)</p>
                    </a>
                    <a href="#"
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-purple-500">
                        <span className="mr-2">
                            <i className=""><FaFolder /></i>
                        </span>
                        <span>People</span>
                        <p className="ml-auto font-normal">(13)</p>
                    </a>
                    <a href="#"
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-purple-500">
                        <span className="mr-2">
                            <i className=""><FaFolder /></i>
                        </span>
                        <span>Sports</span>
                        <p className="ml-auto font-normal">(7)</p>
                    </a>
                    <a href="#"
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-purple-500">
                        <span className="mr-2">
                            <i className=""><FaFolder /></i>
                        </span>
                        <span>Technology</span>
                        <p className="ml-auto font-normal">(17)</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default View
