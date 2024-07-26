import React from 'react'

function Button(props) {
  return (
      <button className= {`cursor-pointer text-${props.size} text-${props.color} bg-gray-200`}>{props.title}</button>
  )
}

export default Button