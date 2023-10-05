import React from 'react'
import './launch.css'
import Lunchco from './Lunchco'
import MarkunreadIcon from '@mui/icons-material/Markunread';



const Lunach = () => {
  return (
   <div>
    <div  className='lauch'>Launch Calender</div>
    <div className="row">
        <div className="col-sm-4 mx-4 sizecalender">
                <Lunchco  time='4:00' datetime='25 JAN' />
        </div>
        <div className="col-sm-4 mx-4 sizecalender">
        <Lunchco  time='4:00' datetime='25 JAN' />
        </div>
        <div className="col-sm-4 mx-4 sizecalender">
        <Lunchco  time='4:00' datetime='25 JAN' />
        </div>
        <div className="col-sm-4 mx-4 sizecalender">
        <Lunchco  time='4:00' datetime='25 JAN' />
        </div>
    </div>
    <div className='newsform'>
        <div className="row">
            <div className="col-sm-6 apsesawp">
                GET The Latest News From ApseSwap To Your Inbox. 
            </div>
            <div className="col-sm-6 apsesawp">
                <div className='markup'><MarkunreadIcon />skfarhadhossan97@gmail.com</div>
                <div className='scrollbutton'>
                <button className='applybutton'>Apply Now</button>
                </div>
                
            </div>
        </div>
    </div>
   </div>
    
  )
}

export default Lunach