import React, { useState } from 'react'
import arrow from '../../assets/images/icon-arrow.svg'
import arrow2 from '../../assets/images/icon-arrow-two.svg'

export const Acordeon = () => {

    const [acordeon, setAcordeon] = useState(false)

    const handleAcordeon = (index) => {
        setAcordeon(() => {
          return{ [index] : true}
        })
    }

    const arryAcordeon = [
        {
            title:"What is Bookmark?",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },{
            title:"How can I request a new browser?",
            description:"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
        },{
            title:"Is there a mobile app?",
            description:"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
        },{
            title:"What about other Chromium browsers?",
            description:"Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
        },
    ]

  return (
    <div className='wrapper-acordeon'>
        {arryAcordeon.map((content, index)=>{
            return(
                <div className='acordeon' key={index}>
                    <div className='header-acordeon' onClick={ () => handleAcordeon(index)}>
                        <h3 className={`${ acordeon[index] ===  true ? 't-acordeon-active' : 't-acordeon'}`}>{content.title}</h3>
                        <img src={`${ acordeon[index] === true ? arrow2 : arrow}`} alt="" className={`${ acordeon[index] === true && "rotate" }`}/>
                    </div>
                    { acordeon[index] && <div className='content-acordeon'>{content.description}</div>}
                </div>
            )
        })}
    </div>
  )
}
