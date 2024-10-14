import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { TbBellRinging } from "react-icons/tb";

// import pic from '../assets/green.webp';

// import { Link } from 'react-scroll';

function NavBar() {
    const [login,setLogin] = useState(true);
    

    const [menu,setMenu]=useState(false)
        const navItems=[
            {
                id:1,
                text:"Farmer"
            },
            {
                id:2,
                text:"Buyer"
            },
            {
                id:3,
                text:"Contacts"
            }
        ]
        
    return (
        <>
        <div className='max-w-screen-2xl h-16 container md:px-12 shadow-md fixed left-0 top-0 right-0 z-50 bg-white'>
            <div className='flex justify-between items-center h-16'>
                <div className='flex gap-8 md:gap-0 p-10 md:p-0 space-x-8 md:space-x-6  justify-center items-center  '>
                    {/* <img src={pic} className='w-18 h-14 rounded-full' alt="" /> */}
                    <h1 className='font-bold text-xl cursor-pointer'>
                    FARM<span className='text-green-500 text-2xl'>MART</span>
                    <p className='text-sm'>By Farmer Hands</p>
                    </h1>
                </div>

                {/* desktop nav bar */}

                <div>
                    <ul className='hidden md:flex space-x-10 text-xl gap-6 '>
                        {navItems.map(({id,text})=>(
                            <li className='font-bold hover:scale-105 hover:text-green-500 duration-150 cursor-pointer' key={id}>
                                {/* <Link to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                                >
                                {text}</Link>  */}
                                {text}
                            </li>
                        ))}
                    </ul>
                    
                    <div onClick={()=>setMenu(!menu)} className='md:hidden mr-5'>
                        {menu? <IoCloseSharp size={24} /> :<AiOutlineMenu size={24}/>  }
                    </div>
                </div>

                <div className='hidden md:flex items-center space-x-4 font-bold'>
                    <span className="mr-2 cursor-pointer"><TbBellRinging size={20}/></span>
                    <span className='w-15 p-2 px-4 border text-green-500 border-green-500 cursor-pointer'>Join</span>
                    <span className=''>|</span>
                    <span className='w-15 p-2 px-4 bg-green-500 text-white cursor-pointer'>Login</span>
                </div>

            </div>

            {/* mobile nav bar */}

            {
                menu && (

                <div className='h-screen max-w-screen bg-white '>
                
                    <ul className='md:hidden flex flex-col  space-y-3 text-xl items-center'>
                        <div className='flex py-8 gap-x-4 font-bold'>
                            <span className='p-2 px-4 border text-green-500 border-green-500 cursor-pointer'>Join</span>
                            <span className='p-2 px-4 bg-green-500 text-white cursor-pointer'>Login</span>
                        </div>
                        {navItems.map(({id,text})=>(
                            <li className='hover:scale-105 hover:text-green-500 duration-150 font-semibold cursor-pointer' key={id}>
                                {/* <Link
                                onClick={()=>setMenu(!menu)}
                                to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                                >
                                {text}</Link>  */}
                                {text}
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
