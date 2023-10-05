import React from 'react'
import './viewdetals.css'
import StarIcon from '@mui/icons-material/Star';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const ViewDetails = () => {
  return (
    <div className='firstBox' style={{position:'relative'}}>
        <div style={{zIndex:2}}>
          <div className='circle' ></div>
          <div className='circle2' ></div>
          <div className='circle3' ></div>
          <div className='circle4' ></div>
          <div className='star'><StarIcon  style={{color:'white'}}/></div>
          <div className='star1'><StarIcon  style={{color:'white'}}/></div>
          <div className='star2'><StarIcon  style={{color:'white'}}/></div>
          <div className='star3'><StarIcon  style={{color:'white'}}/></div>
          <div className='lineDetails'></div>
          <div className='lineDetails1'></div>  
          </div>
          <div className='viewdetails'>Value Details<ArrowRightAltIcon /></div>  

    </div>
  )
}

export default ViewDetails