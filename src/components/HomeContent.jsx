import React from 'react'
import { GiWheat } from "react-icons/gi";
// import { GiShop } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { TfiArrowCircleRight } from "react-icons/tfi";

function HomeContent() {
  return (
    <>
        <div className='max-w-screen-2xl md:p-16 max-h-screen mt-16 flex flex-col md:flex-row justify-center '>
            <div className='md:w-72 w-60 md:m-16 mx-auto mt-10 p-5 rounded-md hover:cursor-pointer hover:z-20 hover:shadow-2xl bg-slate-300'>
                <h1 className='flex md:text-2xl text-xl font-bold justify-center p-2 border-b-2'>Farmer</h1>
                <p className='flex justify-center m-5'><GiWheat size={60} /></p>
                <p className=' justify-center text-center m-5 font-semibold'>Sell user crops here
                </p>
                <span className='flex justify-center hover:scale-110'><TfiArrowCircleRight size={24} /></span>
            </div>
            <div className='md:w-72 w-60 md:m-16 mx-auto mt-10 p-5 rounded-md hover:cursor-pointer hover:z-20 hover:shadow-2xl bg-green-400  '>
                <h1 className='flex md:text-2xl text-xl font-bold justify-center  p-2 border-b-2'>Shop</h1>
                <p className='flex justify-center m-5'><TiShoppingCart size={60} /></p>
                <p className='justify-center text-center m-5 font-semibold'>Buy from farmers </p>
                <span className=' flex justify-center hover:scale-110'><TfiArrowCircleRight size={24} /></span>
            </div>
        </div>
    </>
  )
}

export default HomeContent
