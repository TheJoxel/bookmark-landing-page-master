import React, { useState } from 'react'
import { GridWrapper } from './GridWrapper'
import logo from '../../assets/images/logo-bookmark.svg'
import hamburger from '../../assets/images/icon-hamburger.svg'
import footer from '../../assets/images/logo-bookmark-footer.svg'
import close from '../../assets/images/icon-close.svg'
import facebook from '../../assets/images/icon-facebook.svg'
import twitter from '../../assets/images/icon-twitter.svg'

export const Menu = () => {

    const [menuMobile, setMenuMobile] = useState(false)

  return (
    <div className='menu-position-mobile'>
        <div className='wrapper-menu'>
            <GridWrapper>
                <div className='menu'>
                    <div className='logo col-span-2'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='hamburguesa' onClick={()=> setMenuMobile(!menuMobile)}>
                        <img src={hamburger} alt="" />
                    </div>
                    <div className='nav col-start-8 col-end-12'>
                        <a href="#" className='opc-nav'>features</a>
                        <a href="#" className='opc-nav'>pricing</a>
                        <a href="#" className='opc-nav'>contact</a>
                        <button className='button-login'>login</button>
                    </div>
                </div>
            </GridWrapper>
        </div>
        { menuMobile && <div className='wrapper-menu-mobile'>
            <GridWrapper>
                <div className='menu-mobile'>
                    <div className='logo-mobile col-span-2'>
                        <img src={footer} alt="" />
                    </div>
                    <div className='hamburguesa' onClick={()=> setMenuMobile(!menuMobile)}>
                        <img src={close} alt="" />
                    </div>
                    <div className='nav-mobile col-start-8 col-end-12'>
                        <a href="#" className='opc-nav opc-nav-mobile'>features</a>
                        <a href="#" className='opc-nav opc-nav-mobile'>pricing</a>
                        <a href="#" className='opc-nav opc-nav-mobile'>contact</a>
                        <button className='button-login button-login-mobile'>login</button>
                    </div>
                    <div className='social-footer social-footer-mobile col-start-12' >
                        <img src={facebook} alt="" className='img-fb'/>
                        <img src={twitter} alt="" className='img-tw'/>
                    </div>
                </div>
            </GridWrapper>
        </div>}
    </div>
  )
}
