import React from 'react'
import dots from '../../assets/images/bg-dots.svg'
import { Button } from './Button'

export const Cards = ({navegator, title, version, className}) => {
  return (
    <div className={`card-wrapper ${className}`}>
        <img src={navegator} alt="" className='img-card-wrapper'/>
        <h3 className='title-card-wrapper'>{title}</h3>
        <p className='p-card-wrapper'>{version}</p>
        <img src={dots} alt="" className='i-card-wrapper'/>
        <Button text="Add & Install Extension" className="button-margin-card color-blue width-232"/>
    </div>
  )
}
