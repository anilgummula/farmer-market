import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import pic from '../../public/green.webp';

import { Link } from 'react-scroll';

function NavBar() {

const [menu,setMenu]=useState(false)
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"Farmer"
        },
        {
            id:3,
            text:"Buyer"
        },
        {
            id:4,
            text:"Contacts"
        }
    ]
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-16 h-16 shadow-md fixed left-0 top-0 right-0 z-50 bg-white'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex p-20 md:p-0 space-x-8 md:space-x-6  justify-center items-center  '>
                <img src={pic} className='w-18 h-14 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>
                FARM<span className='text-green-500 text-2xl'>MART</span>
                <p className='text-sm'>By Farmer Hands</p>
                </h1>
            </div>

            {/* desktop nav bar */}
            <div>
                <ul className='hidden md:flex space-x-10 text-xl '>
                    {navItems.map(({id,text})=>(
                        <li className='font-semibold hover:scale-105 hover:text-green-500 duration-150 cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'
                            >
                            {text}</Link> 
                        </li>
                    ))}
                </ul>
                
               <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                {menu? <IoCloseSharp size={24} /> :<AiOutlineMenu size={24}/>  }
                </div>
            </div>
            <div className='hidden md:block space-x-4 font-bold'>
               <Link className='w-5 p-2 px-4 bg-green-500 text-white cursor-pointer'>Login</Link>
               <Link className=''>|</Link>
               <Link className='w-5 p-2 px-4 border text-green-500 border-green-500 cursor-pointer'>Join</Link>
            </div>

        </div>

        {/* mobile nav bar */}
        {
            menu && (

            <div className='bg-white'>
               
                <ul className='md:hidden flex flex-col h-screen items-center mt-10 space-y-3 text-xl'>
                    <div className='my-10 px-6 space-x-4 font-bold'>
                        <Link className='p-2 px-4 bg-green-500 text-white cursor-pointer'>Login</Link>
                        <Link className='p-2 px-4 border text-green-500 border-green-500 cursor-pointer'>Join</Link>
                    </div>
                    {navItems.map(({id,text})=>(
                        <li className='hover:scale-105 hover:text-green-500 duration-150 font-semibold cursor-pointer' key={id}>
                            <Link
                            onClick={()=>setMenu(!menu)}
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'
                            >
                            {text}</Link> 
                        </li>
                    ))}
                </ul>

            </div>
            )
        }


    </div>
    </>
    
  )

}

export default NavBar
