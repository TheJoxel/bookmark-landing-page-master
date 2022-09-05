import React from 'react'

export const Button = ({text="", className}) => {
  return (
    <button className={`button ${className}`}>{text}</button>
  )
}
