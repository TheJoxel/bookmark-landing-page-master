import React, { useState } from 'react'
import { Tabs } from '../modules/elements/Tabs'
import { GridWrapper } from '../modules/layout/GridWrapper'
import features1 from '../assets/images/illustration-features-tab-1.svg'
import features2 from '../assets/images/illustration-features-tab-2.svg'
import features3 from '../assets/images/illustration-features-tab-3.svg'
import { Button } from '../modules/elements/Button'

export const Features = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  

  const ContentTab = ({image, title, description, className}) => {
    return(
      <div className='content-tab'>
        <div className={className}>
          <img src={image} alt="" />
        </div>
        <div className='content-tab-r'>
          <h2 className='title-tab'>{title}</h2>
          <p className='description-tab'>{description}</p>
          <Button text="More Info" className="button-mobile color-blue width-114"/>
        </div>
      </div>
    )
  }

  const ArrayData = [
    {title: "Simple Bookmarking",
     body: <ContentTab className="content-tab-l content-margin-left-18" image={features1} title="Bookmark in one click" description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."/>
    },
    {title: "Speedy Searching",
     body: <ContentTab className="content-tab-l content-margin-left-75" image={features2} title="Intelligent search" description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."/>
    },
    {title: "Easy Sharing",
     body: <ContentTab className="content-tab-l content-margin-left-115" image={features3} title="Share your bookmarks" description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."/>
    },
  ]




  function handleTab(index){
    setActiveIndex(index)
  }


  return (
    <div className='features-wrapper'> 
        <div className='back'></div>
        <GridWrapper>
            <div className='features col-span-12'>
                <h2 className='title-features'>Features</h2>
                <p className='description-features'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                <div className='tabs-features'>
                  <Tabs data={ArrayData} onClick={(index) => handleTab(index)} tabIndex={activeIndex} />
                </div>
            </div>
        </GridWrapper>
    </div>
  )
}
