import React from 'react'

function Result(props) {
  return (
    <div className='border border-1 rounded p-5 flex flex-col items-center'>
        <span className='text-2xl font-medium'>{props.title}</span>
        <img src={props.img} alt="" className='py-5 w-20'/>
        <span className='font-medium'>{props.desc}</span>
        <span className='text-2xl font-medium py-2'>{props.cal}</span>
        <p className='px-5 text-center text-sm'>{props.info}</p>
    </div>
  )
}

export default Result