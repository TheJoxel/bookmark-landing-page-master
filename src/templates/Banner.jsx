import React from 'react'
import { GridWrapper } from '../modules/layout/GridWrapper'
import {Button} from '../modules/elements/Button'
import image from '../assets/images/illustration-hero.svg'
 

export const Banner = () => {
  return (
    <div className='wrapper-banner'>
        <div className='backg'></div>
        <GridWrapper>
            <div className='banner'>
                <div className='banner-r-mobile col-start-7 col-end-12'>
                    <img src={image} alt=""/>
                </div>
                <div className='banner-l col-span-6'>
                    <h1 className='title-banner col-span-5'>A Simple Bookmark Manager</h1>
                    <p className='description-banner col-span-6'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className='buttons-banner'>
                        <Button text="Get it on Chrome" className="color-blue width-166"/>
                        <Button text="Get it on Firefox" className="color-gray width-162"/>
                    </div>
                </div>
                <div className='banner-r col-start-7 col-end-12'>
                    <img src={image} alt="" className='banner-r-mobile-img'/>
                </div>
            </div>
        </GridWrapper>
    </div>
  )
}
