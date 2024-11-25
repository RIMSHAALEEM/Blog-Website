import React from 'react'
import Image from 'next/image';
import img1 from "@/app/public/image6.jpg"
import img2 from "@/app/public/image4.jpg"
import img3 from "@/app/public/image7.jpg" 
import img4 from "@/app/public/image8.jpg"
import { FaRegFolder } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


const Hero = () => {
  return (
    <>
   {/* <nav className='bg-white shadow-sm font-roboto'></nav> */}

   <main className='py-12 bg-gray-100 min-h-screen'>
    {/* left side  section */}
    <div className='container mx-auto px-4 flex'>
      <div className='w-3/12 '>
       <div className="bg-white shadow-sm rounded-sm p-4">
         <h3 className='text-xl font-semibold text-gray-700 font-roboto mb-3'>Categories</h3>
         <div className='text-gray-700 space-y-2 font-semibold text-sm uppercase'>
          <a href="#" className='flex items-center  hover:text-yellow-500 transition '>
            <span className='mr-2'>
              <i className=''><FaRegFolder /></i>
            </span>
            <span>Beauti</span>
            <span className="font-normal ml-auto">(12)</span>
          </a>

          <a href="#" className='flex items-center  hover:text-yellow-500 transition '>
            <span className='mr-2'>
              <i className=''><FaRegFolder /></i>
            </span>
            <span>Business</span>
            <span className="font-normal ml-auto">(15)</span>
          </a>

          <a href="#" className='flex items-center  hover:text-yellow-500 transition '>
            <span className='mr-2'>
              <i className=''><FaRegFolder /></i>
            </span>
            <span>Fashion</span>
            <span className="font-normal ml-auto">(5)</span>
          </a>

          <a href="#" className='flex items-center  hover:text-yellow-500 transition '>
            <span className='mr-2'>
              <i className=''><FaRegFolder /></i>
            </span>
            <span>Food</span>
            <span className="font-normal ml-auto">(10)</span>
          </a>

          <a href="#" className='flex items-center  hover:text-yellow-500 transition '>
            <span className='mr-2'>
              <i className=''><FaRegFolder /></i>
            </span>
            <span>Learn</span>
            <span className="font-normal ml-auto">(3)</span>
          </a>

          <a href="#" className='flex items-center  hover:text-yellow-500 transition '>
            <span className='mr-2'>
              <i className=''><FaRegFolder /></i>
            </span>
            <span>Music</span>
            <span className="font-normal ml-auto">(7)</span>
          </a>

          <a href="#" className='flex items-center  hover:text-yellow-500 transition '>
            <span className='mr-2'>
              <i className=''><FaRegFolder /></i>
            </span>
            <span>Nature</span>
            <span className="font-normal ml-auto">(3)</span>
          </a>

          <a href="#" className='flex items-center  hover:text-yellow-500 transition '>
            <span className='mr-2'>
              <i className=''><FaRegFolder /></i>
            </span>
            <span>People</span>
            <span className="font-normal ml-auto">(5)</span>
          </a>

          <a href="#" className='flex items-center  hover:text-yellow-500 transition '>
            <span className='mr-2'>
              <i className=''><FaRegFolder /></i>
            </span>
            <span>Sports</span> 
            <span className="font-normal ml-auto">(15)</span>
          </a>

          <a href="#" className='flex items-center  hover:text-yellow-500 transition '>
            <span className='mr-2'>
              <i className=''><FaRegFolder /></i>
            </span>
            <span>Technology</span>
            <span className="font-normal ml-auto">(18)</span>
          </a>



        </div>
         </div>

         {/* Related posts section  */}
         <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
         <h3 className='text-xl font-semibold text-gray-700 font-roboto mb-3'>Related Posts</h3>
         {/* post 1 */}
          <a href="#" className='flex group mb-3'>
            <div className=' flex-shrink-0'>
              <Image src={img1} width={120} height={14} alt="img" className='rounded object-cover'></Image>
            </div>
            <div className="flex-grow pl-3">
              <h5 className='text-md leading-5 font-roboto font-medium group-hover:text-yellow-500 transition'>
                Team Bithose geared up to attend Blockchain
              </h5>
              <div className='flex text-gray-400 text-sm items-center mt-1'>
                <span className='mr-1 text-lg'>
                  <i><CiClock2 /></i>
                 
                </span>
                June 11,2021
              </div>
              
            </div>
          </a>

          {/* post 2 */}
          <a href="#" className='flex group mb-3'>
            <div className=' flex-shrink-0'>
              <Image src={img2} width={120} height={14} alt="img" className='rounded object-cover'></Image>
            </div>
            <div className="flex-grow pl-3">
              <h5 className='text-md leading-5 font-roboto font-medium group-hover:text-yellow-500 transition'>
              Cloud computing is the delivery of computing services
              </h5>
              <div className='flex text-gray-400 text-sm items-center mt-1'>
                <span className='mr-1 text-lg'>
                  <i><CiClock2 /></i>
                 
                </span>
                August 18,2021
              </div>
              
            </div>
          </a>

          {/* post 3 */}
          <a href="#" className='flex group'>
            <div className=' flex-shrink-0'>
              <Image src={img3} width={120} height={14} alt="img" className='rounded object-cover'></Image>
            </div>
            <div className="flex-grow pl-3">
              <h5 className='text-md leading-5 font-roboto font-medium group-hover:text-yellow-500 transition'>
              Artificial intelligence (AI) is the simulation of human intelligence in machines
              </h5>
              <div className='flex text-gray-400 text-sm items-center mt-1'>
                <span className='mr-1 text-lg'>
                  <i><CiClock2 /></i>
                 
                </span>
                November 09,2021
              </div>
              
            </div>
          </a>

        
         </div>


      </div>
      {/* div for middle  portion */}
      <div className='w-6/12 bg-white py-12 mx-6'>
        <div className='flex justify-between bg-white px-3 py-2 items-center rounded-sm mb-4'>
          <h5 className='text-base uppercase font-semibold font-roboto'>Business</h5>
          <a href="#" className='text-white bg-yellow-500 px-3 py-1 rounded-sm uppercase text-sm hover:text-purple-400 transition border  border-purple-500'>See More</a>
        </div>

        <div className='bg-white shadow-sm rounded-sm '>
          <a href="#" className='overflow-hidden block'>
            <Image className="object-cover rounded transform hover:scale-110 transition duration-500" src={img4} width={1000} height={96} alt="image"></Image>
          </a>
          <div className='p-4'>
            <a href="#">
              <h2 className='text-2xl font-semibold text-gray-700 font-roboto hover:text-gray-500 transition'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae, molestias asperiores 
                veniam nemo quam eaque amet delectus, ipsa enim dolorum quidem dolore at iusto dignissimos ipsam, 
                unde nihil. Voluptatem.
              </h2>
            </a>
            <p className='text-gray-500 text-sm mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi adipisci, architecto tenetur, ut velit 
              nemo obcaecati maiores illo, cum amet dicta. Impedit perferendis quibusdam consequuntur eveniet? Quaerat
              laudantium quidem optio.
            </p>

            <div className='flex mt-2 space-x-5'>
              <div className='flex items-center text-gray-400 text-sm'>
                <span className='mr-2 text-lg'>
                  <i><CiUser />
                  </i>
                </span>
                Blogging Tips
              </div>

              <div className='flex items-centertext-gray-400 text-sm'>
              <div className='flex items-center text-gray-400 text-sm'>
                <span className='mr-2 text-lg'>
                  <i><CiClock2 />
                  </i>
                </span>
              December 10,2022
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 mt-4'>
         <div className='bg-white p-4 shadow-sm rounded-sm'>
          <a href="#" className='overflow-hidden block'>
            <Image className="object-cover rounded transform hover:scale-110 transition duration-500" src={img2} width={300} height={60} alt="image"></Image>
          </a>
          <div className='mt-3'>
          <a href="#">
              <h2 className=' text-xl font-semibold text-gray-700 font-roboto hover:text-gray-500 transition'>
                Lorem ipsum dolor sit 
               
              </h2>
            </a>
            <div className='flex mt-2 space-x-5'>
              <div className='flex items-center text-gray-400 text-sm'>
                <span className='mr-2 text-lg'>
                  <i><CiUser />
                  </i>
                </span>
                Blogging Tips
              </div>

              <div className='flex items-centertext-gray-400 text-sm'>
              <div className='flex items-center text-gray-400 text-sm'>
                <span className='mr-2 text-lg'>
                  <i><CiClock2 />
                  </i>
                </span>
              December 10,2022
              </div>
              </div></div>
       </div>

          
          


          </div>
        </div>
      </div>
      {/* right side section  */}
      <div className='w-3/12 bg-white py-12 '>
      </div>
    </div>
   </main> 
  </>
  )
}

export default Hero
