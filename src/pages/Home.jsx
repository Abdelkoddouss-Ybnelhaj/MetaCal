import React from 'react'
import Diet from '../assets/images/Diet.png'
import { IoMdArrowForward } from "react-icons/io";
import {redirect} from '../utils/RouteUtils'

function Home() {
  return (
    <div className='flex justify-between'>
      <div className='pt-28 '>
        <div className='flex flex-col w-4/5 '>
          <span className='text-3xl pb-7 text-gray-800'>“Calculate your daily calorie needs and create customized meal plans.”</span>
          <span className='text-xs text-gray-500 w-4/5'>Achieve your health goals with our personalized nutrition plans tailored to your needs. Our expert-guided plans help you make informed dietary choices.</span>
        </div>
        
        <div className='flex pt-10 items-center'>
        <span className= {`cursor-pointer text-md py-2 text-white bg-primaryColor px-10 rounded`} onClick={()=> redirect('Calories')}>Get Started</span>
          <div className='flex item-center hover:text-primaryColor duration-200' onClick={()=> redirect('Meals')}>
            <span className='pl-5 cursor-pointer pr-3'>Explore Nutrition Plans </span>
            <IoMdArrowForward size="25" />
          </div>
        </div>
      </div>

      <img src={Diet} alt=""  className='w-1/2'/>
    </div>
  )
}

export default Home