import React from 'react'
import calories from '../assets/icons/calories.png'
import {redirect} from '../utils/RouteUtils'

function NavBar() {


    return (
        <div className='flex justify-between py-5 items-center'>
            <div className='flex items-start' >
                <img src={calories} alt="MetaCal" className='w-7 mr-2' />
                <span className='h-fit text-2xl font-medium text-gray-700'>MetaCal</span>
            </div>
            
            <div className='flex w-48 justify-between text-gray-700 '>
                <span className='cursor-pointer hover:text-primaryColor duration-200' onClick={()=> redirect('')}>Home</span>
                <span className='cursor-pointer hover:text-primaryColor duration-200' onClick={()=> redirect('Calories')}>Calories</span>
                <span className='cursor-pointer hover:text-primaryColor duration-200' onClick={()=> redirect('Meals')}>Meals</span>
            </div>

            <div className='flex text-gray-700 w-36 justify-between items-center'>
                <span className='cursor-pointer hover:text-primaryColor duration-200'>Sign In</span>
                <span className= {`cursor-pointer text-primaryColor border-2 border-primaryColor px-3 rounded`}>Log In</span>
            </div>
        </div>
    )
}

export default NavBar