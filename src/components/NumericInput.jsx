import React from 'react'
import useUserDetails from '../hooks/useUserDetails';


function NumericInput(props) {
  const { updateUserDetails} = useUserDetails();
  const handleInput = (event)=>{
    const {name , value} = event.target;
    updateUserDetails({[name] : value})
  }
  return (
    <div className='flex items-center text-gray-700'>
        <input 
        type="text" 
        placeholder={props.default} 
        className='lg:w-16 md:w-16 sm:w-12 w-8 text-center border-2 border-transparent border-b-gray-600 outline-none py-1 '
        name={props.name}
        onChange={handleInput}/>
        <span className='lg:text-lg md:text-lg sm:text-sm text-ls'>{props.unity}</span>
    </div>
  )
}

export default NumericInput