import React from 'react'
import useUserDetails from '../hooks/useUserDetails'


function Activity(props) {
  const { userDetails, updateUserDetails} = useUserDetails();
  const HandleActivity = (event)=>{
    const {name , value} = event.target;
    updateUserDetails({[name] : value})
  }

  return (
    <div className='flex flex-col items-center' >
        <img src={props.img} alt={props.img} className='lg:w-1/2 w-1/2'/>
        <button 
          className={`mt-5 cursor-pointer font-medium lg:text-lg md:text-sm text-xs ${userDetails["activityLevel"] === props.title? 'text-white bg-primaryColor' :'text-gray-700 bg-gray-100'  } lg:w-40 md:w-32 w-24 text-center py-2 rounded`}
          name={props.name} 
          onClick={HandleActivity}
          value={props.title}
          >{props.title}</button>
        <p className='w-2/3 lg:text-md md:text-sm text-xs  text-center font-medium mt-5'>{props.p}</p>
    </div>
  )
}

export default Activity