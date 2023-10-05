import React from 'react'
import './circle.css'
import BoxItem from '../box/BoxItem'
import SmallCir from './SmallCir'

const Circle = () => {
  return (
    <div className='circleour'>
        <BoxItem boxwidth='100px' boxheight='100px'  />
        <SmallCir deg={60} tops={-34} lefts={100} />
        <SmallCir deg={60} tops={-77} lefts={94}/>
        <SmallCir deg={90} tops={-97} lefts={114} />
        <SmallCir deg={60} tops={90} lefts={111} />
        <SmallCir deg={134} tops={-69} lefts={95} />
        <SmallCir deg={159} tops={-14} lefts={79} />
        <SmallCir deg={230} tops={54} lefts={24}/>
        <SmallCir deg={90} tops={101} lefts={-127} />
        <SmallCir deg={121} tops={77} lefts={-226}/>
        <SmallCir deg={180} tops={27} lefts={-301} />
    </div>
  )
}

export default Circle