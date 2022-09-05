import React, { useState } from 'react'
import { GridWrapper } from '../modules/layout/GridWrapper'
import footer from '../assets/images/logo-bookmark-footer.svg'
import facebook from '../assets/images/icon-facebook.svg'
import facebookH from '../assets/images/icon-facebook-hover.svg'
import twitter from '../assets/images/icon-twitter.svg'
import twitterH from '../assets/images/icon-twitter-hover.svg'

export const Footer = () => {

    const [fb, setFb] = useState(false)
    const [tw, setTw] = useState(false)

    function hover(action){
        switch (action) {
            case 1:
                setTw(true)
                break;
            case 2:
                setTw(false)
                break
            case 3:
                setFb(true)
                break;
            case 4:
                setFb(false)
                break
        
            default:
                break;
        }
    }

  return (
    <div className='wrapper-footer'>
        <GridWrapper>
            <div className='footer'>
                <div className='logo-footer col-span-2'>
                    <img src={footer} alt="" />
                </div>
                <div className='nav-footer col-start-3 col-end-6'>
                    <a href="#" className='opc-nav color-nav'>features</a>
                    <a href="#" className='opc-nav color-nav'>pricing</a>
                    <a href="#" className='opc-nav color-nav'>contact</a>
                </div>
                <div className='social-footer col-start-12' >
                    <img src={ fb ? facebookH : facebook } onMouseEnter={()=>hover(3)} onMouseLeave={()=>hover(4)} alt="" className='img-fb'/>
                    <img src={ tw ? twitterH : twitter } onMouseEnter={()=>hover(1)} onMouseLeave={()=>hover(2)}  alt="" className='img-tw'/>
                </div>
            </div>
        </GridWrapper>
    </div>
  )
}
