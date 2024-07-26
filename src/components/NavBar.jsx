import React, {useState } from 'react'
import calories from '../assets/icons/calories.png'
import { RiMenu3Fill } from "react-icons/ri";
import {redirect} from '../utils/Helper'

function NavBar() {
    const [toogle,setToogle] = useState(false)
    

    return (
        <div className=' relative flex justify-between py-5 items-center'>
            <div className='flex items-start cursor-pointer' onClick={()=> redirect('')} >
                <img src={calories} alt="MetaCal" className='w-7 mr-2' />
                <span className='h-fit text-2xl font-medium text-gray-700'>MetaCal</span>
            </div>
            
            <div className={`${toogle? 'Nav-toogle' : 'Nav'}`}>
                <span className='cursor-pointer hover:text-primaryColor duration-200' onClick={()=> redirect('')}>Home</span>
                <span className='cursor-pointer hover:text-primaryColor duration-200' onClick={()=> redirect('Calories')}>Calories</span>
                <span className='cursor-pointer hover:text-primaryColor duration-200' onClick={()=> redirect('Meals')}>Meals</span>
            </div>

            <div className='lg:flex md:flex hidden text-gray-700 w-36 justify-between items-center'>
                <span className='cursor-pointer hover:text-primaryColor duration-200'>Sign In</span>
                <span className= {`cursor-pointer text-primaryColor border-2 border-primaryColor px-3 rounded`}>Log In</span>
            </div>

            <RiMenu3Fill size="25" className='lg:hiiden md:hidden flex cursor-pointer' onClick={()=>{setToogle(!toogle);console.log(toogle)}}/>
        </div>
    )
}

export default NavBar