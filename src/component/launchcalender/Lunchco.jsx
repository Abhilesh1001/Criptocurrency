import React from 'react'
import BoxItem from '../box/BoxItem'
import './launch.css'

const Lunchco = ({time,datetime}) => {
  return (
    <div>
        <div className='lunchdate' >{datetime}</div>
                <div className='lunchtime'>{time} UTC</div>
                <div style={{display :'flex'}} className='my-2 mx-4'>
                    <div style={{marginRight:'14px'}}><BoxItem boxwidth ='70px' boxheight='73px' pboxwidth = '0px' pboxheight='0px' /></div>
                <BoxItem boxwidth ='70px' boxheight='73px' pboxwidth = '0px' pboxheight='0px' />
                </div>
                <div>ApeSwap Trivia Sunday ...</div>
    </div>
  )
}

export default Lunchco