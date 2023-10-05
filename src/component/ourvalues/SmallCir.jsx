import React from 'react'
import './small.css'
const SmallCir = ({deg,tops,lefts}) => {
  return (
    <div>
        <div className="smallCircle" style={{transform:`rotate(${deg}deg)`,top:`${tops}px`,left:`${lefts}px`}}>

        </div>
    </div>
  )
}

export default SmallCir