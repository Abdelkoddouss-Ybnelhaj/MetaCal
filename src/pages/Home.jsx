import React from 'react'
import Diet from '../assets/images/Diet.png'
import { IoMdArrowForward } from "react-icons/io";
import {redirect} from '../utils/Helper'

function Home() {
  return (
    <div className='lg:pt-10 md:pt-10 pt-2 flex justify-between sm:justify-center'>
      <div className='pt-20 lg:w-1/2 md:w-1/2 sm:w-full'>
        <div className='flex flex-col w-4/5 '>
          <span className='lg:text-4xl md:text-3xl font-medium pb-7 text-gray-700 text-4xl'>“Calculate your daily calorie needs and create customized meal plans.”</span>
          <span className='lg:text-xs text-ls text-gray-500 '>Achieve your health goals with our personalized nutrition plans tailored to your needs. Our expert-guided plans help you make informed dietary choices.</span>
        </div>
        
        <div className='flex pt-10 items-center'>
        <span className= {`cursor-pointer lg:text-md md:text-sm text-xs py-2 text-white bg-primaryColor lg:px-10 md:px-5 sm:px-5 px-3 rounded`} onClick={()=> redirect('Calories')}>Get Started</span>
          <div className='flex items-center hover:text-primaryColor duration-200  ' onClick={()=> redirect('Meals')}>
            <span className='pl-5 cursor-pointer pr-3 lg:text-md md:text-sm text-xs'>Explore Nutrition Plans </span>
            <IoMdArrowForward size="18"/>
          </div>
        </div>
      </div>

      <div className='w-1/2 lg:flex md:flex items-center justify-center hidden'>
        <img src={Diet} alt=""  className='object-cover w-5/6'/>
      </div>
    </div>
  )
}

export default Home