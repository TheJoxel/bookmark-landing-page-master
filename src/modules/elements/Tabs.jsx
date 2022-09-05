import React from 'react'

export const Tabs = ({data, onClick, tabIndex}) => {
  return (
    <>
        <div className='wrapper-tabs'>
            {data.map((item, index)=>{
                return(
                    <div className='opc-tabs-border' key={index}>
                        <div className={`opc-tabs ${index === tabIndex ? 'opc-tabs opc-tabs-active' : 'opc-tabs'}`} key={index} onClick={() => onClick(index)}>{item.title}</div>
                    </div>
                )
            })}
        </div>
        <div>
            {data.map((item, index)=>{
                return(
                   index === tabIndex && <div key={index}>{item.body}</div>
                )
            })}
        </div>
    </>
  )
}
