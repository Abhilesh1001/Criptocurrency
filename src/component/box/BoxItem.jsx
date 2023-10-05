import React from 'react'
import './boxitem.css'

const BoxItem = ({boxwidth,boxheight,pboxwidth,pboxheight}) => {
  return (
    <div className='BoxItem' style={{width:`${boxwidth}`,height:`${boxheight}`,marginTop:`${pboxwidth}`,marginLeft:`${pboxheight}`}}>
        <div className='cross'>
            <div className="line"></div>
            <div className="line verticle"></div>
        </div>
    </div>
  )
}

export default BoxItem