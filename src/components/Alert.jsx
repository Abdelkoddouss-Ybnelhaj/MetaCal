import React from 'react'
import { MdErrorOutline } from "react-icons/md";

function Alert() {
  return (
    <div className='mt-5 flex bg-red-100 w-full pl-5 py-1 items-center'>
        <MdErrorOutline size="20"/>
        <span className='pl-2 text-sm text-gray-700'><b>Oops</b>, an error occurred! Please correct the selected fields.</span>
    </div>
  )
}

export default Alert