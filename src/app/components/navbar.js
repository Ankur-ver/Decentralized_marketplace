import React from 'react'
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

export default function Navbar() {
    return (
        <>
            <div className='border-b border-gray-500 h-14 box-border'>
                <div className='flex items-center justify-between'>
                    <div>
                        <Link href="/register" >
                            <button className='border-b border-black bg-red-600 text-white p-[3px] rounded-lg mt-3 ml-20'>Register</button>
                        </Link>
                        <Link href="/" >
                            <button className='border-b border-black bg-green-500 text-white p-[3px] rounded-lg mt-3 ml-20'>Home</button>
                        </Link>
                    </div>
                    <div className=' w-[530px] flex items-center mt-2 relative mr-[100px]' >
                        <input className=" w-[530px] border border-gray-600 rounded-lg h-10 " placeholder=" search vendors" type="text" />
                        <IoSearchOutline className='text-[24px] absolute right-4'/>
                    </div>
                    <div className='w-[150px] bg-blue-500 h-10 mr-3 flex text-[20px] border rounded-lg'>
                    <CgProfile className='mt-3  ml-6  hover:cursor-pointer'/>
                    <FaLinkedin  className='mt-3 ml-6 hover:cursor-pointer'/>
                    <FaFacebook  className='mt-3 ml-6 hover:cursor-pointer'/>
                    </div>
                </div>


            </div>
        </>
    )
}
