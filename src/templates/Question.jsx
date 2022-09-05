import React from 'react'
import { Acordeon } from '../modules/elements/Acordeon'
import { Button } from '../modules/elements/Button'
import { GridWrapper } from '../modules/layout/GridWrapper'

export const Question = () => {
  return (
    <div className='wrapper-question'>
        <GridWrapper>
            <div className='question col-span-12'>
                <h2 className='title-features'>Frequently Asked Questions</h2>
                <p className='description-features'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
                <Acordeon/>
                <Button text="More Info" className="button-question color-blue width-114"/>
            </div>
        </GridWrapper>
    </div>
  )
}
