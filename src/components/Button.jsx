import React from 'react'

function Button(props) {
  return (
    <div>
      <span className= {`cursor-pointer text-${props.size} py-${props.py} text-${props.color} border-2 bg-${props.bg} border-blue-400 px-${props.px} rounded`}>{props.title}</span>
    </div>
    
  )
}

export default Button