import React from 'react'
import { Cards } from '../modules/elements/Cards'
import { GridWrapper } from '../modules/layout/GridWrapper'
import chrome from '../assets/images/logo-chrome.svg'
import firefox from '../assets/images/logo-firefox.svg'
import opera from '../assets/images/logo-opera.svg'

export const Download = () => {

    const CardsArray= [
        { 
            navegator: chrome,
            title:"Add to Chrome",
            version:"Minimum version 62",
            className:"margin-card-58"
        },{ 
            navegator: firefox,
            title:"Add to Firefox",
            version:"Minimum version 55",
            className:"margin-card-100"
        },{ 
            navegator: opera,
            title:"Add to Opera",
            version:"Minimum version 46",
            className:"margin-card-138"
        },
    ]


  return (
    <div className='download-wrapper'>
        <GridWrapper>
            <div className='download col-span-12'>
                <h2 className='title-download'>Download the extension</h2>
                <p className='p-download'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
                <div className='content-cards'>
                    {CardsArray.map((card, index)=>{
                        return(
                            <Cards key={index} navegator={card.navegator} title={card.title} version={card.version} className={card.className}/>
                        )
                    })}
                </div>
            </div>
        </GridWrapper>
    </div>
  )
}
