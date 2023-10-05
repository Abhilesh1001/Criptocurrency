import React from 'react'
import './ours.css'
import BoxItem from '../box/BoxItem'
import Circle from './Circle'


const Ours = () => {
  return (
    <div>
        <div className='ourvals'>Our Values</div>
        <div className="row" style={{marginTop:'100px'}}>
            <div className="col-sm-4">
            <Circle />
            <BoxItem  boxwidth ='70px' boxheight='73px' pboxwidth = '-150px' pboxheight='20px' />
            <div style={{color:'white',fontSize:'40px', marginTop:'141px'}}>Values</div>
             <div style={{color:'white'}}>We create Tools for User leverage Defi Oppurtunity, Regardless of Location, Background, Wether, Or Experience.</div>
            </div>
            <div className="col-sm-4">
            <Circle />
            <BoxItem  boxwidth ='70px' boxheight='73px' pboxwidth = '-150px' pboxheight='20px' />
            <div style={{color:'white',fontSize:'40px', marginTop:'141px'}}>Security</div>
            <div style={{color:'white'}}>We Build Together Transparent Governance and Process Ensure Our Community and Processes Ensure Our Community Unserstand Our Goals.</div>
            </div>
            
            <div className="col-sm-4">
            <Circle />
            <BoxItem  boxwidth ='70px' boxheight='73px' pboxwidth = '-150px' pboxheight='20px' />
            <div style={{color:'white',fontSize:'40px', marginTop:'141px'}}>Transperency</div>
            <div style={{color:'white'}}>We Ensure That the safety of The funds of Our Users And ParentIs Is Highly Prioty.</div>
            </div>
        </div>
    </div>
  )
}

export default Ours