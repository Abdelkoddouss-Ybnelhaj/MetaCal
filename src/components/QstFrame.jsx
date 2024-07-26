import React from 'react'
import useUserDetails from '../hooks/useUserDetails';

function QstFrame(props) {
  const {userInputs , updateValidUserInputs} = useUserDetails();
  return (
    <div 
      className={`relative col-span-${props.col} flex flex-col items-center border border-1 ${userInputs[props.name]? 'border-gray-500' : 'border-red-400'} rounded w-full  lg:p-5 md:p-5 p-4  `}
      onClick={()=> updateValidUserInputs({[props.name] : true})}
      >
        <span className='absolute bg-gray-800 text-white rounded-2xl w-8 py-1 text-center' style={{ top: '-18px' }}>{props.nb}</span>
        <span className='font-medium lg:text-lg md:text-lg sm:text-md text-ls pt-2'>{props.title}</span>
        <div className='pt-5'>
            {props.content}
        </div>
    </div>
  )
}

export default QstFrame