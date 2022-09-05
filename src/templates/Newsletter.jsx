import React, { useState } from 'react'
import { GridWrapper } from '../modules/layout/GridWrapper'

export const Newsletter = () => {
    

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function handleOnSubmit(e){
        e.preventDefault()
        if (!isValidEmail(email)) {
            setError(true);
          } else {
            setError(false);
          }

    }
    function handleOnChange(e){
        setEmail(e.target.value)
    }


  return (
    <div className='wrapper-newsletter'>
        <GridWrapper>
            <div className='newsletter col-span-12'>
                <p className='p-newsletter'>35,000+ already joined</p>
                <h2 className='h2-newsletter'>Stay up-to-date with what we’re doing</h2>
                <form onSubmit={handleOnSubmit} className="form">
                    <input type="text" name="" id="" value={email} onChange={handleOnChange} className={`input-newsletter ${error ? "border-error" : "border-act"}`} placeholder='Enter your email address'/>
                    <input type="submit" className={`button color-red width-126 ${error ? "button-mobile-news" : "" }`} value="Contact Us"/>
                    { error && <div className='error'><span className='msg-error'>Whoops, make sure it’s an email</span></div>}
                </form>
            </div>
        </GridWrapper>
    </div>
  )
}
